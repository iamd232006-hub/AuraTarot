import { useState, useEffect } from 'react';
import { Key } from 'lucide-react';

// WARNING: Storing API keys in localStorage is insecure. 
// This is implemented as requested for demonstration purposes.
// Do not use this in production apps where security is critical.

export default function ApiKeySettings({ onSave }: { onSave?: () => void }) {
  const [apiKey, setApiKey] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Expose open function to parent or use a global state if needed.
  // For now, we'll use a custom event to trigger opening.
  useEffect(() => {
    const savedKey = localStorage.getItem('GEMINI_API_KEY');
    if (savedKey) {
      setApiKey(savedKey);
    } else {
      setIsOpen(true);
    }

    const handleOpenSettings = () => setIsOpen(true);
    window.addEventListener('open-api-settings', handleOpenSettings);
    return () => window.removeEventListener('open-api-settings', handleOpenSettings);
  }, []);

  const handleSave = () => {
    localStorage.setItem('GEMINI_API_KEY', apiKey);
    setIsOpen(false);
    if (onSave) onSave();
  };

  const handleClear = () => {
    localStorage.removeItem('GEMINI_API_KEY');
    setApiKey('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-slate-800 border border-amber-500/30 rounded-full text-amber-500 hover:bg-slate-700 transition-all shadow-lg"
      >
        <Key className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-slate-900 border border-amber-500/30 p-6 rounded-2xl shadow-2xl space-y-4">
          <h3 className="text-amber-100 font-serif text-lg">Gemini API Key</h3>
          <p className="text-slate-400 text-xs">
            Enter your own API key to use with Gemini. 
            <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-amber-500 underline block mt-1">
              Get Gemini API key in Google AI Studio
            </a>
          </p>
          <input 
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="AIza..."
            className="w-full bg-slate-950 border border-amber-500/20 p-3 rounded-lg text-amber-100 outline-none focus:border-amber-500/50"
          />
          <div className="flex gap-2">
            <button onClick={handleSave} className="flex-1 py-2 bg-amber-500 text-slate-950 rounded-lg font-serif text-sm">Save</button>
            <button onClick={handleClear} className="flex-1 py-2 bg-slate-800 text-slate-300 rounded-lg font-serif text-sm">Clear</button>
          </div>
        </div>
      )}
    </div>
  );
}

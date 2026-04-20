import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TarotCard as TarotCardType, SpreadType } from './types';
import { TAROT_DECK, SPREADS, LANGUAGES } from './constants';
import { getTarotReading } from './services/gemini';
import TarotCard from './components/TarotCard';
import ReadingDisplay from './components/ReadingDisplay';
import ApiKeySettings from './components/ApiKeySettings';
import { Sparkles, Moon, Sun, Star, Compass } from 'lucide-react';

export default function App() {
  const [question, setQuestion] = useState('');
  const [readings, setReadings] = useState<{question: string, interpretation: string}[]>([]);
  const [spreadType, setSpreadType] = useState<SpreadType>('Single');
  const [selectedCards, setSelectedCards] = useState<{ card: TarotCardType; isReversed: boolean; position: string }[]>([]);
  const [isDrawingExtra, setIsDrawingExtra] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'input' | 'selection' | 'reading'>('input');
  const [deck, setDeck] = useState<TarotCardType[]>([]);
  const [language, setLanguage] = useState<string>('English');

  useEffect(() => {
    // Shuffle deck on mount
    setDeck([...TAROT_DECK].sort(() => Math.random() - 0.5));
  }, []);

  const handleStartReading = () => {
    if (!question.trim()) return;
    setSelectedCards([]);
    setReadings([]);
    setDeck([...TAROT_DECK].sort(() => Math.random() - 0.5));
    setStep('selection');
  };

  const handleCardSelect = (card: TarotCardType) => {
    if (isDrawingExtra) {
      const newCards = [...selectedCards, { card, isReversed: Math.random() > 0.5, position: 'Extra' }];
      setSelectedCards(newCards);
      setIsDrawingExtra(false);
      performReading(newCards);
      return;
    }

    const positionsMap: Record<SpreadType, string[]> = {
      'Single': ['The Answer'],
      'PastPresentFuture': ['Past', 'Present', 'Future'],
      'MindBodySpirit': ['Mind', 'Body', 'Spirit'],
      'ProblemObstacleSolution': ['Problem', 'Obstacle', 'Solution'],
      'Relationship': ['You', 'The Other', 'The Dynamic', 'The Obstacle', 'The Outcome'],
      'Horseshoe': ['The Past', 'The Present', 'Hidden Factors', 'The Obstacle', 'External Influences', 'Advice', 'Outcome'],
      'CelticCross': [
        'The Present', 'The Challenge', 'The Past', 'The Future', 
        'Above (Conscious)', 'Below (Subconscious)', 'Advice', 
        'External Influences', 'Hopes and Fears', 'Outcome'
      ]
    };
    
    const positions = positionsMap[spreadType];
    const currentPosition = positions[selectedCards.length];
    
    const isReversed = Math.random() > 0.7; // 30% chance of reversal
    
    const newSelectedCards = [...selectedCards, { card, isReversed, position: currentPosition }];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === positions.length) {
      setTimeout(() => {
        performReading(newSelectedCards);
      }, 1500);
    }
  };

  const performReading = async (cards: { card: TarotCardType; isReversed: boolean; position: string }[] | null = null, followUpQuestion: string = '') => {
    const cardsToProcess = cards || selectedCards;
    const apiKey = localStorage.getItem('GEMINI_API_KEY');
    
    if (!apiKey) {
      window.dispatchEvent(new Event('open-api-settings'));
      setReadings(prev => [...prev, { question: question, interpretation: "Please enter your Gemini API key in the settings (key icon) to proceed." }]);
      setStep('reading');
      return;
    }

    setIsLoading(true);
    setStep('reading');
    
    try {
      const questionToUse = followUpQuestion || question;
      const result = await getTarotReading(questionToUse, spreadType, cardsToProcess, language, apiKey);
      setReadings(prev => [...prev, { question: questionToUse, interpretation: result }]);
    } catch (error) {
      console.error("Reading Error:", error);
      setReadings(prev => [...prev, { question: followUpQuestion || question, interpretation: "The mystical energies were interrupted. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetReading = () => {
    setQuestion('');
    setReadings([]);
    setSelectedCards([]);
    setStep('input');
    setDeck([...TAROT_DECK].sort(() => Math.random() - 0.5));
  };

  const [view, setView] = useState<'home' | 'oracle' | 'spreads' | 'wisdom'>('home');
  const [wisdomFilter, setWisdomFilter] = useState<'All' | 'Major' | 'Minor'>('All');

  const [selectedWisdomCard, setSelectedWisdomCard] = useState<TarotCardType | null>(null);

  const filteredWisdomCards = TAROT_DECK.filter(card => {
    if (wisdomFilter === 'All') return true;
    return card.arcana === wisdomFilter;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1, scale: 0.5 }}
              animate={{ 
                opacity: [0.1, 0.5, 0.1],
                scale: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 3 + Math.random() * 4, 
                repeat: Infinity, 
                delay: Math.random() * 5 
              }}
              className="absolute w-1 h-1 bg-amber-200/40 rounded-full"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%` 
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 p-4 md:p-8 flex justify-between items-center max-w-7xl mx-auto">
        <div 
          className="flex items-center space-x-2 md:space-x-3 cursor-pointer group"
          onClick={() => { resetReading(); setView('home'); }}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 border border-amber-500/50 rounded-full flex items-center justify-center group-hover:border-amber-400 transition-colors">
            <Moon className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
          </div>
          <h1 className="text-lg md:text-2xl font-serif tracking-widest uppercase text-amber-400 group-hover:text-amber-300 transition-colors">Aura Tarot</h1>
        </div>
        <div className="flex items-center space-x-3 md:space-x-8 text-[9px] md:text-xs tracking-widest uppercase text-amber-500/60 font-serif">
          <div className="relative group/lang">
            <select 
              value={LANGUAGES.find(l => l.name === language)?.code || 'en'}
              onChange={(e) => {
                const selected = LANGUAGES.find(l => l.code === e.target.value);
                if (selected) setLanguage(selected.name);
              }}
              className="bg-transparent border border-amber-500/20 px-2 md:px-4 py-1 md:py-1.5 rounded-full outline-none hover:border-amber-500/50 transition-all cursor-pointer appearance-none text-amber-400 pr-5 md:pr-8"
            >
              {LANGUAGES.map(l => (
                <option key={l.code} value={l.code} className="bg-slate-900 text-slate-200">
                  {l.name}
                </option>
              ))}
            </select>
            <div className="absolute right-1.5 md:right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Compass className="w-2 h-2 md:w-3 h-3 text-amber-500/40" />
            </div>
          </div>
          <span 
            onClick={() => setView('oracle')}
            className={`hover:text-amber-400 cursor-pointer transition-colors ${view === 'oracle' ? 'text-amber-400 border-b border-amber-400/30' : ''}`}
          >
            Oracle
          </span>
          <span 
            onClick={() => setView('spreads')}
            className={`hover:text-amber-400 cursor-pointer transition-colors ${view === 'spreads' ? 'text-amber-400 border-b border-amber-400/30' : ''}`}
          >
            Spreads
          </span>
          <span 
            onClick={() => setView('wisdom')}
            className={`hover:text-amber-400 cursor-pointer transition-colors ${view === 'wisdom' ? 'text-amber-400 border-b border-amber-400/30' : ''}`}
          >
            Wisdom
          </span>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Existing home content */}
              {step === 'input' && (
                <motion.div 
                  key="input"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-2xl mx-auto space-y-8 md:space-y-12 text-center py-10 md:py-20"
                >
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-6xl font-serif text-amber-100 leading-tight">
                      Seek the <span className="text-amber-400 italic">Unseen</span>
                    </h2>
                    <p className="text-sm md:text-lg text-slate-400 max-w-md mx-auto px-4">
                      Focus your energy. Ask the universe a question that weighs on your soul.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="relative group bg-slate-900/50 rounded-2xl border-b-2 border-amber-500/20 focus-within:border-amber-500/80 transition-all duration-500 overflow-hidden mx-4 md:mx-0">
                      <textarea 
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="What does the future hold for my path?"
                        className="w-full bg-transparent outline-none p-4 md:p-6 pb-2 text-base md:text-xl text-amber-100 placeholder:text-slate-700 resize-none h-32"
                      />
                      <div className="flex justify-end p-3 md:p-4">
                        <button 
                          onClick={handleStartReading}
                          disabled={!question.trim()}
                          className="px-6 md:px-8 py-2 bg-amber-500 text-slate-950 font-serif tracking-widest uppercase text-[9px] md:text-xs rounded-full hover:bg-amber-400 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-amber-500/20 flex items-center gap-2"
                        >
                          Consult the Oracle
                          <Sparkles className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="absolute bottom-0 left-0 h-0.5 bg-amber-400 w-0 group-focus-within:w-full transition-all duration-700" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {SPREADS.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setSpreadType(s.id as SpreadType)}
                          className={`p-6 rounded-2xl border transition-all duration-300 text-left space-y-2 ${
                            spreadType === s.id 
                              ? 'bg-amber-500/10 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.1)]' 
                              : 'bg-slate-900/30 border-white/5 hover:border-white/10'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className={`font-serif tracking-wider uppercase text-xs md:text-sm ${spreadType === s.id ? 'text-amber-400' : 'text-slate-400'}`}>
                              {s.name}
                            </span>
                            {spreadType === s.id && <Sparkles className="w-4 h-4 text-amber-400" />}
                          </div>
                          <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed">{s.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

          {step === 'selection' && (
            <motion.div 
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12 text-center"
            >
              <div className="space-y-2 px-4">
                <h2 className="text-2xl md:text-3xl font-serif text-amber-100">Draw Your Cards</h2>
                <p className="text-amber-500/60 text-[10px] md:text-sm tracking-widest uppercase font-serif">
                  Select {
                    spreadType === 'Single' ? '1 card' : 
                    spreadType === 'PastPresentFuture' || spreadType === 'MindBodySpirit' || spreadType === 'ProblemObstacleSolution' ? '3 cards' : 
                    spreadType === 'Relationship' ? '5 cards' :
                    spreadType === 'Horseshoe' ? '7 cards' : '10 cards'
                  } from the deck
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-5xl mx-auto py-8 md:py-12 px-4">
                {deck.map((card, i) => {
                  const selection = selectedCards.find(sc => sc.card.id === card.id);
                  const isSelected = !!selection;
                  
                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.01 }}
                      className="relative"
                    >
                      <TarotCard 
                        card={card} 
                        isFlipped={isSelected}
                        isReversed={selection?.isReversed}
                        onClick={() => !isSelected && handleCardSelect(card)}
                        size="sm"
                        className={`transition-all duration-500 ${
                          isSelected 
                            ? 'ring-2 ring-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.3)] scale-105 z-10' 
                            : 'hover:-translate-y-4'
                        }`}
                      />
                      {isSelected && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-lg z-20"
                        >
                          <span className="text-[9px] md:text-[10px] font-bold text-slate-950">
                            {selectedCards.findIndex(sc => sc.card.id === card.id) + 1}
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 'reading' && (
              <div key="reading" className="space-y-8">
                <ReadingDisplay 
                  readings={readings} 
                  cards={selectedCards} 
                  onReset={resetReading}
                  onFollowUp={(q) => performReading(selectedCards, q)}
                  onDrawExtra={() => {
                    setIsDrawingExtra(true);
                    setStep('selection');
                  }}
                  showControls={!isLoading && readings.length > 0}
                  isLoading={isLoading}
                />
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12 space-y-8"
                  >
                    <div className="relative w-16 h-16">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-amber-500/20 rounded-full"
                      />
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 border-2 border-amber-500/40 rounded-full border-t-amber-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Compass className="w-6 h-6 text-amber-400" />
                      </div>
                    </div>
                    <div className="space-y-2 text-center">
                      <p className="text-amber-400 font-serif tracking-[0.3em] uppercase text-xs md:text-sm animate-pulse">Manifesting Your Vision</p>
                      <p className="text-slate-500 text-[10px] md:text-xs italic">The AI is painting your destiny and channeling the spirits...</p>
                    </div>
                  </motion.div>
                )}
              </div>
          )}
        </motion.div>
      )}
      {view === 'oracle' && (
            <motion.div 
              key="oracle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto text-center space-y-12 py-20 px-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-amber-100">Daily Oracle</h2>
                <p className="text-slate-400 text-sm md:text-base">Receive a single card to guide your energy for the next 24 hours.</p>
              </div>
              <button 
                onClick={() => {
                  setQuestion("What is my daily guidance for today?");
                  setSpreadType('Single');
                  setSelectedCards([]);
                  setReadings([]);
                  setDeck([...TAROT_DECK].sort(() => Math.random() - 0.5));
                  setStep('selection');
                  setView('home');
                }}
                className="px-8 md:px-12 py-3 md:py-4 bg-amber-500 text-slate-950 font-serif tracking-widest uppercase text-xs md:text-sm rounded-full hover:bg-amber-400 transition-all"
              >
                Draw Daily Card
              </button>
            </motion.div>
          )}

          {view === 'spreads' && (
            <motion.div 
              key="spreads"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto space-y-12 py-10 px-6 md:px-0"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-amber-100 text-center">Sacred Spreads</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SPREADS.map((s) => (
                    <div key={s.id} className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-amber-500/10 space-y-4">
                      <h3 className="text-lg md:text-xl font-serif text-amber-400">{s.name}</h3>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{s.description}</p>
                      <button 
                        onClick={() => {
                          setSpreadType(s.id as SpreadType);
                          setView('home');
                          setStep('input');
                        }}
                        className="text-amber-500/60 hover:text-amber-400 text-[10px] md:text-xs tracking-widest uppercase font-serif transition-colors"
                      >
                        Use this spread →
                      </button>
                    </div>
                ))}
              </div>
            </motion.div>
          )}

          {view === 'wisdom' && (
            <motion.div 
              key="wisdom"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12 py-10 px-6"
            >
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-amber-100">Arcana Wisdom</h2>
                <p className="text-slate-400 text-sm md:text-base">Explore the deep meanings of the 78 Tarot cards.</p>
              </div>

              {/* Filter Buttons */}
              <div className="flex justify-center gap-4 flex-wrap">
                {(['All', 'Major', 'Minor'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setWisdomFilter(filter)}
                    className={`px-6 py-2 rounded-full border transition-all duration-300 font-serif text-[10px] uppercase tracking-widest ${
                      wisdomFilter === filter
                        ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                        : 'border-amber-500/20 text-slate-400 hover:border-amber-500/50'
                    }`}
                  >
                    {filter} Arcana
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {filteredWisdomCards.map((card) => (
                  <motion.div 
                    key={card.id} 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="group cursor-pointer space-y-3"
                    onClick={() => setSelectedWisdomCard(card)}
                  >
                    <div className="aspect-[2/3] rounded-xl overflow-hidden border border-amber-900/20 bg-[#f4e4bc] group-hover:border-amber-900/50 transition-all relative">
                      <img 
                        src={card.image} 
                        alt={card.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity mix-blend-multiply"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/40 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-0 right-0 text-center bg-[#f4e4bc]/60 backdrop-blur-[2px]">
                        <p className="text-[10px] text-amber-950 font-serif uppercase tracking-widest font-bold">{card.name}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Wisdom Modal */}
              <AnimatePresence>
                {selectedWisdomCard && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl"
                    onClick={() => setSelectedWisdomCard(null)}
                  >
                    <motion.div 
                      initial={{ scale: 0.9, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.9, y: 20 }}
                      className="bg-[#fdf6e3] border border-amber-900/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="space-y-6">
                        <div className="aspect-[2/3] max-w-[280px] mx-auto rounded-2xl overflow-hidden border-4 border-amber-900/20 shadow-2xl shadow-amber-900/10 bg-[#f4e4bc]">
                          <img 
                            src={selectedWisdomCard.image} 
                            alt={selectedWisdomCard.name}
                            className="w-full h-full object-cover mix-blend-multiply"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                      <div className="space-y-6 md:space-y-8">
                        <div className="space-y-2 text-center md:text-left">
                          <h3 className="text-2xl md:text-4xl font-serif text-amber-950">{selectedWisdomCard.name}</h3>
                          <p className="text-amber-900/40 font-serif tracking-widest uppercase text-[10px] md:text-xs">{selectedWisdomCard.arcana} Arcana</p>
                        </div>
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <h4 className="text-amber-900/60 font-serif text-[10px] md:text-sm uppercase tracking-widest font-bold">Upright Meaning</h4>
                            <p className="text-slate-800 leading-relaxed text-xs md:text-base">{selectedWisdomCard.meaningUpright}</p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-amber-900/60 font-serif text-[10px] md:text-sm uppercase tracking-widest font-bold">Reversed Meaning</h4>
                            <p className="text-slate-600 leading-relaxed italic text-xs md:text-base">{selectedWisdomCard.meaningReversed}</p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-amber-900/60 font-serif text-[10px] md:text-sm uppercase tracking-widest font-bold">Symbolism</h4>
                            <p className="text-slate-700 text-xs md:text-sm leading-relaxed">{selectedWisdomCard.description}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => setSelectedWisdomCard(null)}
                          className="w-full py-3 border border-amber-900/20 text-amber-900/60 hover:text-amber-950 hover:border-amber-900/50 transition-all rounded-full font-serif text-xs uppercase tracking-widest font-bold"
                        >
                          Close Wisdom
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <ApiKeySettings onSave={() => {
        if (step === 'reading' && readings.length === 0) {
          performReading();
        }
      }} />

      {/* Footer Decoration */}
      <footer className="relative z-10 p-12 text-center border-t border-white/5">
        <div className="flex justify-center space-x-6 mb-6">
          <Sun className="w-4 h-4 text-amber-500/20" />
          <Moon className="w-4 h-4 text-amber-500/20" />
          <Star className="w-4 h-4 text-amber-500/20" />
        </div>
        <p className="text-[10px] tracking-[0.4em] uppercase text-amber-500/30 font-serif">
          © 2026 Aura Tarot • Mystical Intelligence
        </p>
      </footer>
    </div>
  );
}

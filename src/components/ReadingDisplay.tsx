import ReactMarkdown from 'react-markdown';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { TarotCard as TarotCardType } from '../types';
import TarotCard from './TarotCard';

interface ReadingDisplayProps {
  readings: { question: string, interpretation: string }[];
  cards: { card: TarotCardType; isReversed: boolean; position: string }[];
  onReset: () => void;
  onFollowUp: (question: string) => void;
  onDrawExtra: () => void;
  showControls: boolean;
  isLoading: boolean;
}

export default function ReadingDisplay({ readings, cards, onReset, onFollowUp, onDrawExtra, showControls, isLoading }: ReadingDisplayProps) {
  const [followUp, setFollowUp] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [readings]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-4 md:p-6 space-y-8 md:space-y-12"
    >
      <div className="space-y-12">
        {readings.map((reading, index) => {
          // Determine which cards belong to this reading step
          // Initial reading gets all cards except the extra ones added for follow-ups
          // Subsequent readings get one extra card each
          const numExtraCards = readings.length - 1;
          const cardsForThisReading = index === 0 
            ? cards.slice(0, cards.length - numExtraCards)
            : [cards[cards.length - numExtraCards + (index - 1)]];
          
          const questionForThisStep = reading.question;

          return (
            <div key={index} className="space-y-6" ref={index === readings.length - 1 ? scrollRef : null}>
              <div className="text-center space-y-2 mb-4">
                <h3 className="text-amber-500/60 font-serif text-xs uppercase tracking-widest">
                  {index === 0 ? 'Your Question' : 'Follow-up Question'}
                </h3>
                <p className="text-amber-100 font-serif text-xl md:text-2xl italic">
                  {questionForThisStep ? `"${questionForThisStep}"` : ''}
                </p>
              </div>

              {/* Only show cards if not loading */}
              {!isLoading && (
                <div className={`grid gap-4 md:gap-8 ${
                  cardsForThisReading.length > 3 
                    ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5' 
                    : 'flex flex-wrap justify-center gap-4'
                }`}>
                  {cardsForThisReading.map((c, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center space-y-2 md:space-y-4"
                    >
                      <p className="text-amber-500/60 font-serif text-[7px] md:text-[10px] tracking-widest uppercase text-center h-6 md:h-8 flex items-center px-1">{c.position}</p>
                      <TarotCard 
                        card={c.card} 
                        isReversed={c.isReversed} 
                        isFlipped={true} 
                        size={cardsForThisReading.length > 3 ? 'sm' : 'md'} 
                      />
                      <p className="text-amber-400 font-serif text-[10px] md:text-sm text-center">{c.card.name}</p>
                    </motion.div>
                  ))}
                </div>
              )}
              <div className="bg-slate-900/50 backdrop-blur-md border border-amber-500/20 rounded-2xl p-5 md:p-8 shadow-2xl mx-2 md:mx-0">
                <div className="prose prose-invert prose-amber max-w-none prose-sm md:prose-base">
                  <ReactMarkdown>{reading.interpretation}</ReactMarkdown>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Render extra cards for follow-up if loading, to keep them in position */}
        {/* Removed extra cards rendering block during loading as requested */}
      </div>

      {showControls && (
        <div className="bg-slate-900/30 border border-amber-500/10 rounded-2xl p-6 space-y-4">
          <h4 className="text-amber-100 font-serif text-sm uppercase tracking-widest">Deepen Your Reading</h4>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="text"
              value={followUp}
              onChange={(e) => setFollowUp(e.target.value)}
              placeholder="Ask a follow-up question..."
              className="flex-1 bg-slate-950 border border-amber-500/20 p-3 rounded-lg text-amber-100 outline-none focus:border-amber-500/50"
            />
            <button 
              onClick={() => { 
                onFollowUp(followUp); 
                setFollowUp(''); 
              }}
              disabled={!followUp.trim()}
              className="px-6 py-3 bg-amber-500 text-slate-950 rounded-lg font-serif text-sm disabled:opacity-50"
            >
              Ask
            </button>
            <button 
              onClick={onDrawExtra}
              className="px-6 py-3 bg-slate-800 text-amber-400 border border-amber-500/30 rounded-lg font-serif text-sm hover:bg-slate-700"
            >
              Draw Extra Card
            </button>
          </div>
        </div>
      )}

      {!isLoading && (
        <div className="flex justify-center pt-8">
          <button 
            onClick={onReset}
            className="px-6 md:px-8 py-2 md:py-3 bg-transparent border border-amber-500/50 text-amber-400 rounded-full hover:bg-amber-500/10 transition-all duration-300 font-serif tracking-widest uppercase text-xs md:text-sm"
          >
            Seek Another Truth
          </button>
        </div>
      )}
    </motion.div>
  );
}

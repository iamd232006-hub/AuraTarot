import { motion } from 'motion/react';
import { TarotCard as TarotCardType } from '../types';
import { Sparkles, Moon, Star } from 'lucide-react';

interface TarotCardProps {
  card: TarotCardType;
  isReversed?: boolean;
  isFlipped?: boolean;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function TarotCard({ 
  card, 
  isReversed = false, 
  isFlipped = false, 
  onClick, 
  className = '',
  size = 'md'
}: TarotCardProps) {
  const sizeClasses = {
    sm: 'w-20 h-32 md:w-24 md:h-36',
    md: 'w-32 h-48 md:w-40 md:h-64',
    lg: 'w-48 h-72 md:w-56 md:h-88'
  };

  return (
    <div 
      className={`relative perspective-1000 cursor-pointer ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Back of the card */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-amber-500/40 bg-slate-950 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-amber-950/20" />
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
          
          <div className="w-full h-full flex items-center justify-center p-3">
             <div className="w-full h-full border border-amber-500/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Intricate Pattern */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    {[...Array(12)].map((_, i) => (
                      <line 
                        key={i} 
                        x1="50" y1="5" x2="50" y2="95" 
                        transform={`rotate(${i * 30} 50 50)`} 
                        stroke="currentColor" 
                        strokeWidth="0.2" 
                      />
                    ))}
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full border border-amber-500/40 flex items-center justify-center bg-amber-500/5 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                    <Moon className="w-6 h-6 text-amber-400/80 animate-pulse" />
                  </div>
                  <div className="flex space-x-1">
                    <Star className="w-2 h-2 text-amber-500/40 animate-pulse" />
                    <Star className="w-2 h-2 text-amber-500/60 animate-pulse delay-75" />
                    <Star className="w-2 h-2 text-amber-500/40 animate-pulse delay-150" />
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-amber-500/30 rounded-tl-sm" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-amber-500/30 rounded-tr-sm" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-amber-500/30 rounded-bl-sm" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-amber-500/30 rounded-br-sm" />
             </div>
          </div>
        </div>

        {/* Front of the card */}
        <div 
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-amber-900/40 bg-[#f4e4bc] shadow-2xl rotate-y-180"
          style={{ transform: `rotateY(180deg) ${isReversed ? 'rotate(180deg)' : ''}` }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full relative"
          >
            {card.image ? (
              <img 
                src={card.image} 
                alt={card.name} 
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full bg-[#e8d4a2] animate-pulse flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-amber-900/20" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-center bg-[#f4e4bc]/80 backdrop-blur-sm border-t border-amber-900/10">
              <p className="text-amber-950 font-serif text-[8px] md:text-xs tracking-[0.2em] uppercase font-bold">{card.name}</p>
              {isReversed && <p className="text-amber-900/60 text-[7px] md:text-[8px] uppercase tracking-widest mt-0.5 italic">Reversed</p>}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

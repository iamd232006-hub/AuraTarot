export interface TarotCard {
  id: string;
  name: string;
  arcana: 'Major' | 'Minor';
  suit?: 'Wands' | 'Cups' | 'Swords' | 'Pentacles';
  rank?: string;
  meaningUpright: string;
  meaningReversed: string;
  image: string;
  description: string;
}

export type SpreadType = 
  | 'Single' 
  | 'PastPresentFuture' 
  | 'CelticCross' 
  | 'Relationship' 
  | 'Horseshoe' 
  | 'MindBodySpirit' 
  | 'ProblemObstacleSolution';

export interface Reading {
  id: string;
  timestamp: number;
  question: string;
  spreadType: SpreadType;
  cards: {
    card: TarotCard;
    isReversed: boolean;
    position: string;
  }[];
  interpretation: string;
}

import { TarotCard } from './types';

export const MAJOR_ARCANA: TarotCard[] = [
  {
    id: '0',
    name: 'The Fool',
    arcana: 'Major',
    meaningUpright: 'New beginnings, innocence, spontaneity, a free spirit.',
    meaningReversed: 'Recklessness, risk-taking, inconsideration.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
    description: 'A young man stands on the edge of a jagged cliff, looking up at the sky with a look of pure wonder. He carries a small knapsack and a white rose. A small dog leaps at his heels. The background is a vast, golden mountain range under a bright sky.'
  },
  {
    id: '1',
    name: 'The Magician',
    arcana: 'Major',
    meaningUpright: 'Manifestation, resourcefulness, power, inspired action.',
    meaningReversed: 'Manipulation, poor planning, untapped talents.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
    description: 'A powerful figure stands with one hand pointing a wand to the heavens and the other pointing to the earth. On a table before him are a cup, a pentacle, a sword, and a wand. He is surrounded by blooming roses and lilies, with an infinity symbol floating above his head.'
  },
  {
    id: '2',
    name: 'The High Priestess',
    arcana: 'Major',
    meaningUpright: 'Intuition, sacred knowledge, divine feminine, the subconscious mind.',
    meaningReversed: 'Secrets, disconnected from intuition, withdrawal and silence.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg',
    description: 'A serene woman sits between two pillars, one black (B) and one white (J). She wears a crown of the moon and holds a scroll marked "TORA". A thin veil decorated with pomegranates hangs behind her, revealing a glimpse of a deep blue sea.'
  },
  {
    id: '3',
    name: 'The Empress',
    arcana: 'Major',
    meaningUpright: 'Femininity, beauty, nature, nurturing, abundance.',
    meaningReversed: 'Creative block, dependence on others.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg',
    description: 'A radiant queen sits on a throne of soft cushions in a lush, golden wheat field. She wears a crown of twelve stars and a robe patterned with pomegranates. A waterfall flows in the background, symbolizing the abundance of nature.'
  },
  {
    id: '4',
    name: 'The Emperor',
    arcana: 'Major',
    meaningUpright: 'Authority, establishment, structure, a father figure.',
    meaningReversed: 'Domination, excessive control, lack of discipline, inflexibility.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg',
    description: 'A stern, bearded king sits on a massive stone throne adorned with four ram heads. He wears red robes and armor, holding an ankh scepter and an orb. Behind him are barren, red mountains, representing his unyielding authority.'
  },
  {
    id: '5',
    name: 'The Hierophant',
    arcana: 'Major',
    meaningUpright: 'Spiritual wisdom, religious beliefs, conformity, tradition, institutions.',
    meaningReversed: 'Personal beliefs, freedom, challenging the status quo.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg',
    description: 'A religious figure sits on a throne between two pillars, wearing a triple crown. He holds a triple cross and gestures a blessing to two kneeling acolytes. Two crossed keys lie at his feet, representing the keys to spiritual knowledge.'
  },
  {
    id: '6',
    name: 'The Lovers',
    arcana: 'Major',
    meaningUpright: 'Love, harmony, relationships, values alignment, choices.',
    meaningReversed: 'Self-love, disharmony, imbalance, misalignment of values.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_06_Lovers.jpg/500px-RWS_Tarot_06_Lovers.jpg',
    description: 'A man and a woman stand naked in a beautiful garden, blessed by a great angel in the sky. Behind the man is the Tree of Life, and behind the woman is the Tree of Knowledge with a serpent. A mountain rises in the distance, representing the path of growth.'
  },
  {
    id: '7',
    name: 'The Chariot',
    arcana: 'Major',
    meaningUpright: 'Control, willpower, success, action, determination.',
    meaningReversed: 'Self-discipline, opposition, lack of direction.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
    description: 'A brave warrior stands in a chariot decorated with stars and alchemical symbols. He is pulled by two sphinxes, one black and one white, moving in different directions. He controls them through sheer willpower, not reins.'
  },
  {
    id: '8',
    name: 'Strength',
    arcana: 'Major',
    meaningUpright: 'Strength, courage, persuasion, influence, compassion.',
    meaningReversed: 'Self-doubt, low energy, raw emotion.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg',
    description: 'A woman in white robes gently closes the jaws of a large lion. She has an infinity symbol above her head and is draped in flowers. This represents the triumph of spiritual and inner strength over animalistic instincts.'
  },
  {
    id: '9',
    name: 'The Hermit',
    arcana: 'Major',
    meaningUpright: 'Soul-searching, introspection, being alone, inner guidance.',
    meaningReversed: 'Isolation, loneliness, withdrawal.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg',
    description: 'An old man stands alone on a snowy mountain peak at night. He holds a staff in one hand and a lantern containing a six-pointed star in the other, lighting the way for those who seek the truth.'
  },
  {
    id: '10',
    name: 'Wheel of Fortune',
    arcana: 'Major',
    meaningUpright: 'Good luck, karma, life cycles, destiny, a turning point.',
    meaningReversed: 'Bad luck, resistance to change, breaking cycles.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg',
    description: 'A large, inscribed wheel turns in the sky, surrounded by a sphinx, a snake, and a jackal-headed figure. In the corners are the four living creatures of the apocalypse, representing the fixed laws of the universe amidst change.'
  },
  {
    id: '11',
    name: 'Justice',
    arcana: 'Major',
    meaningUpright: 'Justice, fairness, truth, cause and effect, law.',
    meaningReversed: 'Unfairness, lack of accountability, dishonesty.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg',
    description: 'A figure sits on a throne between two pillars, wearing a crown with a small square gem. She holds a sword upright in one hand and a pair of scales in the other, representing the balance of truth and the execution of law.'
  },
  {
    id: '12',
    name: 'The Hanged Man',
    arcana: 'Major',
    meaningUpright: 'Pause, surrender, letting go, new perspectives.',
    meaningReversed: 'Delays, resistance, stalling, indecision.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg',
    description: 'A man hangs upside down by one foot from a T-shaped tree made of living wood. His free leg is crossed, and a bright halo of light surrounds his head, symbolizing a new perspective and spiritual enlightenment through sacrifice.'
  },
  {
    id: '13',
    name: 'Death',
    arcana: 'Major',
    meaningUpright: 'Endings, change, transformation, transition.',
    meaningReversed: 'Resistance to change, personal transformation, inner purging.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg',
    description: 'A skeleton in black armor rides a pale horse, carrying a black flag with a white rose. Below him, people of all ranks fall. In the background, the sun sets between two towers, representing the end of one cycle and the promise of a new dawn.'
  },
  {
    id: '14',
    name: 'Temperance',
    arcana: 'Major',
    meaningUpright: 'Balance, moderation, patience, purpose.',
    meaningReversed: 'Imbalance, excess, self-healing, re-alignment.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg',
    description: 'A large, winged angel with one foot on land and one in water pours liquid between two golden cups. A path leads to a mountain range where a golden crown glows in the sky, representing the synthesis of opposites and the path to divinity.'
  },
  {
    id: '15',
    name: 'The Devil',
    arcana: 'Major',
    meaningUpright: 'Shadow self, attachment, addiction, restriction, sexuality.',
    meaningReversed: 'Releasing limiting beliefs, exploring dark thoughts, detachment.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg',
    description: 'A horned, bat-winged demon sits on a black pedestal. A man and a woman are chained to the block, but their chains are loose, suggesting they could leave if they chose. The demon represents the bondage to material desires and the shadow self.'
  },
  {
    id: '16',
    name: 'The Tower',
    arcana: 'Major',
    meaningUpright: 'Sudden change, upheaval, chaos, revelation, awakening.',
    meaningReversed: 'Personal transformation, fear of change, averting disaster.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg',
    description: 'A tall tower on a mountain peak is struck by a bolt of lightning, knocking off its golden crown. Two figures fall from the tower amidst flames and 22 sparks of light, representing the sudden collapse of false structures and beliefs.'
  },
  {
    id: '17',
    name: 'The Star',
    arcana: 'Major',
    meaningUpright: 'Hope, faith, purpose, renewal, spirituality.',
    meaningReversed: 'Lack of faith, despair, self-trust, disconnection.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg',
    description: 'A naked woman kneels by a pool, pouring water from two jugs—one into the water and one onto the land. Above her is one large star surrounded by seven smaller stars. A bird sits in a tree in the background, symbolizing the flight of the soul.'
  },
  {
    id: '18',
    name: 'The Moon',
    arcana: 'Major',
    meaningUpright: 'Illusion, fear, anxiety, subconscious, intuition.',
    meaningReversed: 'Release of fear, repressed emotion, inner confusion.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg',
    description: 'A full moon with a face shines over a landscape. A dog and a wolf howl at the moon, while a crayfish crawls out of a pool. A path leads between two towers into the distance, representing the journey through the subconscious and the unknown.'
  },
  {
    id: '19',
    name: 'The Sun',
    arcana: 'Major',
    meaningUpright: 'Positivity, fun, warmth, success, vitality.',
    meaningReversed: 'Inner child, feeling down, overly optimistic.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg',
    description: 'A young, joyful child sits on a white horse, holding a large red banner. Behind him is a wall of sunflowers under a massive, radiant sun. This represents the pure joy and success that comes from being in alignment with one\'s true self.'
  },
  {
    id: '20',
    name: 'Judgement',
    arcana: 'Major',
    meaningUpright: 'Judgement, rebirth, inner calling, absolution.',
    meaningReversed: 'Self-doubt, inner critic, ignoring the call.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg',
    description: 'The Archangel Gabriel blows a golden trumpet from the clouds. Below, men, women, and children rise from their coffins in a vast mountain range, their arms outstretched in awe and gratitude, representing a spiritual awakening.'
  },
  {
    id: '21',
    name: 'The World',
    arcana: 'Major',
    meaningUpright: 'Completion, integration, accomplishment, travel.',
    meaningReversed: 'Seeking personal closure, short-cuts, delays.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg',
    description: 'A figure wrapped in a purple scarf dances within a large laurel wreath. In the corners are the same four creatures from the Wheel of Fortune. This represents the successful completion of a journey and the attainment of wholeness.'
  }
];


export const MINOR_ARCANA: TarotCard[] = [
  // Wands
  {
    id: 'w1', name: 'Ace of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Ace',
    meaningUpright: 'Inspiration, new opportunities, growth, potential.',
    meaningReversed: 'An emerging idea, lack of direction, distractions.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg',
    description: 'A hand emerges from a cloud holding a sprouting wand. In the background is a castle on a hill.'
  },
  {
    id: 'w2', name: 'Two of Wands', arcana: 'Minor', suit: 'Wands', rank: '2',
    meaningUpright: 'Future planning, progress, decisions, discovery.',
    meaningReversed: 'Fear of unknown, lack of planning, playing it safe.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg',
    description: 'A man stands on a balcony holding a globe, looking out at the sea and mountains.'
  },
  {
    id: 'w3', name: 'Three of Wands', arcana: 'Minor', suit: 'Wands', rank: '3',
    meaningUpright: 'Expansion, foresight, overseas opportunities.',
    meaningReversed: 'Playing it safe, lack of foresight, delays.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg',
    description: 'A man stands on a cliff edge, looking out at ships sailing on the sea.'
  },
  {
    id: 'w4', name: 'Four of Wands', arcana: 'Minor', suit: 'Wands', rank: '4',
    meaningUpright: 'Celebration, joy, harmony, relaxation, homecoming.',
    meaningReversed: 'Personal celebration, inner harmony, conflict with others.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg',
    description: 'Two people dance under a garland of flowers suspended between four wands.'
  },
  {
    id: 'w5', name: 'Five of Wands', arcana: 'Minor', suit: 'Wands', rank: '5',
    meaningUpright: 'Conflict, competition, disagreements, tension.',
    meaningReversed: 'Inner conflict, avoiding conflict, respect for differences.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg',
    description: 'Five men appear to be fighting or competing with their wands.'
  },
  {
    id: 'w6', name: 'Six of Wands', arcana: 'Minor', suit: 'Wands', rank: '6',
    meaningUpright: 'Success, public recognition, progress, self-confidence.',
    meaningReversed: 'Private achievement, fall from grace, egotism.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg',
    description: 'A man wearing a laurel wreath rides a white horse through a cheering crowd.'
  },
  {
    id: 'w7', name: 'Seven of Wands', arcana: 'Minor', suit: 'Wands', rank: '7',
    meaningUpright: 'Challenge, competition, protection, perseverance.',
    meaningReversed: 'Exhaustion, giving up, overwhelmed.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Wands07.jpg/330px-Wands07.jpg',
    description: 'A man stands on a hill, defending himself against six wands from below.'
  },
  {
    id: 'w8', name: 'Eight of Wands', arcana: 'Minor', suit: 'Wands', rank: '8',
    meaningUpright: 'Speed, action, air travel, movement, swift change.',
    meaningReversed: 'Delays, frustration, resisting change.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg',
    description: 'Eight wands fly through the air across an open landscape.'
  },
  {
    id: 'w9', name: 'Nine of Wands', arcana: 'Minor', suit: 'Wands', rank: '9',
    meaningUpright: 'Resilience, courage, persistence, test of faith.',
    meaningReversed: 'Inner strength, struggle, overwhelmed, defensive.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tarot_Nine_of_Wands.jpg/330px-Tarot_Nine_of_Wands.jpg',
    description: 'A weary man stands before eight wands, holding a ninth as a staff.'
  },
  {
    id: 'w10', name: 'Ten of Wands', arcana: 'Minor', suit: 'Wands', rank: '10',
    meaningUpright: 'Burden, extra responsibility, hard work, completion.',
    meaningReversed: 'Doing it all, carrying the burden, delegation, release.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg',
    description: 'A man struggles to carry ten heavy wands toward a distant town.'
  },
  {
    id: 'w11', name: 'Page of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Page',
    meaningUpright: 'Inspiration, ideas, discovery, limitless potential.',
    meaningReversed: 'Newly-formed ideas, redirecting energy, self-belief.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg',
    description: 'A young man in a desert landscape looks at a sprouting wand.'
  },
  {
    id: 'w12', name: 'Knight of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Knight',
    meaningUpright: 'Energy, passion, inspired action, adventure, impulsiveness.',
    meaningReversed: 'Passion project, haste, scattered energy, delays.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg',
    description: 'A knight on a charging horse, wearing robes decorated with salamanders.'
  },
  {
    id: 'w13', name: 'Queen of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Queen',
    meaningUpright: 'Courage, confidence, independence, social butterfly, determination.',
    meaningReversed: 'Self-confidence, introversion, re-establishing independence.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg',
    description: 'A queen sits on a throne decorated with lions and sunflowers, a black cat at her feet.'
  },
  {
    id: 'w14', name: 'King of Wands', arcana: 'Minor', suit: 'Wands', rank: 'King',
    meaningUpright: 'Natural-born leader, vision, entrepreneur, honor.',
    meaningReversed: 'Impulsiveness, haste, ruthless, high expectations.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg',
    description: 'A king sits on a throne decorated with lions and salamanders, holding a flowering wand.'
  },
  // Cups
  {
    id: 'c1', name: 'Ace of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Ace',
    meaningUpright: 'Love, new relationships, compassion, creativity.',
    meaningReversed: 'Self-love, intuition, repressed emotions.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg',
    description: 'A hand holds a cup overflowing with five streams of water. A dove drops a wafer into the cup.'
  },
  {
    id: 'c2', name: 'Two of Cups', arcana: 'Minor', suit: 'Cups', rank: '2',
    meaningUpright: 'Unified love, partnership, mutual attraction.',
    meaningReversed: 'Self-love, disharmony, distrust, breakup.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg',
    description: 'A man and woman exchange cups in a ceremony, with a caduceus of Hermes above them.'
  },
  {
    id: 'c3', name: 'Three of Cups', arcana: 'Minor', suit: 'Cups', rank: '3',
    meaningUpright: 'Celebration, friendship, creativity, collaborations.',
    meaningReversed: 'Alone time, independent projects, gossip, overindulgence.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg',
    description: 'Three women dance together, raising their cups in a toast.'
  },
  {
    id: 'c4', name: 'Four of Cups', arcana: 'Minor', suit: 'Cups', rank: '4',
    meaningUpright: 'Meditation, contemplation, apathy, re-evaluation.',
    meaningReversed: 'Retreat, withdrawal, checking in for self-care.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg',
    description: 'A young man sits under a tree, looking at three cups while a fourth is offered by a cloud.'
  },
  {
    id: 'c5', name: 'Five of Cups', arcana: 'Minor', suit: 'Cups', rank: '5',
    meaningUpright: 'Regret, failure, disappointment, pessimism.',
    meaningReversed: 'Personal setbacks, self-forgiveness, moving on.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg',
    description: 'A cloaked figure looks down at three spilled cups, while two remain standing behind them.'
  },
  {
    id: 'c6', name: 'Six of Cups', arcana: 'Minor', suit: 'Cups', rank: '6',
    meaningUpright: 'Revisiting the past, childhood memories, innocence, joy.',
    meaningReversed: 'Living in the past, forgiveness, lacking playfulness.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg',
    description: 'Two children in a garden exchange cups filled with flowers.'
  },
  {
    id: 'c7', name: 'Seven of Cups', arcana: 'Minor', suit: 'Cups', rank: '7',
    meaningUpright: 'Opportunities, choices, wishful thinking, illusion.',
    meaningReversed: 'Alignment, personal values, overwhelmed by choices.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg',
    description: 'A figure looks at seven cups floating in clouds, each containing a different symbolic object.'
  },
  {
    id: 'c8', name: 'Eight of Cups', arcana: 'Minor', suit: 'Cups', rank: '8',
    meaningUpright: 'Disappointment, abandonment, withdrawal, escaping.',
    meaningReversed: 'Trying one more time, indecision, aimless drifting.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg',
    description: 'A figure walks away from a stack of eight cups, heading toward a mountain at night.'
  },
  {
    id: 'c9', name: 'Nine of Cups', arcana: 'Minor', suit: 'Cups', rank: '9',
    meaningUpright: 'Contentment, satisfaction, gratitude, wish come true.',
    meaningReversed: 'Inner happiness, materialism, dissatisfaction, indulgence.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg',
    description: 'A well-dressed man sits before a table displaying nine cups in a semi-circle.'
  },
  {
    id: 'c10', name: 'Ten of Cups', arcana: 'Minor', suit: 'Cups', rank: '10',
    meaningUpright: 'Divine love, blissful relationships, harmony, alignment.',
    meaningReversed: 'Disconnected, struggling to reach fulfillment, disharmony.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg',
    description: 'A happy family stands under a rainbow of ten cups.'
  },
  {
    id: 'c11', name: 'Page of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Page',
    meaningUpright: 'Creative opportunities, intuitive messages, curiosity, possibility.',
    meaningReversed: 'New ideas, doubting intuition, creative blocks.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg',
    description: 'A young man holds a cup with a fish popping its head out.'
  },
  {
    id: 'c12', name: 'Knight of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Knight',
    meaningUpright: 'Creativity, romance, charm, imagination, beauty.',
    meaningReversed: 'Overactive imagination, unrealistic, moody, jealous.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg',
    description: 'A knight on a white horse slowly approaches, holding a cup as if in offering.'
  },
  {
    id: 'c13', name: 'Queen of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Queen',
    meaningUpright: 'Compassionate, caring, emotionally stable, intuitive, in flow.',
    meaningReversed: 'Self-care, self-love, co-dependency, martyrdom.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg',
    description: 'A queen sits on a throne by the sea, looking intently at an ornate cup.'
  },
  {
    id: 'c14', name: 'King of Cups', arcana: 'Minor', suit: 'Cups', rank: 'King',
    meaningUpright: 'Emotionally balanced, compassionate, diplomatic.',
    meaningReversed: 'Self-compassion, inner feelings, moody, emotionally manipulative.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg',
    description: 'A king sits on a throne floating on the sea, wearing a fish pendant.'
  },
  // Swords
  {
    id: 's1', name: 'Ace of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Ace',
    meaningUpright: 'Breakthroughs, new ideas, mental clarity, success.',
    meaningReversed: 'Inner clarity, re-thinking an idea, clouded judgement.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg',
    description: 'A hand emerges from a cloud holding a double-edged sword, topped with a crown and laurel branches.'
  },
  {
    id: 's2', name: 'Two of Swords', arcana: 'Minor', suit: 'Swords', rank: '2',
    meaningUpright: 'Difficult decisions, weighing up options, an impasse.',
    meaningReversed: 'Indecision, confusion, information overload.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg',
    description: 'A blindfolded woman sits by the sea, holding two large swords crossed over her chest.'
  },
  {
    id: 's3', name: 'Three of Swords', arcana: 'Minor', suit: 'Swords', rank: '3',
    meaningUpright: 'Heartbreak, emotional pain, sorrow, grief, hurt.',
    meaningReversed: 'Negative self-talk, releasing pain, optimism, forgiveness.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg',
    description: 'A heart is pierced by three swords, with storm clouds and rain in the background.'
  },
  {
    id: 's4', name: 'Four of Swords', arcana: 'Minor', suit: 'Swords', rank: '4',
    meaningUpright: 'Rest, relaxation, meditation, contemplation, recuperation.',
    meaningReversed: 'Exhaustion, burnout, deep rest, stagnation.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg',
    description: 'A knight lies on a tomb, three swords hanging above him and one lying beneath him.'
  },
  {
    id: 's5', name: 'Five of Swords', arcana: 'Minor', suit: 'Swords', rank: '5',
    meaningUpright: 'Conflict, disagreements, competition, defeat, winning at all costs.',
    meaningReversed: 'Reconciliation, making amends, past resentment.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg',
    description: 'A man holds three swords while two others lie on the ground; two figures walk away in defeat.'
  },
  {
    id: 's6', name: 'Six of Swords', arcana: 'Minor', suit: 'Swords', rank: '6',
    meaningUpright: 'Transition, change, rite of passage, releasing baggage.',
    meaningReversed: 'Personal transition, resistance to change, unfinished business.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg',
    description: 'A ferryman rows a boat carrying a woman and child toward a distant shore; six swords stand in the boat.'
  },
  {
    id: 's7', name: 'Seven of Swords', arcana: 'Minor', suit: 'Swords', rank: '7',
    meaningUpright: 'Betrayal, deception, getting away with something, stealth.',
    meaningReversed: 'Imposter syndrome, self-deceit, keeping secrets.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg',
    description: 'A man sneaks away from a camp carrying five swords, looking back at two he left behind.'
  },
  {
    id: 's8', name: 'Eight of Swords', arcana: 'Minor', suit: 'Swords', rank: '8',
    meaningUpright: 'Negative thoughts, self-imposed restriction, imprisonment, victim mentality.',
    meaningReversed: 'Self-limiting beliefs, inner vision, releasing negative thoughts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg',
    description: 'A blindfolded and bound woman is surrounded by eight swords stuck in the ground.'
  },
  {
    id: 's9', name: 'Nine of Swords', arcana: 'Minor', suit: 'Swords', rank: '9',
    meaningUpright: 'Anxiety, worry, fear, depression, nightmares.',
    meaningReversed: 'Inner turmoil, deep-seated fears, secrets, releasing worry.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg',
    description: 'A figure sits up in bed, face in hands, with nine swords hanging on the wall behind them.'
  },
  {
    id: 's10', name: 'Ten of Swords', arcana: 'Minor', suit: 'Swords', rank: '10',
    meaningUpright: 'Betrayal, backstabbing, defeat, crisis, rock bottom.',
    meaningReversed: 'Recovery, regeneration, resisting an inevitable end.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg',
    description: 'A man lies face down with ten swords in his back; the sun rises in the distance.'
  },
  {
    id: 's11', name: 'Page of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Page',
    meaningUpright: 'New ideas, curiosity, thirst for knowledge, new ways of communicating.',
    meaningReversed: 'Self-expression, all talk and no action, haphazard action, haste.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg',
    description: 'A young man stands on a hill, holding a sword upright with both hands.'
  },
  {
    id: 's12', name: 'Knight of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Knight',
    meaningUpright: 'Ambitious, action-oriented, driven to succeed, fast-thinking.',
    meaningReversed: 'Restless, unfocused, impulsive, burnout.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg',
    description: 'A knight on a charging horse, sword held high, rushing forward.'
  },
  {
    id: 's13', name: 'Queen of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Queen',
    meaningUpright: 'Independent, unbiased judgement, clear boundaries, direct communication.',
    meaningReversed: 'Objective, overly-emotional, cold-hearted, bitter.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg',
    description: 'A queen sits on a throne decorated with a cherub, holding a sword upright and gesturing forward.'
  },
  {
    id: 's14', name: 'King of Swords', arcana: 'Minor', suit: 'Swords', rank: 'King',
    meaningUpright: 'Mental clarity, intellectual power, authority, truth.',
    meaningReversed: 'Quiet power, inner truth, misuse of power, manipulation.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg',
    description: 'A king sits on a throne decorated with butterflies, holding a sword in his right hand.'
  },
  // Pentacles
  {
    id: 'p1', name: 'Ace of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Ace',
    meaningUpright: 'A new financial or career opportunity, manifestation, abundance.',
    meaningReversed: 'Lost opportunity, lack of planning and foresight.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg',
    description: 'A hand emerges from a cloud holding a large gold coin inscribed with a pentagram, above a lush garden.'
  },
  {
    id: 'p2', name: 'Two of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: '2',
    meaningUpright: 'Multiple priorities, time management, prioritization, adaptability.',
    meaningReversed: 'Over-committed, disorganized, reprioritizing.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg',
    description: 'A young man juggles two pentacles, with ships tossing on a stormy sea in the background.'
  },
  {
    id: 'p3', name: 'Three of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: '3',
    meaningUpright: 'Teamwork, collaboration, learning, implementation.',
    meaningReversed: 'Disharmony, misaligned goals, working alone.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg',
    description: 'A young stonemason works in a cathedral, consulting with two others who hold plans.'
  },
  {
    id: 'p4', name: 'Four of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: '4',
    meaningUpright: 'Saving money, security, conservatism, scarcity, control.',
    meaningReversed: 'Over-spending, greed, self-protection, letting go.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg',
    description: 'A man sits on a stone bench, holding one pentacle tightly, with two under his feet and one on his crown.'
  },
  {
    id: 'p5', name: 'Five of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: '5',
    meaningUpright: 'Financial loss, poverty, lack mindset, isolation, worry.',
    meaningReversed: 'Recovery from financial loss, spiritual poverty, improvement.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg',
    description: 'Two impoverished people walk through snow past a glowing stained-glass window of a church.'
  },
  {
    id: 'p6', name: 'Six of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: '6',
    meaningUpright: 'Giving, receiving, sharing wealth, generosity, charity.',
    meaningReversed: 'Self-care, unpaid debts, one-sided charity.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg',
    description: 'A wealthy man distributes coins to two beggars while holding a pair of scales.'
  },
  {
    id: 'p7', name: 'Seven of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: '7',
    meaningUpright: 'Long-term view, sustainable results, perseverance, investment.',
    meaningReversed: 'Lack of long-term vision, limited success or reward.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg',
    description: 'A man rests on his hoe, looking at seven pentacles growing on a lush vine.'
  },
  {
    id: 'p8', name: 'Eight of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: '8',
    meaningUpright: 'Apprenticeship, repetitive effort, mastery, skill development.',
    meaningReversed: 'Self-development, perfectionism, misdirected activity.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg',
    description: 'An artist carefully carves pentacles, with five already finished and hanging on the wall.'
  },
  {
    id: 'p9', name: 'Nine of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: '9',
    meaningUpright: 'Abundance, luxury, self-sufficiency, financial independence.',
    meaningReversed: 'Self-worth, over-spending, financial dependency.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg',
    description: 'A well-dressed woman stands in a lush garden with a hooded falcon on her hand.'
  },
  {
    id: 'p10', name: 'Ten of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: '10',
    meaningUpright: 'Wealth, financial security, family, long-term success, contribution.',
    meaningReversed: 'The dark side of wealth, financial failure or loss.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg',
    description: 'An old man sits in an archway with two dogs, while a family stands nearby; ten pentacles are arranged over the scene.'
  },
  {
    id: 'p11', name: 'Page of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Page',
    meaningUpright: 'Manifestation, financial opportunity, skill development.',
    meaningReversed: 'Lack of progress, procrastination, learning from failure.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg',
    description: 'A young man stands in a field, holding a pentacle and looking at it with focus.'
  },
  {
    id: 'p12', name: 'Knight of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Knight',
    meaningUpright: 'Hard work, productivity, routine, conservatism.',
    meaningReversed: 'Self-discipline, boredom, feeling stuck, perfectionism.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg',
    description: 'A knight on a heavy workhorse stands still in a field, holding a pentacle.'
  },
  {
    id: 'p13', name: 'Queen of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Queen',
    meaningUpright: 'Nurturing, practical, providing financially, a working parent.',
    meaningReversed: 'Self-care, work-life balance, conflict in priorities.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg',
    description: 'A queen sits on a throne decorated with fruit and animals, holding a pentacle in a lush garden.'
  },
  {
    id: 'p14', name: 'King of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'King',
    meaningUpright: 'Wealth, business, leadership, security, discipline, abundance.',
    meaningReversed: 'Financially inept, obsessed with wealth and status, stubborn.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg',
    description: 'A king sits on a throne decorated with bulls, surrounded by vines and flowers, holding a scepter and pentacle.'
  }
];

export const TAROT_DECK: TarotCard[] = [...MAJOR_ARCANA, ...MINOR_ARCANA];

export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'my', name: 'Burmese' },
  { code: 'th', name: 'Thai' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'zh', name: 'Chinese' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'es', name: 'Spanish' },
  { code: 'it', name: 'Italian' },
  { code: 'ru', name: 'Russian' },
  { code: 'hi', name: 'Hindi' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'ar', name: 'Arabic' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'tr', name: 'Turkish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'pl', name: 'Polish' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ms', name: 'Malay' },
  { code: 'tl', name: 'Tagalog' },
  { code: 'bn', name: 'Bengali' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'te', name: 'Telugu' },
  { code: 'ta', name: 'Tamil' },
  { code: 'mr', name: 'Marathi' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'kn', name: 'Kannada' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'el', name: 'Greek' },
  { code: 'he', name: 'Hebrew' },
  { code: 'fa', name: 'Persian' },
];

export const SPREADS = [
  { id: 'Single', name: 'Single Card', description: 'A quick answer or daily guidance.' },
  { id: 'PastPresentFuture', name: 'Past, Present, Future', description: 'Understand the flow of your situation.' },
  { id: 'MindBodySpirit', name: 'Mind, Body, Spirit', description: 'Explore your holistic state of being.' },
  { id: 'ProblemObstacleSolution', name: 'Problem, Obstacle, Solution', description: 'Find a way through your current challenge.' },
  { id: 'Relationship', name: 'Relationship', description: 'Understand the dynamics between two people.' },
  { id: 'Horseshoe', name: 'Horseshoe', description: 'A 7-card spread for a broader perspective.' },
  { id: 'CelticCross', name: 'Celtic Cross', description: 'A comprehensive 10-card reading for deep insight.' },
];

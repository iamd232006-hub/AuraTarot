import { GoogleGenAI } from "@google/genai";
import { TarotCard, SpreadType } from "../types";

const defaultAi = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getTarotReading(
  question: string,
  spreadType: SpreadType,
  cards: { card: TarotCard; isReversed: boolean; position: string }[],
  language: string = 'English',
  apiKey?: string
): Promise<string> {
  const ai = apiKey ? new GoogleGenAI({ apiKey }) : defaultAi;
  const model = "gemini-3-flash-preview";
  
  const cardDetails = cards.map(c => 
    `${c.position}: ${c.card.name} (${c.isReversed ? 'Reversed' : 'Upright'}) - ${c.isReversed ? c.card.meaningReversed : c.card.meaningUpright}`
  ).join('\n');

  const prompt = `
    You are a professional, mystical, and highly intuitive Tarot Reader. 
    ${question ? `A seeker has asked the following question: "${question}"` : 'The seeker is asking for a general daily guidance reading.'}
    
    The spread type is: ${spreadType}
    The cards drawn are:
    ${cardDetails}
    
    Provide a deep, professional, and empathetic interpretation of this reading. 
    
    CRITICAL: You MUST provide the ENTIRE reading in ${language}. 
    - If the language is ${language}, the response must be in ${language}.
    
    ${spreadType === 'CelticCross' ? 'The Celtic Cross is a complex 10-card spread; explain how each position (Present, Challenge, Past, Future, Above, Below, Advice, External, Hopes/Fears, Outcome) relates to the question.' : ''}
    ${spreadType === 'Relationship' ? 'This is a Relationship spread; focus on the dynamics between the two individuals and the potential outcome.' : ''}
    ${spreadType === 'Horseshoe' ? 'This is a Horseshoe spread; explain the flow from the past to the future, including hidden factors and advice.' : ''}
    ${spreadType === 'MindBodySpirit' ? 'This is a Mind, Body, Spirit spread; focus on the holistic alignment of the seeker.' : ''}
    ${spreadType === 'ProblemObstacleSolution' ? 'This is a Problem, Obstacle, Solution spread; provide clear guidance on overcoming the challenge.' : ''}
    Focus on how the cards relate to the question and the flow between them.
    Use a sophisticated and mystical tone, but keep it clear and actionable.
    Structure your response with a brief introduction, a detailed analysis of each card in its position, and a final synthesis/advice.
    Format the response in Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text || "The spirits are silent. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "An error occurred while connecting to the mystical realms. Please check your connection.";
  }
}

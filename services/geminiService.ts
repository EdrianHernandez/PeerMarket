
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const geminiService = {
  /**
   * Generates AI-powered search suggestions or refinements for items.
   */
  async getSearchSuggestions(query: string): Promise<string[]> {
    if (!query || query.length < 2) return [];
    
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Given the search query "${query}", suggest 5 relevant, specific keywords or categories for a peer-to-peer marketplace. Return only a simple JSON array of strings.`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        }
      });
      
      const text = response.text;
      if (text) {
        return JSON.parse(text);
      }
    } catch (error) {
      console.error("Gemini suggestion error:", error);
    }
    return [];
  },

  /**
   * Generates a professional product description for the seller.
   */
  async generateProductDescription(title: string, category: string): Promise<string> {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as an expert seller on a marketplace. Write a compelling, concise 3-sentence product description for an item titled "${title}" in the "${category}" category. Focus on quality, condition, and why the buyer needs it.`,
      });
      return response.text || "No description generated.";
    } catch (error) {
      console.error("Gemini description error:", error);
      return "Unable to generate description at this time.";
    }
  }
};

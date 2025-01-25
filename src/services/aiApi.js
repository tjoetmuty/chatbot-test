import { GoogleGenerativeAI } from "@google/generative-ai"

export const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
export const model = genAI.getGenerativeModel({ model: import.meta.env.VITE_MODEL_AI });
export const maxOutputTokens = import.meta.env.VITE_MAX_TOKENS;
export const temperature = import.meta.env.VITE_TEMPERATURE;
import { GoogleGenerativeAI } from "@google/generative-ai"

// eslint-disable-next-line no-undef
export const genAI = new GoogleGenerativeAI(process.env.API_KEY);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const prompt = "Explain how AI works";

export const result = await model.generateContent(prompt);
console.log(result.response.text());
import { GoogleGenerativeAI } from "@google/generative-ai"

export const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const prompt = "Explain how AI works";

export const result = await model.generateContent(prompt);
console.log(result.response.text());
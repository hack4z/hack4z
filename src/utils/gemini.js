import { GoogleGenerativeAI } from "@google/generative-ai";

export async function gemini(prompt){
	const genAI = await new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
	const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
	const result = await model.generateContent(prompt);
	return result.response.text();

}
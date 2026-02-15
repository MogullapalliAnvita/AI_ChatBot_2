import { Configuration } from "openai";

export const configureOpenAI = () => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_SECRET,
    basePath: "https://openrouter.ai/api/v1",
  });
  return config;
};
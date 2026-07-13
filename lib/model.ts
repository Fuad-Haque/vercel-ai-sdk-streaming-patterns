import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

const groq = createOpenAICompatible({
  name: 'groq',
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

export const model = groq('openai/gpt-oss-20b');
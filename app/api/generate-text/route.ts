import { generateText } from 'ai';
import { model } from '@/lib/model';

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const result = await generateText({
    model,
    prompt,
  });

  return Response.json({
    text: result.text,
    finishReason: result.finishReason,
    usage: result.usage,
  });
}
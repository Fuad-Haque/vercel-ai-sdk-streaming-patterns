import { generateText, Output } from 'ai';
import { z } from 'zod';
import { model } from '@/lib/model';

const projectSchema = z.object({
  name: z.string(),
  techStack: z.array(z.string()),
  estimatedHours: z.number(),
});

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const { output } = await generateText({
    model,
    output: Output.object({ schema: projectSchema }),
    prompt,
  });

  return Response.json(output);
}
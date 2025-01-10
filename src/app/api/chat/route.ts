import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()
  console.log(messages)
  const { textStream } = streamText({
    model: openai('gpt-4-turbo'),
    prompt: '你是灵渲科技工作室的AI助手，专门回答有关3D图形、AI和VR技术的问题。',
  });

  return textStream
}


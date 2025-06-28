import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import {openai} from '@ai-sdk/openai';
import {google} from '@ai-sdk/google';


export const myProvider = customProvider({
      languageModels: {
        'chat-model': google('gemini-2.5-flash-preview-04-17'),
        'chat-model-reasoning': wrapLanguageModel({
          model: google('gemini-2.5-flash-preview-04-17'),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': google('gemini-2.5-flash-preview-04-17'),
        'artifact-model': google('gemini-2.5-flash-preview-04-17'),
      },
      imageModels: {
        'small-model': openai.image('dall-e-3'),
      },
    });

export const chatModels = [
  {
    id: 'chat-model',
    name: 'Chat model',
    description: 'Primary model for all-purpose chat',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning',
  },
]
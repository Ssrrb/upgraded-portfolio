<a href="https://chat.vercel.ai/">
  <img alt="Next.js 14 and App Router-ready AI chatbot." src="app/(chat)/opengraph-image.png">
  <h1 align="center">SSRRB AI Chatbot</h1>
</a>

<p align="center">
    SSRRB AI Chatbot is a modern CV and Contact Point for Sebastian Rojas.
</p>

---

## Upcoming Refactor: Personal AI Chatbot with CV, Voice Mode & Contact Tools

This project will soon be refactored to provide a personalized AI chatbot experience, with the following new features:

- **Containerized Deployment:** The Vercel AI SDK will be adapted to run inside a container (e.g., Docker), making it deployable on any container platform.
- **First Message is My CV:** When a user starts a conversation, the chatbot will send my CV as the very first message.
- **LLM with System Instructions About Me:** Users will interact with a Large Language Model (LLM) that has detailed system instructions about me, enabling more relevant and personal responses.
- **User Tools:** The chatbot will provide tools so users can:
  - Contact me directly
  - Download my CV at any time during the conversation
- **Voice Mode:** Users will be able to talk to the agent using their voice. The agent can control the page, such as contacting me or downloading my CV, based on voice commands.
- **No File Uploads:** Uploading files is not supported or needed for this project. Any file upload features have been removed to simplify the user experience.

These features are currently in development and will make this project a powerful, interactive portfolio and contact point.

---



## Features

- [Next.js](https://nextjs.org) App Router
  - Advanced routing for seamless navigation and performance
  - React Server Components (RSCs) and Server Actions for server-side rendering and increased performance
- [AI SDK](https://sdk.vercel.ai/docs)
  - Unified API for generating text, structured objects, and tool calls with LLMs
  - Hooks for building dynamic chat and generative user interfaces
  - Supports xAI (default), OpenAI, Fireworks, and other model providers
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - Component primitives from [Radix UI](https://radix-ui.com) for accessibility and flexibility
- Data Persistence
  - [Neon Serverless Postgres](https://neon.com) for saving chat history and user data
- [Auth.js](https://authjs.dev)
  - Simple and secure authentication

## Model Providers

I will use Google Generative AI as my LLM provider. https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai#google-generative-ai-provider


## Remaining Work

- [Checked] Add Google Generative AI as my LLM provider.
- [Checked] Add System Instructions About Me.
- [Checked] Add Download button for my Resume.
- [ ] Customize the UI/UX for the user to understand that this is my personal professional assistant.
- [ ] Add 4 relevant FAQ for users.
- [ ] Add Tools for scheduling a call, consulting google calendar or sending an email.
- [ ] Remove File Uploads and extra features that distract users.
- [ ] Add voice mode.
- [ ] Add Dockerfile for containerized deployment.


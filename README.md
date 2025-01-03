# [Ignite](https://igniteit.vercel.app)



## Built using

- Nextjs Frontend and Serverless api routes
- tRPC For typesafe apis
- Zod For validation
- Typescript For type safety
- Tailwind CSS For CSS
- React Query for data fetching
- React Hook Form for form handling
- Shadcn UI + Radix UI For UI components
- Supabase As the database
- Prisma As the ORM
- Blocknote for note taking
- Uploadthing for storing pdfs
- Next Auth for authentication
- React-pdf-highlighter for pdf rendering,highlighting
- Vercel AI SDK, Langchain for AI responses and streaming, generating flashcards + evaluating them
- Pinecone DB for storing embeddings of pdfs
- Fireworks AI for LLM
- Huggingface Model for generating Embeddings
- Liveblocks for realtime collaboration





## Features:

- Note taking, later download the note as markdown
- Summarise, ask questions about the PDFs
- Chat and collab with others
- Custom blocks in editor
- Highlights block which on click takes you to that highlight on the doc.
- AI-powered text autocompletion
- Craft simple flashcards to test your knowledge, answer questions, and receive instant feedback through AI evaluation.





## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in **root** directory.
4. Contents of `.env`:

```env
# .env

DATABASE_URL=postgres://postgres.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.supabase.com:5432/postgres     #visit Supabase

PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxxxxxxxxxxx.supabase.co

SUPABASE_SERVICE_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

NEXTAUTH_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXTAUTH_URL=http://localhost:3000    #or  url

GOOGLE_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GOOGLE_CLIENT_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

NODE_ENV=development/production 

UPLOADTHING_SECRET=sk_live_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
UPLOADTHING_APP_ID=XXXXXXXXXX

OPENAI_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX           #Fireworks API not openai

PINECONE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

HUGGINGFACE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY=pk_prod_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       #visit Liveblocks


```




### Pinecone Setting up guide

- Create index => Dimensions = 768, Metric = Cosine.





### You can get your Google Client ID and secret from the Google API Console.




Run `npm install` or `pnpm install` or `yarn` to install your node_modules


Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev` or `pnpm dev`.


And make sure to generate `npx prisma generate` and push your db to prisma `npx prisma db push` before starting.




## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Postgresql](https://skillicons.dev/icons?i=postgres "Postgresql")](https://www.postgresql.org/ "Postgresql")



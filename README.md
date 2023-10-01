This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to setup in your system

Just clone the repository and execute command :- ``` npm run dev ```
Website will start on "localhost:3000"

- In case if movie cards are not loading that means API limit for the day has been finished. You can have 2 options at this stage :-
  - 1. Close website and come next after 2 pm, if you have a good luck you will be able to use site
  - 2. This is better way to use website, follow this instructions :-
    - a. Create an account in Rapid API and search for movies API called :- **Streaming Availability**
    - b. Looks like this :- <img src="/public/api-logo.png" alt="api logo" width="60px" height="30px"/>
    - c. Take the subscription of the endpoint Free or Whatever you want and inside code snippet you will **X-RapidAPI-Key**,copy the key.
    - d. Come to this application, navigate to **src/component/constants/FetchFromApi.tsx** paste your key their and restart the application



# vintageTV

## Description

VintageTV is a project in development that allows people to live chat while watching live streamed videos.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It uses [flv.js](https://github.com/bilibili/flv.js) to implement a video player that support flv format.

It will be using [tRPC](https://trpc.io/) to implement the live chat.

## Try it out

The project is still in development, but you can try it out by :

- Changing the `sourceUrl` constant in the /components/tv.tsx file

```ts
const sourceUrl = "http://domain/path/stream_name.flv"
```

- Running the development server :

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

- Opening [http://localhost:3000](http://localhost:3000) with your browser to see the result.
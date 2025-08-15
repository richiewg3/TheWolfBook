This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## Static Build and Export

To build the static site for GitHub Pages, run:

`pnpm --filter apps/web build`

`pnpm --filter apps/web export`

This creates an `out` directory under `apps/web` with the pre-rendered HTML for all pages. When the site is built in GitHub Actions, the `basePath` and `assetPrefix` are set to `/TheWolfBook`, so the static files work when hosted at `https://<username>.github.io/TheWolfBook/`.


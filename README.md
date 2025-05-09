# Experimental App

A Next.js application showcasing the usage of @gsalunke/private-ui-components.

## Getting Started

1. Create a GitHub Personal Access Token with `read:packages` scope
2. Copy `.npmrc.example` to `.npmrc` and replace `${GITHUB_TOKEN}` with your token:
```bash
cp .npmrc.example .npmrc
```

3. Edit `.npmrc` and replace `${GITHUB_TOKEN}` with your actual GitHub token

4. Install dependencies:
```bash
npm install
# or
yarn
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

## Security Note

Never commit your `.npmrc` file containing your GitHub token. The `.npmrc` file is already added to `.gitignore` to prevent accidental commits.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

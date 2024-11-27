This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Working with firebase cloud functions

[Firebase Documentation](https://firebase.google.com/docs/functions/get-started?gen=1st)

Login to the firebase

```bash
firebase login
```

To test the functions in local environment, first set up env variables in .secrets.local and then run the following commands:

```bash
cd functions && npm run serve
or
cd functions && npm run build && firebase emulators:start --only functions
```

Note: Make sure to restart the emulators every time the code changes.

To deploy functions to production environment:

```bash
firebase deploy --only functions
```

Note: This command deletes the unused functions(those that do not exist in your local source code) from production. Since we are using the common firebase account for both Story Sizer and this project, make sure not to delete any functions of the other project.

To deploy a single function to production environment:

```bash
firebase deploy --only functions:functionName
```

To change the secrets in production:

```bash
firebase functions:secrets:set SECRET_NAME
```

## Publish a job entry from contentful

- Login to contentful
- Add an entry for content under 'Job' content type
- Once the changes are done, click 'publish'
- After publishing the content, deploy the app

## Unpublish a job entry

- Login to contentful
- Open the content you want to unpublish
- Click 'unpublish' from the dropdown under general tab
- After unpublishing the content, deploy the app

## Ccontenful Production and Preview URLs
We have two preview URLs during PR creation:

1. Cloudflare - This connects to Contentful preview URL
2. Netlify - This connects to Contentful production URL

For localhost, you can decide which Contentful server to connect to:

1. Contentful Prod:

Only sets these env var (remove those related to preview)

```
shuwnyuan@Tees-MacBook-Pro:~/hivekind.com (main)$ cat .env.local
CONTENTFUL_SPACE_ID=xxx
CONTENTFUL_ACCESS_TOKEN=xxx
```

2. Contentful Preview

```
shuwnyuan@Tees-MacBook-Pro:~/hivekind.com (main)$ cat .env.local
CONTENTFUL_SPACE_ID=xxx
CONTENTFUL_ACCESS_TOKEN=xxx
CONTENTFUL_PREVIEW_HOST=preview.contentful.com
CONTENTFUL_PREVIEW_ACCESS_TOKEN=xxx
```

You can get these values from: Contentful Settings -> API keys -> hivekind.com nextjs website

```
CONTENTFUL_SPACE_ID -> Space ID
CONTENTFUL_ACCESS_TOKEN -> Content Delivery API - access token
CONTENTFUL_PREVIEW_ACCESS_TOKEN -> Content Preview API - access token
```

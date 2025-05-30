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

## Contentful

The website's dynamic content is managed through Contentful.

### Managing Job Posts

To publish a job post via Contentful:

- Log into Contentful
- Add an entry for content under 'Job' content type
- Once the changes are done, click 'Publish'
- After publishing the content, deploy the app

To unpublish a job entry via Contentful:

- Log into Contentful
- Open the content you want to unpublish
- Click 'Unpublish' from the dropdown under general tab
- After unpublishing the content, deploy the app

## Hosting & Deployment

The website is hosted on Netlify and Cloudflare. The production website (hivekind.com) is on Netlify, and preview environments for PRs are created on both platforms. Labs projects (e.g. /labs/hivechat) are hosted on Cloudflare.

### Previews

Preview environments are created whenever a PR is opened. Since Contentful can provide two versions of any content item (the production version and the preview version), we create two preview environments per PR:

1. With preview content from Contentful (hosted on Cloudflare)
2. With production content from Contentful (hosted on Netlify)

Links to these previews are automatically posted on the PR.

### Production Deployment

To deploy to production, simply push commits to the `main` branch (i.e. merge a PR). This will trigger an automatic deployment.

### Local Development and Contentful Content

When doing local development, you can set which version of Contentful content to want to see via environment variables:

1. Contentful preview

```
$ cat .env.local
CONTENTFUL_SPACE_ID=xxx
CONTENTFUL_ACCESS_TOKEN=xxx
CONTENTFUL_PREVIEW_HOST=preview.contentful.com
CONTENTFUL_PREVIEW_ACCESS_TOKEN=xxx
```

2. Contentful production:

```
$ cat .env.local
CONTENTFUL_SPACE_ID=xxx
CONTENTFUL_ACCESS_TOKEN=xxx
```
[Note: do not set `CONTENTFUL_PREVIEW_*`]

You can get these values from Contentful. Go to Settings -> API keys -> hivekind.com nextjs website

```
CONTENTFUL_SPACE_ID -> Space ID
CONTENTFUL_ACCESS_TOKEN -> Content Delivery API - access token
CONTENTFUL_PREVIEW_ACCESS_TOKEN -> Content Preview API - access token
```

## Firebase cloud functions

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

Note: This command deletes the unused functions (those that do not exist in your local source code) from production. Since we are using the common firebase account for both Story Sizer and this project, make sure not to delete any functions of the other project.

To deploy a single function to production environment:

```bash
firebase deploy --only functions:functionName
```

To change the secrets in production:

```bash
firebase functions:secrets:set SECRET_NAME
```
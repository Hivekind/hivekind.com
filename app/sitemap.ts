import { getAllPosts } from "@/lib/contentfulApi";

interface getDynamicUrlsProps {
  topUrl: string;
  contentfulType: string;
}

const getDynamicUrls = async ({
  topUrl,
  contentfulType,
}: getDynamicUrlsProps) => {
  const { posts } = await getAllPosts({
    contentType: contentfulType,
  });

  return posts
    .map(({ fields }) => fields.slug)
    .filter(Boolean)
    .map(url => `${topUrl}/${url}`);
};

export default async function sitemap() {
  const topLevelUrls = [
    "about",
    "blog",
    "careers",
    "contact",
    "events",
    "referral-program",
    "services",
    "work",
  ];

  const blogUrls = await getDynamicUrls({
    topUrl: "blog",
    contentfulType: "blogPosts",
  });
  const careersUrls = await getDynamicUrls({
    topUrl: "careers",
    contentfulType: "job",
  });
  const workUrls = await getDynamicUrls({
    topUrl: "work",
    contentfulType: "work",
  });
  const servicesUrls = ["services/custom-software-development"];

  const allUrls = [
    ...topLevelUrls,
    ...blogUrls,
    ...careersUrls,
    ...servicesUrls,
    ...workUrls,
  ];

  const baseUrl = "https://hivekind.com";

  const sitemap = allUrls.map((url) => ({
    url: `${baseUrl}/${url}`,
  }));

  sitemap.unshift({ url: baseUrl });

  return sitemap;
}

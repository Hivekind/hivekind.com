import fs from "fs";
import path from "path";
import { getAllPosts } from "@/lib/contentfulApi";

interface getDynamicUrlsProps {
  topUrl: string;
  contentfulType: string;
}

const baseUrl = "https://hivekind.com";

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
    .map((url) => `${topUrl}/${url}`);
};

const getTopLevelUrls = () => {
  const appDir = path.join(process.cwd(), "app");
  const items = fs.readdirSync(appDir);

  const urls: string[] = [];

  items.forEach((item) => {
    // Exclude "sitemap.xml" and "work" from the sitemap generation
    if (item === "sitemap.xml" || item === "work") return;

    const itemPath = path.join(appDir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      urls.push(item);
    }
  });

  return urls;
};

const getSitemap = async () => {
  const topLevelUrls = getTopLevelUrls();

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

  const fullUrls = allUrls.map((url) => `${baseUrl}/${url}`);
  fullUrls.unshift(baseUrl);

  const sitemap = fullUrls.map((url) => ({
    url: url,
  }));

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${sitemap
      .map(
        (item) => `
            <url>
              <loc>${item.url}</loc>
            </url>
          `
      )
      .join("")}
    </urlset>
  `;
};

export async function GET() {
  return new Response(await getSitemap(), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

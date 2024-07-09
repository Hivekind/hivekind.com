import * as contentful from "contentful";

const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

export async function getAllPosts({ contentType }: { contentType: string }) {
  const response = await contentfulClient.getEntries({
    content_type: contentType,
  });

  return { posts: response.items };
}

export async function getPost({
  contentType,
  slug,
}: {
  contentType: string;
  slug: string;
}) {
  const response = await contentfulClient.getEntries({
    content_type: contentType,
    "fields.slug[in]": slug,
  });

  return { post: response.items[0] };
}

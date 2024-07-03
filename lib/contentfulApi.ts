import * as contentful from "contentful";

const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

export async function getAllPosts() {
  const response = await contentfulClient.getEntries({
    content_type: "blog",
  });

  return { posts: response.items };
}

export async function getPost(slug: string, isEnabled: boolean) {
  const response = await contentfulClient.getEntries({
    content_type: "blog",
    "fields.slug[like]": slug,
  });

  return { post: response.items[0] };
}

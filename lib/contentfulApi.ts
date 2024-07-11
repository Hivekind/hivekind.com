import * as contentful from "contentful";

export type fieldsType = {
  slug: string;
  mainImage: { fields: { file: { url: string } } };
  mainImageAltText: string;
  topic: string;
  client: string;
  name: string;
  summary: string;
  caseSummary: string;
  author: string;
  postBody: string;
  caseBody: string;
};

export type postsType = {
  posts: Array<{ fields: Partial<fieldsType> }>;
};

export type postType = { post: { fields: Partial<fieldsType> } };

const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

export async function getAllPosts({
  contentType,
}: {
  contentType: string;
}): Promise<postsType> {
  const response = await contentfulClient.getEntries({
    content_type: contentType,
  });

  const posts = response.items.map((item) => {
    return {
      fields: item.fields,
    };
  });

  return { posts };
}

export async function getPost({
  contentType,
  slug,
}: {
  contentType: string;
  slug: string;
}): Promise<postType> {
  const response = await contentfulClient.getEntries({
    content_type: contentType,
    "fields.slug[in]": slug,
  });

  return { post: response.items[0] };
}

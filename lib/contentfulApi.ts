import * as contentful from "contentful";

export type imageFieldType = {
  fields: { file: { url: string } };
};

export type authorType = {
  name: string;
  slug: string;
  profilePicture: imageFieldType;
  linkedInLink?: string;
  githubLink?: string;
};

export type fieldsType = {
  slug: string;

  order: number;

  heroEntry: boolean;

  mainImage: imageFieldType;
  profilePicture: imageFieldType;
  image: imageFieldType;

  svgIcon: string;

  mainImageAltText: string;

  blogPostTopic: { fields: { name: string } };

  client: string;

  name: string;

  postSummary: string;
  caseSummary: string;

  author: {
    fields: authorType;
  };

  body: string;
  postBody: string;
  caseBody: string;
  quote: string;
  type: string;

  url: string;

  jobTitle: string;
  linkedInLink?: string;
  twitterLink?: string;
  instagramLink?: string;
  facebookLink?: string;
  githubLink?: string;

  path: string;
  seoTitle: string;
  seoDescription: string;
  ogImage: imageFieldType;

  publishedAt: string;

  jsonLd: object;

  title: string;
  experienceLevel: string;
  jobLocation: string;
  jobDescription: string;
  datePosted: string;
  validThrough: string;
};

export type postsType = {
  posts: Array<{ fields: Partial<fieldsType> }>;
};

export type postType = {
  post: {
    sys: { createdAt: string; updatedAt: string };
    fields: Partial<fieldsType>;
  };
};

const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken:
    (process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ||
      process.env.CONTENTFUL_ACCESS_TOKEN) ??
    "",
  host: process.env.CONTENTFUL_PREVIEW_HOST ?? "cdn.contentful.com",
});

export async function getAllPosts({
  contentType,
  order = ["-sys.createdAt"],
  fields,
}: {
  contentType: string;
  order?: Array<
    | "sys.createdAt"
    | "-sys.createdAt"
    | "sys.updatedAt"
    | "-sys.updatedAt"
    | "sys.contentType.sys.id"
    | "-sys.contentType.sys.id"
    | `fields.${string}`
    | `-fields.${string}`
    | `fields.${string}.sys.id`
    | `-fields.${string}.sys.id`
  >;
  fields?: { [key: string]: string | boolean | number };
}): Promise<postsType> {
  const response = await contentfulClient.getEntries({
    content_type: contentType,
    order,
    ...fields,
  });

  const posts = response.items.map((item) => {
    return {
      fields: item.fields,
    };
  });

  return { posts };
}

export async function getBySlug({
  contentType,
  slug,
  fields,
}: {
  contentType: string;
  slug: string;
  fields?: { [key: string]: string | boolean | number };
}): Promise<postType> {
  const response = await getByField({
    contentType,
    fields: {
      "fields.slug[in]": slug,
      ...fields,
    },
  });

  return { post: response };
}

export async function getByName({
  contentType,
  name,
}: {
  contentType: string;
  name: string;
}): Promise<postType> {
  const response = await getByField({
    contentType,
    fields: { "fields.name[in]": name },
  });

  return { post: response };
}

export async function getByField({
  contentType,
  fields,
}: {
  contentType: string;
  fields: { [key: string]: string };
}) {
  return getAllByField({ contentType, fields }).then((items) => items[0]);
}

export async function getAllByField({
  contentType,
  fields,
}: {
  contentType: string;
  fields: { [key: string]: string };
}) {
  const response = await contentfulClient.getEntries({
    content_type: contentType,
    ...fields,
  });

  return response.items;
}

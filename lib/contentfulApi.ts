import * as contentful from "contentful";

export type imageFieldType = {
  fields: { file: { url: string } };
};

export type fieldsType = {
  slug: string;

  mainImage: imageFieldType;
  profilePicture: imageFieldType;

  mainImageAltText: string;

  blogPostTopic: { fields: { name: string } };

  client: string;

  name: string;

  postSummary: string;
  caseSummary: string;

  author: {
    fields: {
      name: string;
      slug: string;
      profilePicture: imageFieldType;
      linkedInLink?: string;
      githubLink?: string;
    };
  };

  postBody: string;
  caseBody: string;

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
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

export async function getAllPosts({
  contentType,
  order = ["-sys.createdAt"],
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
}): Promise<postsType> {
  const response = await contentfulClient.getEntries({
    content_type: contentType,
    order,
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
}: {
  contentType: string;
  slug: string;
}): Promise<postType> {
  const response = await getByField({
    contentType,
    fields: { "fields.slug[in]": slug },
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
  const response = await contentfulClient.getEntries({
    content_type: contentType,
    ...fields,
  });

  return response.items[0];
}

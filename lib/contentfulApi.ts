import * as contentful from "contentful";

export type imageFieldType = {
  fields: { file: { url: string } };
};

export type fieldsType = {
  slug: string;

  mainImage: imageFieldType;
  profilePicture: imageFieldType;

  mainImageAltText: string;

  topic: string;
  client: string;

  name: string;

  summary: string;
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

  title: string;
  experienceLevel: string;
  publish: boolean;
  jobLocation: string;
  jobDescription: string;

  publishedAt: string;
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

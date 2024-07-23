import ContactUsSection from "@/components/contact-us-section";
import ShareWrapper from "@/components/share-wrapper";
import { getAllPosts, getBySlug } from "@/lib/contentfulApi";
import Image from "next/image";
import Link from "next/link";
import { markdownParser, generateToc } from "@/lib/markdownParser";
import { TocLinkWrapper } from "@/components/toc-link-wrapper";
import Mustache from "mustache";
import { Metadata } from "next";
import "@/styles/blog.css";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { post } = await getBySlug({
    contentType: "blogPosts",
    slug: params.slug ?? "",
  });

  const { seoTitle, seoDescription, ogImage } = post.fields;
  const images = [ogImage?.fields.file.url].filter(Boolean) as string[];

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      images,
      url: `/blog/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const { posts } = await getAllPosts({
    contentType: "blogPosts",
    order: ["-fields.publishedAt"],
  });
  const slugs = posts
    .map(({ fields }) => ({
      slug: fields.slug,
    }))
    .filter(Boolean);

  return slugs;
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { post } = await getBySlug({
    contentType: "blogPosts",
    slug: params.slug,
  });

  const postBody = markdownParser(`${post.fields.postBody}`);
  const toc = generateToc(`${post.fields.postBody}`);

  const jsonLdData = {
    currentUrl: new URL(
      `/blog/${params.slug}`,
      "https://hivekind.com"
    ).toString(),
    seoTitle: post.fields.seoTitle,
    seoDescription: post.fields.seoDescription,
    ogImage: post.fields.ogImage?.fields.file.url,
    authorName: post.fields.author?.fields.name,
    linkedInLink: post.fields.author?.fields.linkedInLink,
    publishedAt: post.fields.publishedAt,
    updatedAt: post.sys.updatedAt,
  };

  const jsonLdTemplate = JSON.stringify(post.fields.jsonLd);

  return (
    <main className="main-wrapper blogpost">
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: Mustache.render(jsonLdTemplate || "", jsonLdData),
          }}
        />
      </section>
      <div className="section-blog background-color-white">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="blog-topic-wrapper">
                <div className="blog_topic">
                  <div className="text-size-small text-weight-semibold">
                    {post.fields.topic}
                  </div>
                </div>
              </div>
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <div className="margin-bottom margin-small">
                    <h1>{post.fields.name}</h1>
                  </div>
                </div>
              </div>
              <div className="blog-author">
                <Link
                  href={`${post.fields.author?.fields.linkedInLink}`}
                  target="_blank"
                  className="blog_author-image-wrapper w-inline-block"
                >
                  <Image
                    src={`${post.fields.author?.fields.profilePicture?.fields.file.url}`}
                    alt={`${post.fields.author?.fields.name}`}
                    width={500}
                    height={320}
                    className="blog_author-image"
                  />
                </Link>
                <Link
                  href={`${post.fields.author?.fields.linkedInLink}`}
                  target="_blank"
                  className="blog_author-info w-inline-block"
                >
                  <p className="text-weight-semibold">
                    {post.fields.author?.fields.name}
                  </p>
                </Link>
              </div>
              <div className="blog-image padding-vertical padding-large">
                <Image
                  src={`${post.fields.mainImage?.fields.file.url}`}
                  alt={`${post.fields.mainImageAltText}`}
                  width={1600}
                  height={667}
                  className="image"
                  loading="lazy"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <header className="section_content">
                <div className="container-medium">
                  <div className="post_content-wrapper">
                    <div className="fs-toc_sidebar">
                      <h2 className="text-size-medium">Table of Contents</h2>
                      <div className="fs-toc_link-content">
                        {toc.map(({ text, anchor }) => (
                          <TocLinkWrapper
                            text={text}
                            anchor={anchor}
                            key={text}
                          />
                        ))}
                      </div>
                      <div className="separator"></div>
                      <ShareWrapper
                        url={`https://hivekind.com/blog/${post.fields.slug}`}
                      />
                    </div>
                    <div className="fs-toc_rich-text">
                      <div
                        fs-toc-element="contents"
                        className="fs-toc_richtext text-rich-text w-richtext"
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: postBody,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
      <ContactUsSection className="background-color-gray" />
    </main>
  );
}

import ContactUsSection from "@/components/contact-us-section";
import ShareWrapper from "@/components/share-wrapper";
import { getAllPosts, getBySlug } from "@/lib/contentfulApi";
import Image from "next/image";
import Link from "next/link";
import { markdownParser, generateToc } from "@/lib/markdownParser";
import { TocLinkWrapper } from "@/components/toc-link-wrapper";

export async function generateStaticParams() {
  const { posts } = await getAllPosts({ contentType: "blogPosts" });
  const slugs = posts.map(({ fields }) => ({
    slug: fields.slug,
  }));

  return slugs;
}

export default async function BlogIndexPage({
  params,
}: {
  params: { slug: string; postSummary: string };
}) {
  const { post } = await getBySlug({
    contentType: "blogPosts",
    slug: params.slug ?? "",
  });

  const postBody = markdownParser(`${post.fields.postBody}`);
  const toc = generateToc(`${post.fields.postBody}`);

  return (
    <main className="main-wrapper">
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
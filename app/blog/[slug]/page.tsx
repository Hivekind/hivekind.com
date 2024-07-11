import ContactUsSection from "@/components/contact-us-section";
import ShareWrapper from "@/components/share-wrapper";
import { getAllPosts, getPost } from "@/lib/contentfulApi";
import { marked } from "marked";
import Image from "next/image";

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
  const { post } = await getPost({
    contentType: "blogPosts",
    slug: params.slug ?? "",
  });

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
                <a
                  href="https://www.linkedin.com/in/shuwn-yuan-tee"
                  target="_blank"
                  className="blog_author-image-wrapper w-inline-block"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf255b9b5e7883b67dc6_shuwn.jpg"
                    alt=""
                    sizes="32px"
                    srcSet="
              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf255b9b5e7883b67dc6_shuwn-p-500.jpg 500w,
              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf255b9b5e7883b67dc6_shuwn.jpg       820w
            "
                    className="blog_author-image"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/shuwn-yuan-tee"
                  target="_blank"
                  className="blog_author-info w-inline-block"
                >
                  <p className="text-weight-semibold">{post.fields.author}</p>
                </a>
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
                        <div
                          id="w-node-ee22510b-9577-8420-d248-36433a1028e6-3a1028df"
                          className="fs-toc_link-wrapper"
                        >
                          <a href="#" className="fs-toc_link w-inline-block">
                            <div
                              fs-toc-element="link"
                              className="text-size-tiny"
                            ></div>
                          </a>
                          <div
                            fs-toc-element="ix-trigger"
                            id="w-node-ee22510b-9577-8420-d248-36433a1028ea-3a1028df"
                            className="fs-toc_h-trigger"
                          ></div>
                        </div>
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
                            __html: marked.parse(`${post.fields.postBody}`),
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

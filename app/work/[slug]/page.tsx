import ShareWrapper from "@/components/share-wrapper";
import { getAllPosts, getPost } from "@/lib/contentfulApi";
import { marked } from "marked";
import Image from "next/image";

export async function generateStaticParams() {
  const { posts } = await getAllPosts({ contentType: "work" });
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
    contentType: "work",
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
                    {post.fields.client}
                  </div>
                </div>
              </div>
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <div className="margin-bottom margin-small">
                    <h1>{post.fields.name}</h1>
                  </div>
                  <p className="text-size-medium">{post.fields.caseSummary}</p>
                </div>
              </div>
              <div className="blog-image padding-vertical padding-large">
                <Image
                  src={`${post.fields.mainImage?.fields.file.url}`}
                  alt={`${post.fields.mainImageAltText || post.fields.name}`}
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
                            __html: marked.parse(`${post.fields.caseBody}`),
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
      <section className="cta_section background-color-gray">
        <div className="padding-global">
          <div className="container-medium">
            <div className="padding-section-large">
              <div className="w-layout-grid cta_component">
                <div className="cta_content">
                  <div className="margin-bottom margin-small">
                    <h2>Your vision deserves a great dev team.</h2>
                  </div>
                  <div className="margin-bottom margin-small">
                    <p className="text-size-medium">
                      We&#x27;re not about tech jargon or over-promising.
                      Instead, we focus on clear communication, transparency in
                      our process, and delivering results that speak for
                      themselves.
                    </p>
                  </div>
                  <div className="margin-top margin-medium">
                    <div className="button-group">
                      <a href="/contact" className="button w-button">
                        Hire a great dev team
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cta_image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567f345e20e7d0c2f360238_awards.png"
                    loading="lazy"
                    sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 41vw"
                    srcSet="
              https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567f345e20e7d0c2f360238_awards-p-500.png   500w,
              https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567f345e20e7d0c2f360238_awards-p-800.png   800w,
              https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567f345e20e7d0c2f360238_awards-p-1080.png 1080w,
              https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567f345e20e7d0c2f360238_awards.png        1530w
            "
                    alt="Awards won by Hivekind"
                    className="awards_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

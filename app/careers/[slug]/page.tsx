import ShareWrapper from "@/components/share-wrapper";
import { getAllPosts, getBySlug } from "@/lib/contentfulApi";
import { markdownParser } from "@/lib/markdownParser";
import Mustache from "mustache";
import "@/styles/careers.css";

export async function generateStaticParams() {
  const { posts } = await getAllPosts({ contentType: "job" });
  const slugs = posts.map(({ fields }) => ({
    slug: fields.slug,
  }));

  return slugs;
}

export default async function ProductManagerPage({
  params,
}: {
  params: { slug: string };
}) {
  const { post } = await getBySlug({
    contentType: "job",
    slug: params.slug ?? "",
  });

  const jsonLdData = {
    currentUrl: new URL(
      `/blog/${params.slug}`,
      "https://hivekind.com"
    ).toString(),
    seoTitle: post.fields.seoTitle,
    seoDescription: post.fields.seoDescription,
    ogImage: post.fields.ogImage?.fields.file.url,
    datePosted: post.fields.datePosted,
    validThrough: post.fields.validThrough,
  };

  const jsonLdTemplate = JSON.stringify(post.fields.jsonLd);

  const jobDescription = markdownParser(`${post.fields.jobDescription}`);

  return (
    <main className="main-wrapper">
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: Mustache.render(jsonLdTemplate || "", jsonLdData),
          }}
        />
      </section>
      <div className="section-job">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="padding-global">
                <div className="container-small">
                  <div className="job-post-content_content-top">
                    <div className="job-post-content_breadcrumb">
                      <a
                        href="/about"
                        className="breadcrumb-link w-inline-block"
                      >
                        <div>About</div>
                      </a>
                      <div className="breadcrumb-divider w-embed">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 3L11 8L6 13"
                            stroke="CurrentColor"
                            stroke-width="1.5"
                          />
                        </svg>
                      </div>
                      <a
                        href="/careers"
                        className="breadcrumb-link w-inline-block"
                      >
                        <div>Careers</div>
                      </a>
                    </div>
                    <ShareWrapper
                      url={`https://hivekind.com/careers/${params.slug}`}
                    />
                  </div>
                  <div
                    fs-toc-element="contents"
                    className="job-desc-page-rich-text text-rich-text w-richtext"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobDescription,
                      }}
                    ></div>
                  </div>
                  <ShareWrapper
                    url={`https://hivekind.com/careers/${params.slug}`}
                    shareText="Share this job"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

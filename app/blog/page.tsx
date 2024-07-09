import Link from "next/link";
import { marked } from "marked";

import { getAllPosts } from "@/lib/contentfulApi";
import Image from "next/image";

export default async function BlogPage() {
  const { posts } = await getAllPosts({ contentType: "blogPosts" });

  return (
    <main className="main-wrapper">
      <header id="blog-header-8" className="section_blog">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h1>Insights.</h1>
                    </div>
                    <p className="text-size-medium">
                      Discover the Hivekind culture, our processes, findings,
                      and experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog_component">
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="collection-item w-dyn-item">
                      <a
                        href="/blog/test-coverage-with-istanbul-nyc-for-typescript-projects"
                        className="blog_item-link w-inline-block"
                      >
                        <div className="blog_featured-item-wrapper">
                          <div className="blog_featured-image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a82d088a0253966a7cb24_test-coverage-with-istanbul-nyc-for-typescript-projects.jpg"
                              sizes="(max-width: 767px) 90vw, 45vw"
                              srcSet="
                                  https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a82d088a0253966a7cb24_test-coverage-with-istanbul-nyc-for-typescript-projects-p-500.jpg   500w,
                                  https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a82d088a0253966a7cb24_test-coverage-with-istanbul-nyc-for-typescript-projects-p-800.jpg   800w,
                                  https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a82d088a0253966a7cb24_test-coverage-with-istanbul-nyc-for-typescript-projects-p-1080.jpg 1080w,
                                  https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a82d088a0253966a7cb24_test-coverage-with-istanbul-nyc-for-typescript-projects-p-1600.jpg 1600w,
                                  https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a82d088a0253966a7cb24_test-coverage-with-istanbul-nyc-for-typescript-projects-p-2000.jpg 2000w,
                                  https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a82d088a0253966a7cb24_test-coverage-with-istanbul-nyc-for-typescript-projects.jpg        2400w
                                "
                              className="blog_featured-image"
                            />
                          </div>
                          <div className="blog_featured-item-content background-color-white">
                            <div className="blog_item-content-top">
                              <div className="blog_topic-wrapper">
                                <div className="blog_topic">
                                  <div className="text-size-small text-weight-semibold">
                                    Engineering
                                  </div>
                                </div>
                              </div>
                              <div className="blog_title-wrapper featured-article">
                                <h2 className="heading-style-h4">
                                  Test Coverage with Istanbul (NYC) for
                                  TypeScript Projects
                                </h2>
                              </div>
                              <div className="text-size-regular">
                                Learn how you can integrate Mocha with NYC to
                                generate comprehensive test coverage reports for
                                your TypeScript project.
                              </div>
                            </div>
                            <div className="blog_button-wrapper">
                              <div className="button is-link is-icon">
                                <div>Read more</div>
                                <div className="icon-embed-xxsmall w-embed">
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-dyn-list">
                  <div role="list" className="collection-list-2 w-dyn-items">
                    {posts.map(({ fields }: { fields: any }) => {
                      return (
                        <div
                          role="listitem"
                          className="w-dyn-item"
                          key={`${fields.slug}`}
                        >
                          <Link
                            href={`/blog/${fields.slug}`}
                            className="blog_item-link w-inline-block"
                          >
                            <div className="blog_image-wrapper">
                              <Image
                                src={fields.mainImage.fields.file.url}
                                alt={`${fields.mainImageAltText}`}
                                width={800}
                                height={333}
                                className="blog_image"
                                loading="lazy"
                              />
                            </div>
                            <div className="blog_item-content background-color-white">
                              <div className="blog_item-content-top">
                                <div className="blog_topic-wrapper">
                                  <div className="blog_topic">
                                    <div className="text-size-small text-weight-semibold">
                                      {`${fields.topic}`}
                                    </div>
                                  </div>
                                </div>
                                <div className="blog_title-wrapper">
                                  <h2 className="heading-style-h5">
                                    {`${fields.name}`}
                                  </h2>
                                </div>
                              </div>
                              <div className="blog_button-wrapper">
                                <div className="button is-link is-icon">
                                  <div>Read more</div>
                                  <div className="icon-embed-xxsmall w-embed">
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
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}

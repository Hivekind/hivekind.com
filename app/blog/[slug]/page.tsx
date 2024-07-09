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
  console.log(post);
  return (
    <main className="main-wrapper">
      <div className="section-blog background-color-white">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="blog-topic-wrapper">
                <div className="blog_topic">
                  <div className="text-size-small text-weight-semibold">
                    {`${post.fields.topic}`}
                  </div>
                </div>
              </div>
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <div className="margin-bottom margin-small">
                    <h1>{`${post.fields.name}`}</h1>
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
                  <p className="text-weight-semibold">{`${post.fields.author}`}</p>
                </a>
              </div>
              <div className="blog-image padding-vertical padding-large">
                <Image
                  src={post.fields.mainImage?.fields.file.url}
                  alt={`${post.fields.mainImageAltText}`}
                  width={1600}
                  height={667}
                  className="image"
                  loading="lazy"
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
                      <div className="blog-post_share-wrapper">
                        <h3 className="text-size-medium">Share this article</h3>
                        <div className="w-layout-grid post-share-options">
                          <a
                            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fhivekind.com%2Fblog%2Ftest-coverage-with-istanbul-nyc-for-typescript-projects"
                            className="post-share_social-link w-inline-block"
                          >
                            <div className="post-share_social-icon w-embed">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                  fill="CurrentColor"
                                />
                              </svg>
                            </div>
                          </a>
                          <a
                            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fhivekind.com%2Fblog%2Ftest-coverage-with-istanbul-nyc-for-typescript-projects"
                            className="post-share_social-link w-inline-block"
                          >
                            <div className="post-share_social-icon w-embed">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                          </a>
                          <a
                            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhivekind.com%2Fblog%2Ftest-coverage-with-istanbul-nyc-for-typescript-projects"
                            className="post-share_social-link w-inline-block"
                          >
                            <div className="post-share_social-icon w-embed">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z"
                                  fill="CurrentColor"
                                />
                              </svg>
                            </div>
                          </a>
                          <a
                            href="https://wa.me/?text=https%3A%2F%2Fhivekind.com%2Fblog%2Ftest-coverage-with-istanbul-nyc-for-typescript-projects"
                            className="post-share_social-link w-inline-block"
                          >
                            <div className="post-share_social-icon w-embed">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.319 13.343C16.284 13.3262 14.9717 12.68 14.7385 12.5961C14.6433 12.5619 14.5413 12.5285 14.4329 12.5285C14.2557 12.5285 14.1068 12.6168 13.9909 12.7903C13.8598 12.9851 13.463 13.449 13.3404 13.5875C13.3244 13.6058 13.3025 13.6277 13.2894 13.6277C13.2777 13.6277 13.0746 13.5441 13.0131 13.5173C11.6054 12.9059 10.5369 11.4354 10.3904 11.1875C10.3695 11.1518 10.3686 11.1356 10.3684 11.1356C10.3736 11.1167 10.4209 11.0693 10.4454 11.0448C10.5168 10.9741 10.5943 10.8809 10.6692 10.7907C10.7047 10.748 10.7402 10.7052 10.7751 10.6649C10.8838 10.5384 10.9322 10.4402 10.9883 10.3265L11.0177 10.2674C11.1547 9.99525 11.0377 9.76557 10.9998 9.69141C10.9688 9.62935 10.4147 8.29209 10.3558 8.15159C10.2142 7.81257 10.027 7.65472 9.76685 7.65472C9.74271 7.65472 9.76685 7.65472 9.66563 7.65899C9.54237 7.66419 8.87117 7.75256 8.57441 7.93963C8.2597 8.13804 7.72729 8.77049 7.72729 9.88275C7.72729 10.8838 8.36255 11.829 8.6353 12.1884C8.64208 12.1975 8.65453 12.2159 8.67259 12.2423C9.71711 13.7678 11.0192 14.8983 12.3393 15.4256C13.6101 15.9332 14.2119 15.9919 14.554 15.9919H14.554C14.6978 15.9919 14.8129 15.9806 14.9144 15.9706L14.9788 15.9645C15.4178 15.9255 16.3825 15.4256 16.602 14.8158C16.7749 14.3355 16.8205 13.8107 16.7054 13.6202C16.6267 13.4907 16.4909 13.4255 16.319 13.343Z"
                                  fill="black"
                                />
                                <path
                                  d="M12.1598 3C7.2848 3 3.31873 6.93627 3.31873 11.7746C3.31873 13.3395 3.73752 14.8713 4.53086 16.2119L3.01238 20.6912C2.98409 20.7747 3.00513 20.867 3.0669 20.9299C3.11149 20.9755 3.17198 21 3.23375 21C3.25742 21 3.28127 20.9964 3.30453 20.989L7.97517 19.5048C9.25329 20.1877 10.6979 20.5482 12.1598 20.5482C17.0343 20.5482 21 16.6124 21 11.7746C21 6.93627 17.0343 3 12.1598 3ZM12.1598 18.7204C10.7841 18.7204 9.4517 18.3232 8.30636 17.5716C8.26785 17.5463 8.22314 17.5334 8.17814 17.5334C8.15436 17.5334 8.13051 17.537 8.10731 17.5444L5.7676 18.2881L6.5229 16.0598C6.54733 15.9876 6.53512 15.9081 6.49012 15.8466C5.61793 14.6549 5.15689 13.2469 5.15689 11.7746C5.15689 7.94416 8.29836 4.82782 12.1597 4.82782C16.0206 4.82782 19.1617 7.94416 19.1617 11.7746C19.1618 15.6046 16.0207 18.7204 12.1598 18.7204Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="fs-toc_rich-text">
                      <div
                        fs-toc-element="contents"
                        className="fs-toc_richtext text-rich-text w-richtext"
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: marked.parse(post.fields.postBody),
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

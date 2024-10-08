import { CardList } from "@/components/card-list/card-list";
import "@/styles/blog-section.css";

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="featuredblog_component">
              <div className="margin-bottom margin-xxlarge align-left">
                <div className="featuredblog_heading-wrapper">
                  <div className="featuredblog_heading">
                    <div className="max-width-large">
                      <div className="margin-bottom margin-xsmall">
                        <h2>We love sharing knowledge</h2>
                      </div>
                      <p className="text-size-medium">
                        Check out our latest articles and insights, where we
                        dive into trending topics and share valuable tips to
                        help you stay ahead.
                      </p>
                    </div>
                  </div>
                  <div className="button-group is-right hide-mobile-landscape">
                    <a
                      href="/blog"
                      className="button is-secondary w-button"
                      data-cmp-ab="2"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>

              <CardList
                items={[
                  {
                    url: "/blog/solving-chatbot-woes-in-the-pre-llm-era",
                    imageUrl:
                      "https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/66e2a870c7e88d133d705e9e_chatbot-woes-in-the-pre-llm-era.jpg",
                    imageAltText: "Chatbot woes in the pre-LLM era",
                    topic: "AI",
                    title: "Solving chatbot woes in the pre-LLM era",
                    summary:
                      "Discover how a media company overcame early chatbot challenges in 2017, transforming customer service through innovative problem-solving.",
                    author: {
                      slug: "almaz-ruslan",
                      name: "Almaz Ruslan",
                      profilePicture: {
                        fields: {
                          file: {
                            url: "https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63bbc7d8e1e6244129ae260c_almaz.jpg",
                          },
                        },
                      },
                    },
                  },
                  {
                    url: "/blog/implementing-response-streaming-from-llm",
                    imageUrl:
                      "https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/66e2971987478fc6e873cd0a_streaming-responses-from-llm.jpg",
                    imageAltText: "Streaming responses from LLM",
                    topic: "AI",
                    title: "Implementing response streaming from LLMs",
                    summary:
                      "In this article, we look at how user experience on AI chat apps can be improved by implementing streaming responses from LLMs.",
                    author: {
                      slug: "tee-shuwn-yuan",
                      name: "Tee Shuwn Yuan",
                      profilePicture: {
                        fields: {
                          file: {
                            url: "https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf255b9b5e7883b67dc6_shuwn.jpg",
                          },
                        },
                      },
                    },
                  },
                  {
                    url: "/blog/test-coverage-with-istanbul-nyc-for-typescript-projects",
                    imageUrl:
                      "https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a82d088a0253966a7cb24_test-coverage-with-istanbul-nyc-for-typescript-projects.jpg",
                    imageAltText: "Chatbot woes in the pre-LLM era",
                    topic: "Engineering",
                    title:
                      "Test Coverage with Istanbul (NYC) for TypeScript Projects",
                    summary:
                      "Learn how you can integrate Mocha with NYC to generate comprehensive test coverage reports for your TypeScript project.",
                    author: {
                      slug: "tee-shuwn-yuan",
                      name: "Tee Shuwn Yuan",
                      profilePicture: {
                        fields: {
                          file: {
                            url: "https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf255b9b5e7883b67dc6_shuwn.jpg",
                          },
                        },
                      },
                    },
                  },
                ]}
              />

              <div className="show-mobile-landscape">
                <div className="margin-top margin-xxlarge">
                  <div className="button-group is-right">
                    <a
                      href="#"
                      className="button is-secondary w-button"
                      data-cmp-ab="2"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

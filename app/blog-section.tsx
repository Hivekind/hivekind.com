import { CardList } from "@/components/card-list/card-list";
import { getAllPosts } from "@/lib/contentfulApi";
import "@/styles/blog-section.css";

export default async function BlogSection() {
  const { posts } = await getAllPosts({
    contentType: "blogPosts",
    order: ["-fields.publishedAt"],
  });

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
                cols={posts.length}
                items={posts.slice(0, 3).map(({ fields }) => ({
                  title: fields.name || "Untitled",
                  summary: fields.postSummary || "No summary available",
                  imageUrl: fields.mainImage?.fields.file.url || "",
                  imageAlt: fields.mainImageAltText || "No image description",
                  url: `/blog/${fields.slug}`,
                  topic: fields.blogPostTopic?.fields.name || "Unknown topic",
                  author: fields.author?.fields,
                }))}
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

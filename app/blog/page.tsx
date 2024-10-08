import { getAllPosts } from "@/lib/contentfulApi";
import BlogCard from "@/components/blog-card"; // Import the BlogCardProps type
import BlogCardFeatured from "@/components/blog-card-featured";

export default async function BlogIndexPage() {
  const { posts } = await getAllPosts({
    contentType: "blogPosts",
    order: ["-fields.publishedAt"],
  });

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
                      <h1>Insights</h1>
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
                    <BlogCardFeatured
                      key={posts[0].fields.slug}
                      slug={`${posts[0].fields.slug}`}
                      mainImageUrl={`${posts[0].fields.mainImage?.fields.file.url}`}
                      mainImageAltText={`${posts[0].fields.mainImageAltText}`}
                      topic={`${posts[0].fields.blogPostTopic?.fields.name}`}
                      name={`${posts[0].fields.name}`}
                      summary={posts[0].fields.postSummary}
                    />
                  </div>
                </div>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="collection-list-2 w-dyn-items">
                  {posts.slice(1).map(({ fields }) => {
                    return (
                      <BlogCard
                        key={fields.slug}
                        slug={`${fields.slug}`}
                        mainImageUrl={`${fields.mainImage?.fields.file.url}`}
                        mainImageAltText={`${fields.mainImageAltText}`}
                        topic={`${fields.blogPostTopic?.fields.name}`}
                        name={`${fields.name}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}

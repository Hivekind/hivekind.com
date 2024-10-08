import { CardList } from "@/components/card-list/card-list";
import "@/styles/casestudies.css";
import { getAllPosts } from "@/lib/contentfulApi";

export default async function CasestudiesSection() {
  const { posts } = await getAllPosts({
    contentType: "work",
    order: ["fields.order"],
  });

  return (
    <section className="casestudies-section background-color-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="casestudies_component">
              <div className="margin-bottom margin-xxlarge align-left">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h2>Case studies</h2>
                  </div>
                  <p className="text-size-medium">
                    Here’s a closer look at how we helped some of our clients
                    achieve success.
                  </p>
                </div>
              </div>

              <CardList
                cols={posts.length}
                items={posts.map(({ fields }) => ({
                  title: fields.name || "Untitled",
                  summary: fields.caseSummary || "No summary available",
                  imageUrl: fields.mainImage?.fields.file.url || "",
                  imageAlt: fields.mainImageAltText || "No image description",
                  url: `/work/${fields.slug}`,
                  topic: fields.client || "Unknown client",
                  imageInset: true,
                }))}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

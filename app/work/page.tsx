import ListItem from "@/components/list-item";
import ContactUsSection from "@/components/contact-us-section";
import { getAllPosts } from "@/lib/contentfulApi";

export default async function WorkIndexPage() {
  const { posts } = await getAllPosts({
    contentType: "work",
    order: ["fields.order"],
  });

  return (
    <main className="main-wrapper">
      <section className="work-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h1>Transformative work.</h1>
                    </div>
                    <p className="text-size-medium">
                      We have helped a wide range of companies to build amazing
                      products. Here is a showcase of some of them.
                    </p>
                  </div>
                </div>
              </div>
              <div className="work_component">
                <div className="work_list-wrapper w-dyn-list">
                  <div role="list" className="work_list w-dyn-items">
                    {posts.map(({ fields }) => {
                      return (
                        <ListItem
                          key={fields.slug}
                          url={`/work/${fields.slug}`}
                          imgSrc={`${fields.mainImage?.fields.file.url}`}
                          client={`${fields.client}`}
                          title={`${fields.name}`}
                          description={`${fields.caseSummary}`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUsSection />
    </main>
  );
}

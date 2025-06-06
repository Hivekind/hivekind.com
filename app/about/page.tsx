import Stats from "./stats";
import People from "./people";
import Header from "@/components/header";
import { getAllPosts } from "@/lib/contentfulApi";
import StaticImage from "@/components/static-image";
import softwareDevelopmentPartner from "@/public/images/software-development-partner.webp";
import softwareDevelopmentPartnerFallback from "@/public/images/software-development-partner.jpg";

export default async function AboutPage() {
  const { posts } = await getAllPosts({
    contentType: "teamMembers",
    order: ["fields.order"],
  });

  const title = "Your automations and AI partner";
  const description =
    "We are on a mission to help companies streamline operations, reduce manual work, and unlock scale using practical, production-ready automation and AI solutions.";

  return (
    <main className="main-wrapper">
      <Header title={title} description={description} showContactButton={false}>
        <div className="image-wrapper">
          <StaticImage
            src={softwareDevelopmentPartner}
            srcfallback={softwareDevelopmentPartnerFallback}
            priority
            sizes="(max-width: 479px) 100vw, 90vw"
            alt="Software development partner"
            className="about_image"
          />
        </div>
        <div className="container-small">
          <div className="w-layout-grid hivekind-stats">
            <Stats value="2015" description="Founded" />
            <Stats value="100%" description="Remote" />
            <Stats value={posts.length.toString()} description="Hivekinders" />
          </div>
        </div>
      </Header>

      <section className="team-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h2>Meet the team.</h2>
                    </div>
                    <p className="text-size-medium">
                      Our team may not always be in the same room, but we do a
                      great job staying on the same page.
                    </p>
                  </div>
                </div>
              </div>
              <div className="team_component">
                <div className="w-dyn-list">
                  <div role="list" className="collection-list w-dyn-items">
                    {posts.map(({ fields }) => {
                      return (
                        <People
                          key={fields.slug}
                          name={`${fields.name}`}
                          position={`${fields.jobTitle}`}
                          imgFileName={`${fields.profilePicture?.fields.file.url}`}
                          linkedin={fields.linkedInLink}
                          x={fields.twitterLink}
                          instagram={fields.instagramLink}
                          facebook={fields.facebookLink}
                          github={fields.githubLink}
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
      <section className="join-team-section">
        <div className="padding-global background-color-white">
          <div className="container-small">
            <div className="padding-section-large">
              <div className="text-align-center">
                <div className="margin-bottom margin-small">
                  <h2>Join us</h2>
                </div>
                <p className="text-size-medium">
                  Develop a career with a team that&#x27;s passionate and
                  dedicated to the craft.
                </p>
                <div className="margin-top margin-medium">
                  <div className="button-group is-center">
                    <a href="/careers" className="button w-button">
                      View careers at Hivekind
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

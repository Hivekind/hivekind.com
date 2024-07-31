import ArrowSvg from "@/components/arrow-svg";
import CustomImage from "@/components/custom-image";

interface itemProps {
  url: string;
  imageUrl: string;
  client: string;
  title: string;
  description: string;
}

const Item = ({ url, imageUrl, client, title, description }: itemProps) => {
  return (
    <div role="listitem" className="w-dyn-item">
      <div className="featured-work_item">
        <a href={url} className="featured-work_item-link w-inline-block">
          <div className="featured-work_image-wrapper round-corner-top">
            <CustomImage
              src={imageUrl}
              loading="lazy"
              sizes="(max-width: 767px) 90vw, 43vw"
              width={616}
              height={438}
              alt=""
              className="featured-work_image"
            />
          </div>
          <div className="featured-work_item-content background-color-white round-corner-bottom">
            <div className="featued-work_item-content-top">
              <div className="featured-work_meta-wrapper">
                <div className="work_client">
                  <div className="text-size-small text-weight-semibold">
                    {client}
                  </div>
                </div>
              </div>
              <div className="featured-work_title-wrapper">
                <h3 className="heading-style-h5">{title}</h3>
              </div>
              <div className="text-size-regular">{description}</div>
            </div>
            <div className="featured-work_button-wrapper">
              <div className="button is-link is-icon">
                <div>Read more</div>
                <div className="icon-embed-xxsmall w-embed">
                  <ArrowSvg />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

const CaseStudySection = () => {
  return (
    <section className="work-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="discovery_component">
              <div className="margin-bottom margin-xxlarge">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h2>Case studies</h2>
                  </div>
                  <p className="text-size-medium">
                    Explore our case studies to see how our full-stack software
                    development solutions have helped businesses in different
                    industries succeed.
                  </p>
                </div>
              </div>
              <div>
                <div className="w-dyn-list">
                  <div role="list" className="collection-list-3 w-dyn-items">
                    <Item
                      url="/work/nolo-willmaker-online-the-expansion-of-an-iconic-desktop-product-to-the-web"
                      imageUrl="/images/63c8123ab9aab99e9f2a2c3f_willmaker.png"
                      client="Nolo"
                      title="Nolo WillMaker Online: Expansion of an Iconic Desktop Product to the Web"
                      description="We helped Nolo increase conversion by 70% for their WillMaker product."
                    />
                    <Item
                      url="/work/essayjack-journey-from-prototype-to-acquisition"
                      imageUrl="/images/6388acbd65306f4c13b60071_essayjack.png"
                      client="EssayJack"
                      title="EssayJack: Journey from Prototype to Acquisition"
                      description="Hivekind provided product management, development and devops services to EssayJack until its eventual acquisition."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

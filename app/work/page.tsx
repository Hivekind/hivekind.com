import React from "react";
import ListItem from "@/components/list-item";
import ContactUsSection from "@/components/contact-us-section";

export default function WorkPage() {
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
                    <ListItem
                      url="/work/essayjack-journey-from-prototype-to-acquisition"
                      imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack.png"
                      imgSrcSet="
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack-p-500.png   500w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack-p-800.png   800w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack-p-1080.png 1080w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack.png        1440w
                      "
                      client="EssayJack"
                      title="EssayJack: Journey from Prototype to Acquisition"
                      description="Hivekind provided product management, development and devops services to EssayJack until its eventual acquisition."
                    />

                    <ListItem
                      url="/work/nolo-willmaker-online-the-expansion-of-an-iconic-desktop-product-to-the-web"
                      imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker.png"
                      imgSrcSet="
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker-p-500.png   500w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker-p-800.png   800w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker-p-1080.png 1080w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker.png        1440w
                      "
                      client="Nolo"
                      title="Nolo WillMaker Online: Expansion of an Iconic Desktop Product to the Web"
                      description="We helped Nolo increase conversion by 70% for their WillMaker product."
                    />

                    <ListItem
                      url="/work/mvp-development-for-environmental-impact"
                      imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a5d19948e182bf2575624_malaysia-carbon-score.png"
                      imgSrcSet="
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a5d19948e182bf2575624_malaysia-carbon-score-p-500.png   500w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a5d19948e182bf2575624_malaysia-carbon-score-p-800.png   800w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a5d19948e182bf2575624_malaysia-carbon-score-p-1080.png 1080w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a5d19948e182bf2575624_malaysia-carbon-score.png        1440w
                      "
                      client="Malaysia Green Building Council"
                      title="CarbonScore: MVP Development for Environmental Impact"
                      description="Malaysia Green Building Council partnered with us to build and launch the first version of their CarbonScore application."
                    />

                    <ListItem
                      url="/work/building-an-mvp-for-a-legacy-divorce-product"
                      imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a3c70fdfd5ea7f878cc57_3-step-divorce.png"
                      imgSrcSet="
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a3c70fdfd5ea7f878cc57_3-step-divorce-p-500.png   500w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a3c70fdfd5ea7f878cc57_3-step-divorce-p-800.png   800w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a3c70fdfd5ea7f878cc57_3-step-divorce-p-1080.png 1080w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a3c70fdfd5ea7f878cc57_3-step-divorce.png        1440w
                      "
                      client="Nolo"
                      title="3 Step Divorce: Building an MVP for a Legacy Divorce Product"
                      description="Nolo engaged us to modernize another one of their legal products."
                    />

                    <ListItem
                      url="/work/zonejam-discovering-a-new-product-and-launching-an-mvp"
                      imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/65c43c75467b848333929060_zonejam.png"
                      imgSrcSet="
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/65c43c75467b848333929060_zonejam-p-500.png   500w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/65c43c75467b848333929060_zonejam-p-800.png   800w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/65c43c75467b848333929060_zonejam-p-1080.png 1080w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/65c43c75467b848333929060_zonejam.png        1440w
                      "
                      client="ZoneJam"
                      title="ZoneJam: Discovering a New Product and Launching an MVP"
                      description="ZoneJam started as an internal project, evolving from a market-validated Figma prototype to a planned MVP launch, making global meeting scheduling easier."
                    />

                    <ListItem
                      url="/work/avvo-love-to-the-sales-team"
                      imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ace561788ce34432e774_avvo.png"
                      imgSrcSet="
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ace561788ce34432e774_avvo-p-500.png   500w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ace561788ce34432e774_avvo-p-800.png   800w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ace561788ce34432e774_avvo-p-1080.png 1080w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ace561788ce34432e774_avvo.png        1440w
                      "
                      client="Avvo"
                      title="Avvo: Love to the Sales Team"
                      description="Avvo had a typical problem - a substantial tech team, who were busy with many important deliverables. The trouble was that certain operational aspects of the product were being sidelined."
                    />

                    <ListItem
                      url="/work/martindale-hubbell-a-web-stats-system-is-liberated"
                      imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acfa2f1f34d04c92cbf7_martindale.png"
                      imgSrcSet="
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acfa2f1f34d04c92cbf7_martindale-p-500.png   500w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acfa2f1f34d04c92cbf7_martindale-p-800.png   800w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acfa2f1f34d04c92cbf7_martindale-p-1080.png 1080w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acfa2f1f34d04c92cbf7_martindale.png        1440w
                      "
                      client="Martindale-Hubbell"
                      title="Martindale-Hubbell: A Web Stats System is Liberated"
                      description="A web stats system, collecting key information about ad metrics, had become troublesome to maintain and expensive to run."
                    />

                    <ListItem
                      url="/work/govwizely-open-source-apis-for-public-domain-information"
                      imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad1bbaaa352233144595_govwizely.png"
                      imgSrcSet="
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad1bbaaa352233144595_govwizely-p-500.png   500w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad1bbaaa352233144595_govwizely-p-800.png   800w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad1bbaaa352233144595_govwizely-p-1080.png 1080w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad1bbaaa352233144595_govwizely.png        1440w
                      "
                      client="GovWizely"
                      title="GovWizely: Open-Source APIs for Public Domain Information"
                      description="GovWizely were tasked with making many data sets publicly accessible via standardised HTTP APIs. These data sets were stored in places and formats which were difficult to access and decipher."
                    />

                    <ListItem
                      url="/work/full-slate-ruby-on-rails-upgrade"
                      imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad2f15c47fd795b84d52_fullslate.png"
                      imgSrcSet="
                      https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad2f15c47fd795b84d52_fullslate-p-500.png   500w,
                      https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad2f15c47fd795b84d52_fullslate-p-800.png   800w,
                      https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad2f15c47fd795b84d52_fullslate-p-1080.png 1080w,
                      https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad2f15c47fd795b84d52_fullslate.png        1440w
                    "
                      client="Full Slate"
                      title="Full Slate: Upgrading Ruby on Rails from Version 2.3 to 5.0"
                      description="Full Slate was serving thousands of businesses daily, but a major piece of technical debt had been present for some time: the app was built on Rails version 2.3"
                    />

                    <ListItem
                      url="/work/dasheroo-rapid-integrations-on-a-plug-in-friendly-dashboard-app"
                      imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad4fcb240c29e1499ab9_dasheroo.png"
                      imgSrcSet="
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad4fcb240c29e1499ab9_dasheroo-p-500.png   500w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad4fcb240c29e1499ab9_dasheroo-p-800.png   800w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad4fcb240c29e1499ab9_dasheroo-p-1080.png 1080w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad4fcb240c29e1499ab9_dasheroo.png        1440w
                      "
                      client="Dasheroo"
                      title="Dasheroo: Rapid Integrations on a Plug-in Friendly Dashboard App"
                      description="Dasheroo were a start-up with a viable business idea: to provide a place were digital marketers and business people could see metrics from all the online tools they use in one place."
                    />

                    <ListItem
                      url="/work/internet-brands-clickstream-ingestion-system"
                      imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad60683513534b055ef2_internet-brands.png"
                      imgSrcSet="
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad60683513534b055ef2_internet-brands-p-500.png   500w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad60683513534b055ef2_internet-brands-p-800.png   800w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad60683513534b055ef2_internet-brands-p-1080.png 1080w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ad60683513534b055ef2_internet-brands.png        1440w
                      "
                      client="Internet Brands"
                      title="Internet Brands: Building a Clickstream Ingestion System"
                      description="Our client wanted to capture user activity across the many websites they operate. A clickstream solution (JS snippet, API, message bus) seemed like a straight-forward solution to implement."
                    />

                    <ListItem
                      url="/work/avvo-google-amp-with-dynamic-content"
                      imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ace561788ce34432e774_avvo.png"
                      imgSrcSet="
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ace561788ce34432e774_avvo-p-500.png   500w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ace561788ce34432e774_avvo-p-800.png   800w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ace561788ce34432e774_avvo-p-1080.png 1080w,
                        https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388ace561788ce34432e774_avvo.png        1440w
                      "
                      client="Avvo"
                      title="Implementing Google AMP for Avvo Dynamic Content Pages"
                      description="AMP was becoming a major contributor to the ability to attract traffic from search engines. It was important that our client establish AMP versions of key content pages on their platform."
                    />
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

import React from "react";
import Stats from "./stats";
import People from "./people";
import Header from "@/components/header";

export default function AboutPage() {
  const title = "Your software development partner.";
  const description =
    "We are on a mission to help companies build great products that customers love.";

  return (
    <main className="main-wrapper">
      <Header title={title} description={description}>
        <div className="image-wrapper">
          <img
            src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567dc044a628e5f71c19a57_software-development-partner.jpg"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 90vw"
            srcSet="
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567dc044a628e5f71c19a57_software-development-partner-p-500.jpg   500w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567dc044a628e5f71c19a57_software-development-partner-p-800.jpg   800w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567dc044a628e5f71c19a57_software-development-partner-p-1080.jpg 1080w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567dc044a628e5f71c19a57_software-development-partner-p-1600.jpg 1600w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567dc044a628e5f71c19a57_software-development-partner-p-2000.jpg 2000w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567dc044a628e5f71c19a57_software-development-partner.jpg        3000w
          "
            alt="Software development partner"
            className="about_image"
          />
        </div>
        <div className="container-small">
          <div className="w-layout-grid hivekind-stats">
            <Stats value="2015" description="Founded" />
            <Stats value="100%" description="Remote" />
            <Stats value="30" description="Hivekinders" />
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
                    <People
                      name="Calum Halcrow"
                      position="Founder & CEO"
                      imgFileName="637ecd21937b311a616d335e_calum"
                      linkedin="https://www.linkedin.com/in/calumhalcrow"
                      x="https://twitter.com/calumhalcrow"
                      github="https://github.com/calumhalcrow"
                    />

                    <People
                      name="Yury Stepanov"
                      position="Senior Software Engineer"
                      imgFileName="637ecd331075d329141e21ef_yury"
                      facebook="https://www.facebook.com/yurgen.kulikow"
                    />

                    <People
                      name="Lim Victor"
                      position="Senior Software Engineer"
                      imgFileName="637ecd41db1d0d56cb7b5fd3_victor"
                      linkedin="https://www.linkedin.com/in/victorlim"
                      github="https://github.com/viclim"
                    />

                    <People
                      name="Aaron Lim"
                      position="Senior Software Engineer"
                      imgFileName="637ecd51ff3165b1a6b71b4f_aaron"
                      github="https://github.com/aaron-lim"
                    />

                    <People
                      name="Anton Lvov"
                      position="Senior Software Engineer"
                      imgFileName="637c57a54e23e3b761dbb18b_anton"
                      linkedin="https://www.linkedin.com/in/anton-lvov-6109aa36"
                      x="https://twitter.com/404_denied"
                      facebook="https://www.facebook.com/anton.lvov.90"
                      github="https://github.com/denied404"
                    />

                    <People
                      name="Kavitha Nadarajah"
                      position="HR & Admin Manager"
                      imgFileName="637c57f6f1deb57619b6fa82_kavitha"
                      linkedin="https://www.linkedin.com/in/kavitha-nadarajah-6776992b"
                      instagram="https://www.instagram.com/nkavitha"
                      facebook="https://www.facebook.com/nkavitha"
                    />

                    <People
                      name="Lim Yih En"
                      position="Senior Software Engineer"
                      imgFileName="637ecda381773f948c4e9ce7_yihen"
                      linkedin="https://www.linkedin.com/in/yih-en-lim-16882b99/"
                      github="https://github.com/yih-en"
                    />

                    <People
                      name="Adeline Lim"
                      position="Software Engineer"
                      imgFileName="637ecdb264e4c4f01872a48b_adeline"
                      linkedin="https://www.linkedin.com/in/adeline-lim-593953141/"
                      github="https://github.com/adelinelim"
                    />

                    <People
                      name="Halah Abuateeq"
                      position="Software Engineer"
                      imgFileName="637ecdd0d2e0aa04f64019df_halah"
                      linkedin="https://www.linkedin.com/in/halah-abuateeq/"
                      github="https://github.com/HalahAb"
                    />

                    <People
                      name="Sarah Moktar"
                      position="Attraction Associate"
                      imgFileName="637ecde01f1599cb5497810e_sarah"
                      linkedin="https://www.linkedin.com/in/fatima-maisarah-moktar-a4505b131/"
                    />

                    <People
                      name="Tristan Gomez"
                      position="Senior Software Engineer"
                      imgFileName="637ece773c839941d79ab954_tristan"
                      linkedin="https://www.linkedin.com/in/parasquid/"
                      github="https://github.com/parasquid"
                    />

                    <People
                      name="Jose Fernandes Jr."
                      position="Senior Software Engineer"
                      imgFileName="637ece9badeda66627f420ff_jose"
                      linkedin="https://www.linkedin.com/in/jefernandesjunior/"
                      facebook="https://www.facebook.com/massa1240"
                      github="https://github.com/massa1240"
                    />

                    <People
                      name="Haritha Kotte"
                      position="Software Engineer"
                      imgFileName="637ecec4478d9c481ba58440_haritha"
                      linkedin="https://www.linkedin.com/in/haritha-kotte-55993aa7/"
                      github="https://github.com/harithakotte59"
                    />

                    <People
                      name="Gaukhar Yergaleyeva"
                      position="Software Engineer"
                      imgFileName="637ecee71f15993256979347_gaukhar"
                      linkedin="https://www.linkedin.com/in/yergaleyeva/"
                      github="https://github.com/G900"
                    />

                    <People
                      name="Ahmed Osman"
                      position="Senior Software Engineer"
                      imgFileName="637ecf0ae090ec11a43f832f_ahmed"
                      github="https://github.com/lucindax"
                    />

                    <People
                      name="Tee Shuwn Yuan"
                      position="Senior Software Engineer"
                      imgFileName="637ecf255b9b5e7883b67dc6_shuwn"
                      linkedin="https://www.linkedin.com/in/shuwn-yuan-tee"
                      github="https://github.com/shuwnyuantee"
                    />

                    <People
                      name="Chan Ming Hao"
                      position="Software Engineer"
                      imgFileName="637ecf8a2e44f06b657acadf_minghao"
                      linkedin="https://www.linkedin.com/in/chan-ming-hao-01155064/"
                      github="https://github.com/cmh114933"
                    />

                    <People
                      name="Tiah Oon Tjoe"
                      position="Product Manager"
                      imgFileName="637ecfc6588b83ee71bcde88_tjoe"
                      linkedin="https://www.linkedin.com/in/tiah-oon-tjoe-2aa3b2116"
                    />

                    <People
                      name="Elvis Yong"
                      position="Software Engineer"
                      imgFileName="6396d38aad32251ca545d032_Elvis%20"
                      linkedin="https://www.linkedin.com/in/elvisyong"
                      github="https://github.com/elvisyongwk"
                    />

                    <People
                      name="Shalomi Sangeetha"
                      position="HR & Admin Associate"
                      imgFileName="63b3b0cd5168853c9d255a9b_Shalomi%20Website%20Profile"
                      linkedin="https://www.linkedin.com/in/shalomi-sangeetha-11a7a81ab/"
                    />

                    <People
                      name="Almaz Ruslan"
                      position="Senior Product Manager"
                      imgFileName="63bbc7d8e1e6244129ae260c_almaz"
                      linkedin="https://www.linkedin.com/in/almazruslan"
                      github="https://github.com/almaz-hk"
                    />

                    <People
                      name="Carlos Lima"
                      position="Senior Engineering Manager"
                      imgFileName="637ece34e269415758d32f0f_carlos"
                      linkedin="https://www.linkedin.com/in/carloslimabr/"
                      github="https://github.com/carloslima"
                    />

                    <People
                      name="Wen Yit Tan"
                      position="Associate Software Engineer"
                      imgFileName="64783061e448e3020ca273e8_wen-yit"
                      imgFileType="png"
                      linkedin="https://www.linkedin.com/in/tanwenyit"
                    />

                    <People
                      name="Aliah Jefree"
                      position="Associate Software Engineer"
                      imgFileType="png"
                      imgFileName="6478352fc66751843bf3f270_aliah"
                      linkedin="https://www.linkedin.com/in/aliah-jefree-215816136"
                      github="https://github.com/aliahshakirin"
                    />

                    <People
                      name="Patudeva Sivaceyon"
                      position="Junior Product Manager"
                      imgFileName="650bcbdace14a8cf38931541_patudeva"
                      imgFileType="png"
                      linkedin="https://www.linkedin.com/in/patudeva-sivaceyon-9a2b3c4d/"
                    />

                    <People
                      name="Yoon Wai Yan"
                      position="Senior Software Engineer"
                      imgFileName="637ecf4881773f05e44ebcff_waiyan"
                      linkedin="https://www.linkedin.com/in/yoonwaiyan/"
                      github="https://github.com/yoonwaiyan"
                    />

                    <People
                      name="Audrey Lim"
                      position="Head of Engineering"
                      imgFileName="637ece5a1075d380f21e2c6b_audrey"
                      linkedin="https://www.linkedin.com/in/audrey-lim-a7340865/"
                    />

                    <People
                      name="Mohamed Aas"
                      position="Business Development Manager"
                      imgFileName="637ecfab4caf38eee209a923_aas"
                      linkedin="https://www.linkedin.com/in/mohamedaas"
                    />

                    <People
                      name="Ann Nee Lau"
                      position="Senior Software Engineer"
                      imgFileName="637ecf6aadeda6d62df432fb_annnee"
                      linkedin="https://www.linkedin.com/in/annnee/"
                      github="https://github.com/annnee"
                    />

                    <People
                      name="Hsien Shiung Hwang"
                      position="Software Engineer"
                      imgFileName="6684bf4c2380e376d2c796bb_shiung"
                      linkedin="https://www.linkedin.com/in/hwanghsienshiung/"
                      github="https://github.com/hh-shiung"
                    />
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
                  <h2>Join us.</h2>
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

import React from "react";
import Header from "@/components/header";

export default function CareersPage() {
  const title = "Help us build amazing products.";
  const description =
    "Hivekind is an engineering company at heart. Founded by software engineers with a strong focus on getting things done, the emphasis on delivery and technical excellence runs strong and has been there from day one, guiding everything else. We take great pride on the quality of our work.";

  return (
    <main className="main-wrapper">
      <Header title={title} description={description} showContactButton={false}>
        <div className="header_image-wrapper">
          <img
            src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567ed56ca4e490a1f742ccf_team-at-office.jpg"
            loading="eager"
            sizes="90vw"
            srcSet="
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567ed56ca4e490a1f742ccf_team-at-office-p-500.jpg   500w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567ed56ca4e490a1f742ccf_team-at-office-p-800.jpg   800w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567ed56ca4e490a1f742ccf_team-at-office-p-1080.jpg 1080w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567ed56ca4e490a1f742ccf_team-at-office-p-1600.jpg 1600w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567ed56ca4e490a1f742ccf_team-at-office-p-2000.jpg 2000w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567ed56ca4e490a1f742ccf_team-at-office.jpg        3000w
          "
            alt="Hivekind team at the office"
            className="about_image"
          />
        </div>
      </Header>

      <section className="about-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div
                data-duration-in="400"
                data-duration-out="200"
                data-current="Tab 2"
                data-easing="ease"
                className="about_component w-tabs"
              >
                <div
                  id="w-node-_228e1b52-617f-6ebf-dfc2-4cccd6aae9dc-5ddf420a"
                  className="about_tabs-menu w-tab-menu"
                >
                  <a
                    data-w-tab="Tab 1"
                    className="about_tabs-link w-inline-block w-tab-link"
                  >
                    <div className="margin-bottom margin-xsmall">
                      <h2 className="heading-style-h4">
                        Improve and grow with us.
                      </h2>
                    </div>
                    <p>
                      In our constantly evolving industry, it&#x27;s crucial to
                      continually develop our skills and knowledge.
                    </p>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className="about_tabs-link w-inline-block w-tab-link w--current"
                  >
                    <div className="margin-bottom margin-xsmall">
                      <h2 className="heading-style-h4">We get things done.</h2>
                    </div>
                    <p>
                      We have a propensity to ship and are continually focused
                      on delivering results for our clients.
                    </p>
                  </a>
                  <a
                    data-w-tab="Tab 3"
                    className="about_tabs-link w-inline-block w-tab-link"
                  >
                    <div className="margin-bottom margin-xsmall">
                      <h2 className="heading-style-h4">
                        Be part of a remote culture.
                      </h2>
                    </div>
                    <p>
                      We&#x27;re a remote-first team who work with clients
                      spread across the globe.
                    </p>
                  </a>
                </div>
                <div className="w-tab-content">
                  <div data-w-tab="Tab 1" className="w-tab-pane">
                    <div className="tab_image-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e0323e154a5879f063af_scrum-training.jpg"
                        loading="lazy"
                        sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"
                        srcSet="
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e0323e154a5879f063af_scrum-training-p-500.jpg   500w,
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e0323e154a5879f063af_scrum-training-p-800.jpg   800w,
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e0323e154a5879f063af_scrum-training-p-1080.jpg 1080w,
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e0323e154a5879f063af_scrum-training.jpg        1410w
                      "
                        alt="Scrum training"
                        className="tab_image"
                      />
                    </div>
                  </div>
                  <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                    <div className="tab_image-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567df7d1353f6b3fba806c0_hiveklimb.jpg"
                        loading="lazy"
                        sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"
                        srcSet="
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567df7d1353f6b3fba806c0_hiveklimb-p-500.jpg   500w,
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567df7d1353f6b3fba806c0_hiveklimb-p-800.jpg   800w,
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567df7d1353f6b3fba806c0_hiveklimb-p-1080.jpg 1080w,
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567df7d1353f6b3fba806c0_hiveklimb.jpg        1533w
                      "
                        alt="A Hivekind employee wall climbing"
                        className="tab_image"
                      />
                    </div>
                  </div>
                  <div data-w-tab="Tab 3" className="w-tab-pane">
                    <div className="tab_image-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e0336b4770d3746350f5_remote-team.jpg"
                        loading="lazy"
                        sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"
                        srcSet="
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e0336b4770d3746350f5_remote-team-p-500.jpg   500w,
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e0336b4770d3746350f5_remote-team-p-800.jpg   800w,
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e0336b4770d3746350f5_remote-team-p-1080.jpg 1080w,
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e0336b4770d3746350f5_remote-team.jpg        1500w
                      "
                        alt="Remote team"
                        className="tab_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="values-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="values_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="max-width-large">
                    <div className="margin-bottom margin-small">
                      <h2>Our values guide everything we do.</h2>
                    </div>
                    <p className="text-size-medium">
                      Every decision we make is driven by the things we believe
                      in.
                    </p>
                  </div>
                </div>
                <div className="w-layout-grid values_list">
                  <div className="values_item">
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Empathy</h3>
                    </div>
                    <p>
                      We are good listeners, and we consider the feelings and
                      thoughts of others before passing judgement. We appreciate
                      and support each other to the best of our abilities.
                    </p>
                  </div>
                  <div className="values_item">
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Respect</h3>
                    </div>
                    <p>
                      We are informal and relaxed. We come from different
                      backgrounds and cultures, and we celebrate it. We are fair
                      and respectful to ourselves and to those we interact with.
                    </p>
                  </div>
                  <div className="values_item">
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Learning</h3>
                    </div>
                    <p>
                      We know that our understanding of the world is always
                      incomplete. We know that we gain more knowledge as we work
                      on problems. We accept this and inspect, learn, and adapt
                      frequently.
                    </p>
                  </div>
                  <div className="values_item">
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Synergy</h3>
                    </div>
                    <p>
                      We are strongly team-focused and believe that stable,
                      effective teams are greater than the sum of their parts.
                      We enjoy being members of our respective teams and the
                      work we do.
                    </p>
                  </div>
                  <div className="values_item">
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Autonomy</h3>
                    </div>
                    <p>
                      We appreciate the trust, freedom, and autonomy given to
                      us. We treat it with respect and understand the
                      responsibility that comes with it.
                    </p>
                  </div>
                  <div className="values_item">
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Integrity</h3>
                    </div>
                    <p>
                      We are honest with ourselves and highly transparent in the
                      work we do. Our clients appreciate this even when we tell
                      them what they did not want or expect to hear.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="margin-bottom margin-medium">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h2>We leave a good impression.</h2>
                  </div>
                  <p className="text-size-medium">
                    Read what staff from client teams say about us.
                  </p>
                </div>
              </div>
              <div className="staff-testimonial_component">
                <div className="staff-testimonial_content">
                  <div className="margin-vertical margin-medium">
                    <div className="heading-style-h6">
                      &quot;Words cannot describe what a wonderful group of
                      people you are, and how much I&#x27;ve enjoyed working and
                      interacting with y&#x27;all, even those folks I&#x27;ve
                      never met in person. I&#x27;m so honored to have had the
                      chance to get to know you all.&quot;
                    </div>
                  </div>
                  <div className="testimonial_staff">
                    <div className="staff-testimonial_image-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e5e82bea986af7044910_yana-radenska.jpg"
                        loading="lazy"
                        alt="Yana Radenska"
                        className="testimonial_staff-image"
                      />
                    </div>
                    <div className="testimonial_staff-info">
                      <p className="text-weight-semibold">
                        <strong>Yana Radenska</strong>
                      </p>
                      <p>Former Software Engineer, Avvo</p>
                    </div>
                  </div>
                </div>
                <div className="staff-testimonial_content">
                  <div className="margin-vertical margin-medium">
                    <div className="heading-style-h6">
                      &quot;I feel that you have all been such wonderful
                      colleagues/friends and I&#x27;m just grateful to have met
                      you all and had lunches, dinners and good laughs. Everyone
                      at the company is honestly a real gem. Rare to find a
                      genuinely good group of people such as yourselves.&quot;
                    </div>
                  </div>
                  <div className="testimonial_staff">
                    <div className="staff-testimonial_image-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e5e837fbb382020c4777_tamanna-patel.jpg"
                        loading="lazy"
                        alt="Tamanna Patel"
                        className="testimonial_staff-image"
                      />
                    </div>
                    <div className="testimonial_staff-info">
                      <p className="text-weight-semibold">
                        <strong>Tamanna Patel</strong>
                      </p>
                      <p>Former Product Manager, EssayJack</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="perks-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="perks_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <div className="max-width-large">
                      <h2>Perks and Benefits</h2>
                    </div>
                  </div>
                </div>
                <div className="margin-bottom margin-xxhuge">
                  <div className="w-layout-grid perks_list">
                    <div className="perks_item">
                      <div className="margin-bottom margin-small">
                        <div className="icon-embed-medium w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            preserveAspectRatio="xMidYMid meet"
                            aria-hidden="true"
                            role="img"
                          >
                            <path
                              d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM4 12C4 11.101 4.156 10.238 4.431 9.431L8 13V15L11 18V19.931C7.061 19.436 4 16.072 4 12ZM18.33 16.873C17.677 16.347 16.687 16 16 16V15C16 14.4696 15.7893 13.9609 15.4142 13.5858C15.0391 13.2107 14.5304 13 14 13H10V10C10.5304 10 11.0391 9.78929 11.4142 9.41421C11.7893 9.03914 12 8.53043 12 8V7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5V4.589C17.928 5.778 20 8.65 20 12C19.9998 13.7647 19.4123 15.4791 18.33 16.873Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3 className="heading-style-h5">Work from anywhere</h3>
                      </div>
                      <p>
                        We&#x27;ve been a 100% distributed team from day one,
                        embracing remote work.
                      </p>
                    </div>
                    <div className="perks_item">
                      <div className="margin-bottom margin-small">
                        <div className="icon-embed-medium w-embed">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21 10H3C2.73478 10 2.48043 10.1054 2.29289 10.2929C2.10536 10.4804 2 10.7348 2 11C2.00004 12.7553 2.46213 14.4797 3.33981 15.9999C4.21749 17.52 5.47985 18.7823 7 19.66V21C7 21.2652 7.10536 21.5196 7.29289 21.7071C7.48043 21.8946 7.73478 22 8 22H16C16.2652 22 16.5196 21.8946 16.7071 21.7071C16.8946 21.5196 17 21.2652 17 21V19.66C18.5202 18.7823 19.7825 17.52 20.6602 15.9999C21.5379 14.4797 22 12.7553 22 11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10ZM15.55 18.16C15.3836 18.2439 15.2439 18.3726 15.1467 18.5316C15.0495 18.6906 14.9987 18.8736 15 19.06V20H9V19.06C9.0013 18.8736 8.95049 18.6906 8.85331 18.5316C8.75612 18.3726 8.61644 18.2439 8.45 18.16C7.26691 17.575 6.24693 16.7064 5.48096 15.6316C4.71499 14.5568 4.22684 13.3092 4.06 12H19.94C19.7732 13.3092 19.285 14.5568 18.519 15.6316C17.7531 16.7064 16.7331 17.575 15.55 18.16ZM9 9V7.93C8.99852 6.75363 8.53948 5.62397 7.72 4.78C7.48815 4.54572 7.30512 4.26775 7.18152 3.96219C7.05793 3.65664 6.99623 3.32958 7 3V2H5V3C4.99627 4.18329 5.45569 5.32106 6.28 6.17C6.74339 6.63831 7.00229 7.27118 7 7.93V9H9ZM13 9V7.93C12.9985 6.75363 12.5395 5.62397 11.72 4.78C11.4882 4.54572 11.3051 4.26775 11.1815 3.96219C11.0579 3.65664 10.9962 3.32958 11 3V2H9V3C9.00148 4.17637 9.46052 5.30603 10.28 6.15C10.5118 6.38428 10.6949 6.66225 10.8185 6.96781C10.9421 7.27336 11.0038 7.60042 11 7.93V9H13ZM17 9V7.93C16.9985 6.75363 16.5395 5.62397 15.72 4.78C15.4882 4.54572 15.3051 4.26775 15.1815 3.96219C15.0579 3.65664 14.9962 3.32958 15 3V2H13V3C13.0015 4.17637 13.4605 5.30603 14.28 6.15C14.5118 6.38428 14.6949 6.66225 14.8185 6.96781C14.9421 7.27336 15.0038 7.60042 15 7.93V9H17Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3 className="heading-style-h5">Free lunch</h3>
                      </div>
                      <p>
                        Lunch is on us every time you come to work from our
                        office.
                      </p>
                    </div>
                    <div className="perks_item">
                      <div className="margin-bottom margin-small">
                        <div className="icon-embed-medium w-embed">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.6491 5.28602L14.0001 8.54802V2.02502H10.0001V8.54802L4.35107 5.28602L2.35107 8.75102L7.99907 12.012L2.35107 15.273L4.35107 18.738L10.0001 15.477V22H14.0001V15.477L19.6491 18.738L21.6491 15.273L16.0011 12.012L21.6491 8.75102L19.6491 5.28602Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3 className="heading-style-h5">Stay healthy</h3>
                      </div>
                      <p>
                        Comprehensive medical insurance and a dental/optical
                        allowance.
                      </p>
                    </div>
                    <div className="perks_item">
                      <div className="margin-bottom margin-small">
                        <div className="icon-embed-medium w-embed">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                              fill="black"
                            />
                            <path d="M9 17L17 12L9 7V17Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3 className="heading-style-h5">Keep learning</h3>
                      </div>
                      <p>
                        Monthly budget to spend on educational materials or
                        subscriptions.
                      </p>
                    </div>
                    <div className="perks_item">
                      <div className="margin-bottom margin-small">
                        <div className="icon-embed-medium w-embed">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 17.722C20.595 17.375 21 16.737 21 16V5C21 3.897 20.103 3 19 3H5C3.897 3 3 3.897 3 5V16C3 16.736 3.405 17.375 4 17.722V18H2V20H22V18H20V17.722ZM5 16V5H19L19.002 16H5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3 className="heading-style-h5">Work computer</h3>
                      </div>
                      <p>
                        A MacBook Pro or equivalent  will be provided for
                        carrying out work duties.
                      </p>
                    </div>
                    <div className="perks_item">
                      <div className="margin-bottom margin-small">
                        <div className="icon-embed-medium w-embed">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 5V19H9V13H15V19H18V5H15V11H9V5H6ZM3 15C3 15.2652 3.10536 15.5196 3.29289 15.7071C3.48043 15.8946 3.73478 16 4 16H5V8H4C3.73478 8 3.48043 8.10536 3.29289 8.29289C3.10536 8.48043 3 8.73478 3 9V11H2V13H3V15ZM21 9C21 8.73478 20.8946 8.48043 20.7071 8.29289C20.5196 8.10536 20.2652 8 20 8H19V16H20C20.2652 16 20.5196 15.8946 20.7071 15.7071C20.8946 15.5196 21 15.2652 21 15V13H22V11H21V9Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3 className="heading-style-h5">Enhance well-being</h3>
                      </div>
                      <p>
                        Monthly budget allocated to spend on various wellness
                        services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="header_image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e8b0bb0c2dd09bb37b2e_team-dinner.jpg"
                    loading="eager"
                    sizes="90vw"
                    srcSet="
                    https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e8b0bb0c2dd09bb37b2e_team-dinner-p-500.jpg   500w,
                    https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e8b0bb0c2dd09bb37b2e_team-dinner-p-800.jpg   800w,
                    https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e8b0bb0c2dd09bb37b2e_team-dinner-p-1080.jpg 1080w,
                    https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e8b0bb0c2dd09bb37b2e_team-dinner-p-1600.jpg 1600w,
                    https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e8b0bb0c2dd09bb37b2e_team-dinner-p-2000.jpg 2000w,
                    https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567e8b0bb0c2dd09bb37b2e_team-dinner.jpg        3072w
                  "
                    alt="Hivekind team dinner"
                    className="team-dinner_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="jobs-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="margin-bottom margin-xxlarge justify-left">
                <h2 className="text-align-left">Open positions</h2>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/careers/product-manager"
                      className="job-list_item w-inline-block"
                    >
                      <div
                        id="w-node-_5e1c5846-d26a-9164-4a58-b667264beb4e-5ddf420a"
                        className="max-width-large"
                      >
                        <div className="text-size-large text-weight-bold">
                          Product Manager
                        </div>
                        <div className="text-size-medium">Junior-Mid Level</div>
                      </div>
                      <div className="job-list_content-right">
                        <div className="job-list_department-wrapper">
                          <div
                            fs-cmssort-field="IDENTIFIER"
                            className="text-size-small"
                          >
                            On-site or Remote
                          </div>
                        </div>
                        <div className="button-2 is-tertiary is-small is-icon-only">
                          <div className="icon-embed-xsmall w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9377L9.22541 17.6726C9.00573 17.8923 8.64963 17.8923 8.42996 17.6726L8.16476 17.4074C7.94508 17.1878 7.94508 16.8316 8.16476 16.6119L13.2367 11.54L8.16476 6.46806C7.94508 6.24838 7.94508 5.89228 8.16476 5.67261L8.42996 5.40741C8.64963 5.18773 9.00573 5.18773 9.22541 5.40741L14.9603 11.1423Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/careers/software-engineer"
                      className="job-list_item w-inline-block"
                    >
                      <div
                        id="w-node-_5e1c5846-d26a-9164-4a58-b667264beb4e-5ddf420a"
                        className="max-width-large"
                      >
                        <div className="text-size-large text-weight-bold">
                          Software Engineer
                        </div>
                        <div className="text-size-medium">Mid-Senior Level</div>
                      </div>
                      <div className="job-list_content-right">
                        <div className="job-list_department-wrapper">
                          <div
                            fs-cmssort-field="IDENTIFIER"
                            className="text-size-small"
                          >
                            On-site or Remote
                          </div>
                        </div>
                        <div className="button-2 is-tertiary is-small is-icon-only">
                          <div className="icon-embed-xsmall w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9377L9.22541 17.6726C9.00573 17.8923 8.64963 17.8923 8.42996 17.6726L8.16476 17.4074C7.94508 17.1878 7.94508 16.8316 8.16476 16.6119L13.2367 11.54L8.16476 6.46806C7.94508 6.24838 7.94508 5.89228 8.16476 5.67261L8.42996 5.40741C8.64963 5.18773 9.00573 5.18773 9.22541 5.40741L14.9603 11.1423Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hiring-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="values_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="max-width-large">
                    <div className="margin-bottom margin-small">
                      <h2>We take hiring seriously.</h2>
                    </div>
                    <p className="text-size-medium">
                      Our focus on hiring skilled individuals is fundamental to
                      our mission of building great products.
                    </p>
                  </div>
                </div>
                <div className="w-layout-grid values_list">
                  <div className="values_item">
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">1 - Resume Screening</h3>
                    </div>
                    <p>
                      We look at your resume and other professional profiles
                      (e.g. LinkedIn, Github) to get an initial feel for fitness
                      with the position.
                    </p>
                  </div>
                  <div className="values_item">
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">2 - Technical Test</h3>
                    </div>
                    <p>
                      We send you a set of questions to complete in your own
                      time. These questions test your technical knowledge and
                      written communication skills.
                    </p>
                  </div>
                  <div className="values_item">
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">3 - First Interview</h3>
                    </div>
                    <p>
                      A single interviewer will talk with you in broad terms to
                      get a much better understanding of what you&#x27;re
                      looking for next in your career.
                    </p>
                  </div>
                  <div className="values_item">
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">4 - Group Exercise</h3>
                    </div>
                    <p>
                      You&#x27;ll be tasked with a technical task to be done
                      together with a number of our senior staff members.
                    </p>
                  </div>
                  <div className="values_item">
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">5 - Reference Checks</h3>
                    </div>
                    <p>
                      We&#x27;ll speak to some previous managers to see what it
                      would be like working with you.
                    </p>
                  </div>
                  <div className="values_item">
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">6 - Offer</h3>
                    </div>
                    <p>
                      If you reach this stage, we&#x27;d love to work with you!
                      We&#x27;ll make you an official offer to join us.
                    </p>
                  </div>
                </div>
              </div>
              <div className="margin-bottom margin-xxhuge"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";

interface FeatureItemProps {
  title: string;
  description: string;
  svg: React.ReactNode;
}

const FeatureItem = ({ title, description, svg }: FeatureItemProps) => {
  return (
    <div className="features_item">
      <div className="features_item-icon-wrapper">
        <div className="icon-embed-small w-embed">{svg}</div>
      </div>
      <div className="features_item-text-wrapper">
        <div className="margin-bottom margin-xsmall">
          <h3 className="heading-style-h5">{title}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="features-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="margin-top margin-xxlarge">
            <div className="container-small">
              <div className="text-align-center">
                <div className="margin-bottom">
                  <div className="margin-large">
                    <h2>There&#x27;s more.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="padding-section-large">
            <div className="container-medium">
              <div className="w-layout-grid features_component">
                <div className="features_content">
                  <div className="w-layout-grid features_item-list">
                    <FeatureItem
                      title="Tailored solutions"
                      description="We believe in building software with you, not just for you, ensuring every solution meets your exact needs."
                      svg={
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
                            d="M6 14C3.794 14 2 15.794 2 18C2 20.206 3.794 22 6 22C7.05682 21.9987 8.07025 21.5795 8.81922 20.8339C9.56819 20.0883 9.99193 19.0768 9.998 18.02H10V16H14V18.039H14.004C14.0148 19.0922 14.4404 20.0988 15.1884 20.8403C15.9365 21.5818 16.9467 21.9985 18 22C20.206 22 22 20.206 22 18C22 15.794 20.206 14 18 14H16V10H18C20.206 10 22 8.206 22 6C22 3.794 20.206 2 18 2C15.794 2 14 3.794 14 6V8H10V5.98H9.998C9.99193 4.92319 9.56819 3.91167 8.81922 3.16607C8.07025 2.42047 7.05682 2.0013 6 2C3.794 2 2 3.794 2 6C2 8.206 3.794 10 6 10H8V14H6ZM8 18C8 19.122 7.121 20 6 20C4.879 20 4 19.122 4 18C4 16.878 4.879 16 6 16H8V18ZM18 16C19.121 16 20 16.878 20 18C20 19.122 19.121 20 18 20C16.879 20 16 19.122 16 18V16H18ZM16 6C16 4.878 16.879 4 18 4C19.121 4 20 4.878 20 6C20 7.122 19.121 8 18 8H16V6ZM6 8C4.879 8 4 7.122 4 6C4 4.878 4.879 4 6 4C7.121 4 8 4.878 8 6V8H6ZM10 10H14V14H10V10Z"
                            fill="currentColor"
                          />
                        </svg>
                      }
                    />

                    <FeatureItem
                      title="Scalable and flexible products"
                      description="We build products that can effortlessly grow and evolve with your business."
                      svg={
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
                            d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                            fill="currentColor"
                          />
                          <path
                            d="M13 6L7 13H11V18L17 11H13V6Z"
                            fill="currentColor"
                          />
                        </svg>
                      }
                    />

                    <FeatureItem
                      title="Global perspectives"
                      description="We have team members from over 10 countries, each contributing invaluable insights to the development of global products."
                      svg={
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
                            d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM19.931 11H17.167C17.0436 8.81124 16.4313 6.67797 15.375 4.757C16.5992 5.32905 17.6589 6.2014 18.4554 7.29291C19.252 8.38442 19.7596 9.65965 19.931 11ZM12.53 4.027C13.565 5.391 14.957 7.807 15.157 11H9.03C9.169 8.404 10.024 5.972 11.481 4.026C11.653 4.016 11.825 4 12 4C12.179 4 12.354 4.016 12.53 4.027ZM8.688 4.727C7.704 6.618 7.136 8.762 7.03 11H4.069C4.24177 9.64784 4.75663 8.3621 5.56489 7.26442C6.37315 6.16673 7.44808 5.29339 8.688 4.727ZM4.069 13H7.043C7.179 15.379 7.708 17.478 8.599 19.23C7.38119 18.6559 6.32773 17.7842 5.53596 16.6953C4.74419 15.6064 4.23966 14.3355 4.069 13ZM11.45 19.973C10.049 18.275 9.222 15.896 9.041 13H15.154C14.946 15.773 14.037 18.196 12.551 19.972C12.369 19.984 12.187 20 12 20C11.814 20 11.633 19.984 11.45 19.973ZM15.461 19.201C16.416 17.407 16.999 15.3 17.152 13H19.93C19.7612 14.3243 19.264 15.5853 18.4834 16.6684C17.7029 17.7514 16.6639 18.622 15.461 19.201Z"
                            fill="currentColor"
                          />
                        </svg>
                      }
                    />
                  </div>
                </div>
                <div className="features_image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6356ad0005fe31123d2701b0_hero.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 91vw, (max-width: 767px) 90vw, (max-width: 991px) 43vw, 41vw"
                    srcSet="
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6356ad0005fe31123d2701b0_hero-p-500.jpg   500w,
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6356ad0005fe31123d2701b0_hero-p-800.jpg   800w,
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6356ad0005fe31123d2701b0_hero-p-1080.jpg 1080w,
                        https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6356ad0005fe31123d2701b0_hero.jpg        1146w
                      "
                    alt="Dev team planning"
                    className="features_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

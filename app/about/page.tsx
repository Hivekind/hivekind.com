export default function AboutPage() {
  return (
    <main className="main-wrapper">
      <header className="header-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="header_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <div className="max-width-large">
                      <div className="margin-bottom margin-small">
                        <h1>Your software development partner.</h1>
                      </div>
                      <p className="text-size-medium">
                        We are on a mission to help companies build great
                        products that customers love.  
                      </p>
                    </div>
                  </div>
                </div>
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
                    <div className="hivekind-stats-wrapper">
                      <div className="margin-bottom margin-xxsmall">
                        <div className="text-align-center">
                          <div className="heading-style-h2">2015</div>
                        </div>
                      </div>
                      <div className="text-align-center">Founded</div>
                    </div>
                    <div className="hivekind-stats-wrapper">
                      <div className="margin-bottom margin-xxsmall">
                        <div className="text-align-center">
                          <div className="heading-style-h2">100%</div>
                        </div>
                      </div>
                      <div className="text-align-center">Remote</div>
                    </div>
                    <div className="hivekind-stats-wrapper">
                      <div className="margin-bottom margin-xxsmall">
                        <div className="text-align-center">
                          <div className="heading-style-h2">29</div>
                        </div>
                      </div>
                      <div className="text-align-center">Hivekinders</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
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
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecd21937b311a616d335e_calum.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecd21937b311a616d335e_calum-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecd21937b311a616d335e_calum.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Calum Halcrow
                          </div>
                          <div className="text-size-medium">
                            Founder &amp; CEO
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/calumhalcrow"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://twitter.com/calumhalcrow"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/calumhalcrow"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecd331075d329141e21ef_yury.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecd331075d329141e21ef_yury-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecd331075d329141e21ef_yury.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Yury Stepanov
                          </div>
                          <div className="text-size-medium">
                            Senior Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.facebook.com/yurgen.kulikow"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecd41db1d0d56cb7b5fd3_victor.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecd41db1d0d56cb7b5fd3_victor-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecd41db1d0d56cb7b5fd3_victor.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Lim Victor
                          </div>
                          <div className="text-size-medium">
                            Senior Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/victorlim"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/viclim"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecd51ff3165b1a6b71b4f_aaron.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecd51ff3165b1a6b71b4f_aaron-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecd51ff3165b1a6b71b4f_aaron.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Aaron Lim
                          </div>
                          <div className="text-size-medium">
                            Senior Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/aaron-lim"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637c57a54e23e3b761dbb18b_anton.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637c57a54e23e3b761dbb18b_anton-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637c57a54e23e3b761dbb18b_anton-p-800.jpg 800w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637c57a54e23e3b761dbb18b_anton.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Anton Lvov
                          </div>
                          <div className="text-size-medium">
                            Senior Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/anton-lvov-6109aa36"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://twitter.com/404_denied"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.facebook.com/anton.lvov.90"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/denied404"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637c57f6f1deb57619b6fa82_kavitha.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637c57f6f1deb57619b6fa82_kavitha-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637c57f6f1deb57619b6fa82_kavitha-p-800.jpg 800w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637c57f6f1deb57619b6fa82_kavitha.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Kavitha Nadarajah
                          </div>
                          <div className="text-size-medium">
                            HR &amp; Admin Manager
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/kavitha-nadarajah-6776992b"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.instagram.com/nkavitha"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.facebook.com/nkavitha"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecda381773f948c4e9ce7_yihen.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecda381773f948c4e9ce7_yihen-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecda381773f948c4e9ce7_yihen.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Lim Yih En
                          </div>
                          <div className="text-size-medium">
                            Senior Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/yih-en-lim-16882b99/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/yih-en"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecdb264e4c4f01872a48b_adeline.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecdb264e4c4f01872a48b_adeline-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecdb264e4c4f01872a48b_adeline.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Adeline Lim
                          </div>
                          <div className="text-size-medium">
                            Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/adeline-lim-593953141/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/adelinelim"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecdd0d2e0aa04f64019df_halah.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecdd0d2e0aa04f64019df_halah-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecdd0d2e0aa04f64019df_halah.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Halah Abuateeq
                          </div>
                          <div className="text-size-medium">
                            Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/halah-abuateeq/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/HalahAb"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecde01f1599cb5497810e_sarah.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecde01f1599cb5497810e_sarah-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecde01f1599cb5497810e_sarah.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Sarah Moktar
                          </div>
                          <div className="text-size-medium">
                            Attraction Associate
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/fatima-maisarah-moktar-a4505b131/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ece773c839941d79ab954_tristan.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ece773c839941d79ab954_tristan-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ece773c839941d79ab954_tristan.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Tristan Gomez
                          </div>
                          <div className="text-size-medium">
                            Senior Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/parasquid/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/parasquid"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ece9badeda66627f420ff_jose.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ece9badeda66627f420ff_jose-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ece9badeda66627f420ff_jose.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Jose Fernandes Jr.
                          </div>
                          <div className="text-size-medium">
                            Senior Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/jefernandesjunior/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.facebook.com/massa1240"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/massa1240"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecec4478d9c481ba58440_haritha.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecec4478d9c481ba58440_haritha-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecec4478d9c481ba58440_haritha.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Haritha Kotte
                          </div>
                          <div className="text-size-medium">
                            Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/haritha-kotte-55993aa7/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/harithakotte59"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecee71f15993256979347_gaukhar.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecee71f15993256979347_gaukhar-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecee71f15993256979347_gaukhar.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Gaukhar Yergaleyeva
                          </div>
                          <div className="text-size-medium">
                            Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/yergaleyeva/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/G900"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf0ae090ec11a43f832f_ahmed.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf0ae090ec11a43f832f_ahmed-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf0ae090ec11a43f832f_ahmed.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Ahmed Osman
                          </div>
                          <div className="text-size-medium">
                            Senior Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/lucindax"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf255b9b5e7883b67dc6_shuwn.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf255b9b5e7883b67dc6_shuwn-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf255b9b5e7883b67dc6_shuwn.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Tee Shuwn Yuan
                          </div>
                          <div className="text-size-medium">
                            Senior Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/shuwn-yuan-tee"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/shuwnyuantee"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf8a2e44f06b657acadf_minghao.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf8a2e44f06b657acadf_minghao-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf8a2e44f06b657acadf_minghao.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Chan Ming Hao
                          </div>
                          <div className="text-size-medium">
                            Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/chan-ming-hao-01155064/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/cmh114933"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecfc6588b83ee71bcde88_tjoe.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecfc6588b83ee71bcde88_tjoe-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecfc6588b83ee71bcde88_tjoe.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Tiah Oon Tjoe
                          </div>
                          <div className="text-size-medium">
                            Product Manager
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/tiah-oon-tjoe-2aa3b2116"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6396d38aad32251ca545d032_Elvis%20.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6396d38aad32251ca545d032_Elvis%20-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6396d38aad32251ca545d032_Elvis%20-p-800.jpg 800w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6396d38aad32251ca545d032_Elvis%20.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Elvis Yong
                          </div>
                          <div className="text-size-medium">
                            Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/elvisyong"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/elvisyongwk"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63b3b0cd5168853c9d255a9b_Shalomi%20Website%20Profile.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63b3b0cd5168853c9d255a9b_Shalomi%20Website%20Profile-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63b3b0cd5168853c9d255a9b_Shalomi%20Website%20Profile-p-800.jpg 800w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63b3b0cd5168853c9d255a9b_Shalomi%20Website%20Profile.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Shalomi Sangeetha
                          </div>
                          <div className="text-size-medium">
                            HR &amp; Admin Associate
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/shalomi-sangeetha-11a7a81ab/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63bbc7d8e1e6244129ae260c_almaz.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63bbc7d8e1e6244129ae260c_almaz-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63bbc7d8e1e6244129ae260c_almaz.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Almaz Ruslan
                          </div>
                          <div className="text-size-medium">
                            Senior Product Manager
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/almazruslan"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/almaz-hk"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ece34e269415758d32f0f_carlos.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ece34e269415758d32f0f_carlos-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ece34e269415758d32f0f_carlos.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Carlos Lima
                          </div>
                          <div className="text-size-medium">
                            Senior Engineering Manager
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/carloslimabr/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/carloslima"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/64783061e448e3020ca273e8_wen-yit.png"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/64783061e448e3020ca273e8_wen-yit-p-500.png 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/64783061e448e3020ca273e8_wen-yit-p-800.png 800w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/64783061e448e3020ca273e8_wen-yit.png       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Wen Yit Tan
                          </div>
                          <div className="text-size-medium">
                            Associate Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/tanwenyit"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6478352fc66751843bf3f270_aliah.png"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6478352fc66751843bf3f270_aliah-p-500.png 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6478352fc66751843bf3f270_aliah-p-800.png 800w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6478352fc66751843bf3f270_aliah.png       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Aliah Jefree
                          </div>
                          <div className="text-size-medium">
                            Associate Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/aliah-jefree-215816136"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/aliahshakirin"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/650bcbdace14a8cf38931541_patudeva.png"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/650bcbdace14a8cf38931541_patudeva-p-500.png 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/650bcbdace14a8cf38931541_patudeva-p-800.png 800w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/650bcbdace14a8cf38931541_patudeva.png       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Patudeva Sivaceyon
                          </div>
                          <div className="text-size-medium">
                            Junior Product Manager
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/patudeva-sivaceyon-9a2b3c4d/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf4881773f05e44ebcff_waiyan.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf4881773f05e44ebcff_waiyan-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf4881773f05e44ebcff_waiyan.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Yoon Wai Yan
                          </div>
                          <div className="text-size-medium">
                            Senior Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/yoonwaiyan/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/yoonwaiyan"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf6aadeda6d62df432fb_annnee.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf6aadeda6d62df432fb_annnee-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf6aadeda6d62df432fb_annnee-p-800.jpg 800w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecf6aadeda6d62df432fb_annnee.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Ann Nee Lau
                          </div>
                          <div className="text-size-medium">
                            Senior Software Engineer
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/annnee/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://github.com/annnee"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ece5a1075d380f21e2c6b_audrey.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ece5a1075d380f21e2c6b_audrey-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ece5a1075d380f21e2c6b_audrey.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Audrey Lim
                          </div>
                          <div className="text-size-medium">
                            Head of Engineering
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/audrey-lim-a7340865/"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="team_item">
                        <div className="margin-bottom margin-small">
                          <div className="team_image-wrapper">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecfab4caf38eee209a923_aas.jpg"
                              sizes="(max-width: 991px) 300px, 280px"
                              srcSet="
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecfab4caf38eee209a923_aas-p-500.jpg 500w,
                              https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/637ecfab4caf38eee209a923_aas.jpg       820w
                            "
                              className="team_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-size-large text-weight-semibold text-align-center">
                            Mohamed Aas
                          </div>
                          <div className="text-size-medium">
                            Business Development Manager
                          </div>
                          <div className="w-layout-grid team_social">
                            <a
                              href="https://www.linkedin.com/in/mohamedaas"
                              target="_blank"
                              className="social-link w-inline-block"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="social-link w-inline-block w-condition-invisible"
                            >
                              <div className="social-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
                                    fill="CurrentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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

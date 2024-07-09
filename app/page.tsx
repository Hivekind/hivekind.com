import Header from '@/components/header';

export default function Home() {
  const title = "The transparent software development company.";
  const description = "Build meaningful products with a software development company that's committed to transparency; clear objectives, regular updates, frequent releases, and a fixed monthly cost.";

  return (
    <>
      <main className="main-wrapper">
        <Header
          title={title}
          description={description}
          paddingStyle="padding-section-medium"
        >
          <div className="header_image-wrapper">
            <img
              src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage.jpeg"
              loading="eager"
              sizes="90vw"
              srcSet="
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage-p-500.jpeg   500w,
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage-p-800.jpeg   800w,
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage-p-1080.jpeg 1080w,
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage-p-1600.jpeg 1600w,
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage-p-2000.jpeg 2000w,
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage-p-2600.jpeg 2600w,
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage.jpeg        3600w
                "
              alt="Software development company photomontage"
              className="header_image"
            />
          </div>
        </Header>

        <section className="testimonial-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="max-width-large align-center">
                  <div className="testimonial_component">
                    <div className="margin-vertical">
                      <div className="margin-bottom margin-medium">
                        <div className="heading-style-h5">
                          &quot;We had worked with other IT providers and found
                          budgets and timelines stretching. Not so with
                          Hivekind.&quot;
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_client-image-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/655abbaccce334dacf855c7f_lindy-ledohowski.jpg"
                        loading="lazy"
                        alt="Dr Lindy Ledohowski"
                        className="testimonial_client-image"
                      />
                    </div>
                    <p className="text-weight-semibold">Dr Lindy Ledohowski</p>
                    <p>CEO &amp; Co-Founder, EssayJack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="value-props-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="margin-top">
                <div className="container-small">
                  <div className="text-align-center">
                    <div className="margin-large">
                      <h2>We are different.</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="padding-section-medium overflow-auto">
                <div className="container-medium">
                  <table className="features-comparison_component">
                    <thead className="features-table_header">
                      <tr className="features-table_row row-bottom-border">
                        <th className="features-table_cell is-title background-color-gray"></th>
                        <th className="features-table_cell">
                          <div className="features-table_header_wrapper">
                            <div className="features-table_header_content">
                              <div className="features-table_icon-wrapper">
                                <div className="text-size-regular text-style-allcaps">
                                  Hivekind
                                </div>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th className="features-table_cell is-table-heading">
                          <div className="features-table_header_wrapper">
                            <div className="features-table_header_content">
                              <div className="features-table_icon-wrapper">
                                <div className="text-size-regular text-style-allcaps">
                                  Others
                                </div>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="features-table_body">
                      <tr className="features-table_row is-transparent">
                        <td className="features-table_cell is-title background-color-gray">
                          <h3 className="text-size-regular text-weight-semibold text-wrap">
                            Developers
                          </h3>
                        </td>
                        <td valign="top" className="features-table_cell">
                          <div className="features-table-cell_content">
                            <div>
                              <div className="icon-1x1-xxsmall w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="10"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.7067 13.293L8.41016 11L7 12.4141L10.7109 16.1211L17.418 9.41016L16.0039 8L10.7067 13.293Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-size-regular">
                              Vetted through a 5-step process
                            </div>
                          </div>
                        </td>
                        <td
                          valign="top"
                          className="features-table_cell background-color-gray"
                        >
                          <div className="features-table-cell_content">
                            <div>
                              <div className="icon-1x1-xxsmall w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="10"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.7067 13.293L8.41016 11L7 12.4141L10.7109 16.1211L17.418 9.41016L16.0039 8L10.7067 13.293Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-size-regular">
                              Adequately vetted
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="features-table_row">
                        <td className="features-table_cell is-title is-even">
                          <h3 className="text-size-regular text-weight-semibold text-wrap">
                            Focus and Commitment
                          </h3>
                        </td>
                        <td
                          valign="top"
                          className="features-table_cell is-even background-color-white"
                        >
                          <div className="features-table-cell_content">
                            <div>
                              <div className="icon-1x1-xxsmall w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="10"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.7067 13.293L8.41016 11L7 12.4141L10.7109 16.1211L17.418 9.41016L16.0039 8L10.7067 13.293Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-size-regular">
                              Team members are fully committed to one project at
                              a time
                            </div>
                          </div>
                        </td>
                        <td
                          valign="top"
                          className="features-table_cell background-color-white round-corner-right"
                        >
                          <div className="features-table-cell_content">
                            <div>
                              <div className="icon-1x1-xxsmall w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.172 16.2421L12 13.4141L14.828 16.2421L16.242 14.8281L13.414 12.0001L16.242 9.17206L14.828 7.75806L12 10.5861L9.172 7.75806L7.758 9.17206L10.586 12.0001L7.758 14.8281L9.172 16.2421Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22ZM12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-size-regular">
                              Team members may work on multiple  projects
                              simultaneously
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="features-table_row is-transparent">
                        <td className="features-table_cell is-title is-odd">
                          <h3 className="text-size-regular text-weight-semibold text-wrap">
                            Communication
                          </h3>
                        </td>
                        <td valign="top" className="features-table_cell">
                          <div className="features-table-cell_content">
                            <div>
                              <div className="icon-1x1-xxsmall w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="10"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.7067 13.293L8.41016 11L7 12.4141L10.7109 16.1211L17.418 9.41016L16.0039 8L10.7067 13.293Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-size-regular">
                              Regular updates and feedback
                            </div>
                          </div>
                        </td>
                        <td valign="top" className="features-table_cell">
                          <div className="features-table-cell_content">
                            <div>
                              <div className="icon-1x1-xxsmall w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.172 16.2421L12 13.4141L14.828 16.2421L16.242 14.8281L13.414 12.0001L16.242 9.17206L14.828 7.75806L12 10.5861L9.172 7.75806L7.758 9.17206L10.586 12.0001L7.758 14.8281L9.172 16.2421Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22ZM12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-size-regular">
                              Infrequent or poor communication
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="features-table_row">
                        <td className="features-table_cell is-title is-even">
                          <h3 className="text-size-regular text-weight-semibold text-wrap">
                            Project management
                          </h3>
                        </td>
                        <td
                          valign="top"
                          className="features-table_cell background-color-white"
                        >
                          <div className="features-table-cell_content">
                            <div>
                              <div className="icon-1x1-xxsmall w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="10"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.7067 13.293L8.41016 11L7 12.4141L10.7109 16.1211L17.418 9.41016L16.0039 8L10.7067 13.293Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-size-regular">
                              Clearly defined tasks and roadmap. Good
                              documentation
                            </div>
                          </div>
                        </td>
                        <td
                          valign="top"
                          className="features-table_cell background-color-white round-corner-right"
                        >
                          <div className="features-table-cell_content">
                            <div>
                              <div className="icon-1x1-xxsmall w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.172 16.2421L12 13.4141L14.828 16.2421L16.242 14.8281L13.414 12.0001L16.242 9.17206L14.828 7.75806L12 10.5861L9.172 7.75806L7.758 9.17206L10.586 12.0001L7.758 14.8281L9.172 16.2421Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22ZM12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-size-regular">
                              Reactive planning. Very little or no documentation
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="features-table_row is-transparent">
                        <td className="features-table_cell is-title is-odd">
                          <h3 className="text-size-regular text-weight-semibold text-wrap">
                            Work transparency
                          </h3>
                        </td>
                        <td valign="top" className="features-table_cell">
                          <div className="features-table-cell_content">
                            <div>
                              <div className="icon-1x1-xxsmall w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="10"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.7067 13.293L8.41016 11L7 12.4141L10.7109 16.1211L17.418 9.41016L16.0039 8L10.7067 13.293Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-size-regular">
                              Complete transparency
                            </div>
                          </div>
                        </td>
                        <td valign="top" className="features-table_cell">
                          <div className="features-table-cell_content">
                            <div>
                              <div className="icon-1x1-xxsmall w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.172 16.2421L12 13.4141L14.828 16.2421L16.242 14.8281L13.414 12.0001L16.242 9.17206L14.828 7.75806L12 10.5861L9.172 7.75806L7.758 9.17206L10.586 12.0001L7.758 14.8281L9.172 16.2421Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22ZM12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-size-regular">
                              Limited transparency
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="features-table_row">
                        <td className="features-table_cell is-title is-even">
                          <h3 className="text-size-regular text-weight-semibold text-wrap">
                            Code and assets
                          </h3>
                        </td>
                        <td
                          valign="top"
                          className="features-table_cell background-color-white"
                        >
                          <div className="features-table-cell_content">
                            <div>
                              <div className="icon-1x1-xxsmall w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="10"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.7067 13.293L8.41016 11L7 12.4141L10.7109 16.1211L17.418 9.41016L16.0039 8L10.7067 13.293Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-size-regular">
                              You have full ownership and control
                            </div>
                          </div>
                        </td>
                        <td
                          valign="top"
                          className="features-table_cell background-color-white round-corner-right"
                        >
                          <div className="features-table-cell_content">
                            <div>
                              <div className="icon-1x1-xxsmall w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.172 16.2421L12 13.4141L14.828 16.2421L16.242 14.8281L13.414 12.0001L16.242 9.17206L14.828 7.75806L12 10.5861L9.172 7.75806L7.758 9.17206L10.586 12.0001L7.758 14.8281L9.172 16.2421Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22ZM12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-size-regular">
                              Limited access
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                        <div
                          id="w-node-a8fbd1ac-62bd-a83e-b405-708a05ee78f9-5ddf41fa"
                          className="features_item"
                        >
                          <div className="features_item-icon-wrapper">
                            <div className="icon-embed-small w-embed">
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
                            </div>
                          </div>
                          <div className="features_item-text-wrapper">
                            <div className="margin-bottom margin-xsmall">
                              <h3 className="heading-style-h5">
                                Tailored solutions
                              </h3>
                            </div>
                            <p>
                              We believe in building software with you, not just
                              for you, ensuring every solution meets your exact
                              needs.
                            </p>
                          </div>
                        </div>
                        <div
                          id="w-node-a8fbd1ac-62bd-a83e-b405-708a05ee790b-5ddf41fa"
                          className="features_item"
                        >
                          <div className="features_item-icon-wrapper">
                            <div className="icon-embed-small w-embed">
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
                            </div>
                          </div>
                          <div className="features_item-text-wrapper">
                            <div className="margin-bottom margin-xsmall">
                              <h3 className="heading-style-h5">
                                Scalable and flexible products
                              </h3>
                            </div>
                            <p>
                              We build products that can effortlessly grow and
                              evolve with your business.
                            </p>
                          </div>
                        </div>
                        <div
                          id="w-node-a8fbd1ac-62bd-a83e-b405-708a05ee7902-5ddf41fa"
                          className="features_item"
                        >
                          <div className="features_item-icon-wrapper">
                            <div className="icon-embed-small w-embed">
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
                            </div>
                          </div>
                          <div className="features_item-text-wrapper">
                            <div className="margin-bottom margin-xsmall">
                              <h3 className="heading-style-h5">
                                Global perspectives
                              </h3>
                            </div>
                            <p>
                              We have team members from over 10 countries, each
                              contributing invaluable insights to the
                              development of global products.
                            </p>
                          </div>
                        </div>
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
        <section className="work-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="margin-top margin-xxlarge">
                <div className="container-small">
                  <div className="text-align-center">
                    <div className="margin-bottom">
                      <div className="margin-large">
                        <h2>We deliver results.</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="padding-section-medium">
                <div className="container-medium">
                  <div className="w-dyn-list">
                    <div role="list" className="collection-list-3 w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="featured-work_item">
                          <a
                            href="/work/nolo-willmaker-online-the-expansion-of-an-iconic-desktop-product-to-the-web"
                            className="featured-work_item-link w-inline-block"
                          >
                            <div className="featured-work_image-wrapper round-corner-top">
                              <img
                                alt=""
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker.png"
                                sizes="100vw"
                                srcSet="
                                    https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker-p-500.png   500w,
                                    https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker-p-800.png   800w,
                                    https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker.png        1440w
                                  "
                                className="featured-work_image"
                              />
                            </div>
                            <div className="featured-work_item-content background-color-white round-corner-bottom">
                              <div className="featued-work_item-content-top">
                                <div className="featured-work_meta-wrapper">
                                  <div className="work_client">
                                    <div className="text-size-small text-weight-semibold">
                                      Nolo
                                    </div>
                                  </div>
                                </div>
                                <div className="featured-work_title-wrapper">
                                  <h3 className="heading-style-h5">
                                    Nolo WillMaker Online: Expansion of an
                                    Iconic Desktop Product to the Web
                                  </h3>
                                </div>
                                <div className="text-size-regular">
                                  We helped Nolo increase conversion by 70% for
                                  their WillMaker product.
                                </div>
                              </div>
                              <div className="featured-work_button-wrapper">
                                <div className="button is-link is-icon">
                                  <div>Read more</div>
                                  <div className="icon-embed-xxsmall w-embed">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 3L11 8L6 13"
                                        stroke="CurrentColor"
                                        strokeWidth="1.5"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="featured-work_item">
                          <a
                            href="/work/essayjack-journey-from-prototype-to-acquisition"
                            className="featured-work_item-link w-inline-block"
                          >
                            <div className="featured-work_image-wrapper round-corner-top">
                              <img
                                alt=""
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack.png"
                                sizes="100vw"
                                srcSet="
                                    https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack-p-500.png   500w,
                                    https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack-p-800.png   800w,
                                    https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack.png        1440w
                                  "
                                className="featured-work_image"
                              />
                            </div>
                            <div className="featured-work_item-content background-color-white round-corner-bottom">
                              <div className="featued-work_item-content-top">
                                <div className="featured-work_meta-wrapper">
                                  <div className="work_client">
                                    <div className="text-size-small text-weight-semibold">
                                      EssayJack
                                    </div>
                                  </div>
                                </div>
                                <div className="featured-work_title-wrapper">
                                  <h3 className="heading-style-h5">
                                    EssayJack: Journey from Prototype to
                                    Acquisition
                                  </h3>
                                </div>
                                <div className="text-size-regular">
                                  Hivekind provided product management,
                                  development and devops services to EssayJack
                                  until its eventual acquisition.
                                </div>
                              </div>
                              <div className="featured-work_button-wrapper">
                                <div className="button is-link is-icon">
                                  <div>Read more</div>
                                  <div className="icon-embed-xxsmall w-embed">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 3L11 8L6 13"
                                        stroke="CurrentColor"
                                        strokeWidth="1.5"
                                      />
                                    </svg>
                                  </div>
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
            </div>
          </div>
        </section>
        <section className="testimonial-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="margin-bottom">
                  <div className="margin-medium">
                    <div className="max-width-large align-center">
                      <div className="testimonial_component">
                        <div className="margin-vertical">
                          <div className="margin-bottom margin-medium">
                            <div className="heading-style-h5">
                              &quot;They acted not simply as a vendor, but as a
                              true partner in the strategic development and
                              delivery of our project.&quot;
                            </div>
                          </div>
                        </div>
                        <div className="testimonial_client-image-wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/655ab8fe7dbc4d7805694576_mitch-gelber.jpg"
                            loading="lazy"
                            alt="Mitch Gelber"
                            className="testimonial_client-image"
                          />
                        </div>
                        <div className="margin-bottom">
                          <p className="text-weight-semibold">Mitch Gelber</p>
                          <p>CEO, Malaysia Green Building Council</p>
                          <div className="margin-xlarge"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta_section">
          <div className="padding-global background-color-white">
            <div className="container-medium">
              <div className="padding-section-large">
                <div className="w-layout-grid cta_component">
                  <div className="cta_content">
                    <div className="margin-bottom margin-small">
                      <h2>
                        Your vision deserves a dedicated software development
                        team.
                      </h2>
                    </div>
                    <div className="margin-bottom margin-small">
                      <p className="text-size-medium">
                        We&#x27;re not about tech jargon or over-promising.
                        Instead, we focus on clear communication, transparency
                        in our process, and delivering results that speak for
                        themselves.
                      </p>
                    </div>
                    <div className="margin-top margin-medium">
                      <div className="button-group">
                        <a href="/contact" className="button w-button">
                          Schedule a call
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cta_image-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6639dc18c475875bf5b9c68f_top-software-development-company-malaysia-awards.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 43vw, 41vw"
                      srcSet="
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6639dc18c475875bf5b9c68f_top-software-development-company-malaysia-awards-p-500.png  500w,
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6639dc18c475875bf5b9c68f_top-software-development-company-malaysia-awards-p-800.png  800w,
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6639dc18c475875bf5b9c68f_top-software-development-company-malaysia-awards.png       1530w
                        "
                      alt="Top software development company Malaysia awards"
                      className="awards_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

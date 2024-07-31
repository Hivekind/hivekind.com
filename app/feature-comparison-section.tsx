import React from "react";

interface RowProps {
  isOdd: boolean;
  title: string;
  col1Check: boolean;
  col1Text: string;
  col2Check: boolean;
  col2Text: string;
}

const CheckSvg = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
    <path
      d="M10.7067 13.293L8.41016 11L7 12.4141L10.7109 16.1211L17.418 9.41016L16.0039 8L10.7067 13.293Z"
      fill="white"
    />
  </svg>
);

const UncheckSvg = () => (
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
);

const renderCheckIcon = (isCheck: boolean) => {
  return isCheck ? <CheckSvg /> : <UncheckSvg />;
};

const Row = ({
  isOdd,
  title,
  col1Check,
  col1Text,
  col2Check,
  col2Text,
}: RowProps) => {
  const transparent = isOdd ? "is-transparent" : "";
  const evenOdd = isOdd ? "is-odd" : "is-even";
  const col1Bg = isOdd ? "" : "is-even background-color-white";
  const col2Bg = isOdd ? "" : "background-color-white round-corner-right";

  return (
    <tr className={`features-table_row ${transparent}`}>
      <td className={`features-table_cell is-title ${evenOdd}`}>
        <h3 className="text-size-regular text-weight-semibold text-wrap">
          {title}
        </h3>
      </td>
      <td valign="top" className={`features-table_cell ${col1Bg}`}>
        <div className="features-table-cell_content">
          <div>
            <div className="icon-1x1-xxsmall w-embed">
              {renderCheckIcon(col1Check)}
            </div>
          </div>
          <div className="text-size-regular">{col1Text}</div>
        </div>
      </td>
      <td valign="top" className={`features-table_cell ${col2Bg}`}>
        <div className="features-table-cell_content">
          <div>
            <div className="icon-1x1-xxsmall w-embed">
              {renderCheckIcon(col2Check)}
            </div>
          </div>
          <div className="text-size-regular">{col2Text}</div>
        </div>
      </td>
    </tr>
  );
};

const FeatureComparisonSection = () => {
  return (
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
                  <Row
                    isOdd={true}
                    title="Developers"
                    col1Check={true}
                    col1Text="Vetted through a 5-step process"
                    col2Check={true}
                    col2Text="Adequately vetted"
                  />
                  <Row
                    isOdd={false}
                    title="Focus and Commitment"
                    col1Check={true}
                    col1Text="Team members are fully committed to one project at a time"
                    col2Check={false}
                    col2Text="Team members may work on multiple projects simultaneously"
                  />
                  <Row
                    isOdd={true}
                    title="Communication"
                    col1Check={true}
                    col1Text="Regular updates and feedback"
                    col2Check={false}
                    col2Text="Infrequent or poor communication"
                  />
                  <Row
                    isOdd={false}
                    title="Project management"
                    col1Check={true}
                    col1Text="Clearly defined tasks and roadmap. Good documentation"
                    col2Check={false}
                    col2Text="Reactive planning. Very little or no documentation"
                  />
                  <Row
                    isOdd={true}
                    title="Work transparency"
                    col1Check={true}
                    col1Text="Complete transparency"
                    col2Check={false}
                    col2Text="Limited transparency"
                  />
                  <Row
                    isOdd={false}
                    title="Code and assets"
                    col1Check={true}
                    col1Text="You have full ownership and control"
                    col2Check={false}
                    col2Text="Limited access"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparisonSection;

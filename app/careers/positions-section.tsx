import { fieldsType } from "@/lib/contentfulApi";
import { dateInPast } from "@/lib/utils";

const PositionsList = ({
  posts,
}: {
  posts: Array<{ fields: Partial<fieldsType> }>;
}) => {
  return (
    <div className="w-dyn-list">
      <div role="list" className="w-dyn-items">
        {posts
          .map(({ fields }) => {
            if (dateInPast(new Date(fields.validThrough ?? new Date()))) {
              return;
            }
            return (
              <div key={fields.slug} role="listitem" className="w-dyn-item">
                <a
                  href={`/careers/${fields.slug}`}
                  className="job-list_item w-inline-block"
                >
                  <div className="max-width-large">
                    <div className="text-size-large text-weight-bold">
                      {fields.title}
                    </div>
                    <div className="text-size-medium">
                      {fields.experienceLevel}
                    </div>
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
            );
          })
          .filter(Boolean)}
      </div>
    </div>
  );
};

const PositionsSection = ({
  posts,
}: {
  posts: Array<{ fields: Partial<fieldsType> }>;
}) => {
  return (
    <section className="jobs-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="margin-bottom margin-xxlarge justify-left">
              <h2 className="text-align-left">Open positions</h2>
            </div>
            <PositionsList posts={posts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositionsSection;

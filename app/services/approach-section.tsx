import CheckInCircleInvertedSvg from "@/components/svgs/check-in-circle-inverted";

export default function ApproachSection() {
  return (
    <section className="approach-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="w-layout-grid process_component">
              <div className="process_content-left">
                <div className="margin-bottom margin-small">
                  <h2>Delivered by dedicated development teams.</h2>
                </div>
                <p className="text-size-medium">
                  Leverage the expertise of our dedicated development teams for
                  your projects. They work closely with you to understand your
                  needs and implement solutions that are both scalable and
                  sustainable.
                </p>
                <div className="margin-top margin-medium">
                  <div className="button-group">
                    <a href="/contact" className="button w-button">
                      Schedule a call
                    </a>
                  </div>
                </div>
              </div>
              <div className="process_content-right">
                <div className="process_stages-wrapper">
                  <div className="process_progress-bar-wrapper">
                    <div className="process_progress-bar"></div>
                  </div>
                  <div className="w-layout-grid process_timeline-step">
                    <div className="process_timeline-left">
                      <div className="process_timeline-icon-wrapper">
                        <div className="product-stage">
                          <div className="icon-embed-xxsmall w-embed">
                            <CheckInCircleInvertedSvg />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="process_timeline-right">
                      <div className="process_text-wrapper">
                        <div className="margin-bottom margin-xsmall">
                          <h3 className="text-size-large">
                            Fully Dedicated Staffing
                          </h3>
                        </div>
                        <p>
                          Each member of the dedicated team works exclusively on
                          your project—there is no time split. This level of
                          commitment leads to better project outcomes and
                          increases your ROI.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-grid process_timeline-step">
                    <div className="process_timeline-left">
                      <div className="process_timeline-icon-wrapper">
                        <div className="product-stage">
                          <div className="icon-embed-xxsmall w-embed">
                            <CheckInCircleInvertedSvg />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="process_timeline-right">
                      <div className="process_text-wrapper">
                        <div className="margin-bottom margin-xsmall">
                          <h3 className="text-size-large">Managed Teams</h3>
                        </div>
                        <p>
                          We fully vet, hire, and manage our teams in-house.
                          This oversight ensures that your project progresses
                          smoothly and meets your expectations efficiently.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-grid process_timeline-step">
                    <div className="process_timeline-left">
                      <div className="process_timeline-icon-wrapper">
                        <div className="product-stage">
                          <div className="icon-embed-xxsmall w-embed">
                            <CheckInCircleInvertedSvg />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="process_timeline-right">
                      <div className="process_text-wrapper">
                        <div className="margin-bottom margin-xsmall">
                          <h3 className="text-size-large">
                            Highly Experienced
                          </h3>
                        </div>
                        <p>
                          Each team is highly experienced, with years of
                          expertise that leads to faster problem-solving and
                          more innovative solutions for your project.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-grid process_timeline-step">
                    <div className="process_timeline-left">
                      <div className="process_timeline-icon-wrapper">
                        <div className="product-stage">
                          <div className="icon-embed-xxsmall w-embed">
                            <CheckInCircleInvertedSvg />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="process_timeline-right">
                      <div className="process_text-wrapper">
                        <div className="margin-bottom margin-xsmall">
                          <h3 className="text-size-large">Clear Objectives</h3>
                        </div>
                        <p>
                          With a focus on clear objectives, we establish
                          well-defined goals at the start of every project to
                          ensure all efforts are directed towards achieving
                          specific outcomes. This clarity drives our team’s
                          efforts and enhances overall project success.
                        </p>
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
  );
}

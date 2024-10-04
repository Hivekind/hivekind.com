export default function HeaderSection() {
  return (
    <header className="header-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="w-layout-grid header-component">
              <div className="header-content">
                <div className="margin-bottom margin-small">
                  <h1>AI Product Development </h1>
                </div>
                <p className="text-size-medium">
                  Unlock the potential of AI with tailored solutions and expert
                  guidance to drive innovation and business transformation.
                </p>
                <div className="margin-top margin-medium">
                  <div className="button-group">
                    <a
                      href="/contact"
                      className="button w-button"
                      data-cmp-ab="2"
                    >
                      Schedule a call
                    </a>
                  </div>
                </div>
              </div>
              <div className="header_image-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66e282ee35b4e832eeaae8ca_ai-product-development.png"
                  loading="eager"
                  sizes="(max-width: 479px) 100vw, (max-width: 991px) 90vw, 42vw"
                  srcSet="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66e282ee35b4e832eeaae8ca_ai-product-development-p-500.png 500w, https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66e282ee35b4e832eeaae8ca_ai-product-development-p-800.png 800w, https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66e282ee35b4e832eeaae8ca_ai-product-development-p-1080.png 1080w, https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66e282ee35b4e832eeaae8ca_ai-product-development.png 1264w"
                  alt="AI product development"
                  className="header-image"
                  data-cmp-ab="2"
                  data-cmp-info="10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

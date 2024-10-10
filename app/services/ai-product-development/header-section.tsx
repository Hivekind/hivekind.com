import StaticImage from "@/components/static-image";
import aiProductDevelopment from "@/public/images/ai-product-development.webp";
import aiProductDevelopmentFallback from "@/public/images/ai-product-development.png";

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
                <StaticImage
                  src={aiProductDevelopment}
                  srcfallback={aiProductDevelopmentFallback}
                  priority={true}
                  sizes="(max-width: 479px) 100vw, (max-width: 991px) 90vw, 42vw"
                  alt="AI product development"
                  className="header-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

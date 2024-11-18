import { ReactNode } from "react";
import "@/styles/blog-section.css";

interface SectionProps {
  title?: string;
  description?: string;
  cta?: string;
  ctaUrl?: string;
  className?: string;
  children?: ReactNode;
}

export default function Section({
  title,
  description,
  cta,
  ctaUrl,
  className,
  children,
}: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="featuredblog_component">
              <div className="margin-bottom margin-xxlarge align-left">
                <div className="items-end flex-1 grid lg:auto-cols-fr grid-cols-[1fr_max-content] lg:gap-x-20">
                  <div className="">
                    <div className="max-width-large">
                      <div className="margin-bottom margin-xsmall">
                        <h2 className="leading-tight font-bold text-4xl md:text-[2.75rem] lg:text-5xl">
                          {title}
                        </h2>
                      </div>
                      <p className="text-size-medium">{description}</p>
                    </div>
                  </div>
                  {cta && (
                    <div className="button-group is-right hide-mobile-landscape">
                      <a href={ctaUrl} className="button is-secondary w-button">
                        {cta}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {children}

              {cta && (
                <div className="show-mobile-landscape">
                  <div className="margin-top margin-xxlarge">
                    <div className="button-group is-right">
                      <a href={ctaUrl} className="button is-secondary w-button">
                        {cta}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

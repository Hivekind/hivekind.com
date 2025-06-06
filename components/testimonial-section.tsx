import { StaticImport } from "next/dist/shared/lib/get-img-props";
import "@/styles/testimonial-carousel.css";
import ContentfulImage from "./contentful-image";

type TestimonialSectionProps = {
  quote: string;
  name: string;
  title: string;
  image: string;
  isCarousel?: boolean;
  bgColorClass?: string;
};

export default function TestimonialSection({
  quote,
  name,
  title,
  bgColorClass = "",
  image,
  isCarousel = false,
}: TestimonialSectionProps) {
  return (
    <section className={`testimonial-section ${bgColorClass}`}>
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="margin-bottom">
              <div className={isCarousel ? "" : "margin-medium"}>
                <div className="max-width-large align-center">
                  <div className="testimonial_component">
                    <div className="margin-vertical min-testimonial-height">
                      <div className="margin-bottom margin-medium">
                        <div className="heading-style-h5">
                          &quot;{quote}&quot;
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_client-image-wrapper">
                      <ContentfulImage
                        src={image}
                        sizes="(max-width: 767px) 90vw, 43vw"
                        alt={name}
                        className="testimonial_client-image"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="margin-bottom">
                      <p className="text-weight-semibold">
                        {name}
                        <br />
                      </p>
                      <p>{title}</p>
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
  );
}

import StaticImage from "@/components/static-image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function TestimonialSection({
  quote,
  name,
  title,
  image,
  imageFallback,
}: {
  quote: string;
  name: string;
  title: string;
  image: StaticImport;
  imageFallback: StaticImport;
}) {
  return (
    <section className="testimonial-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="margin-bottom">
              <div className="margin-medium">
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
                      <StaticImage
                        src={image}
                        srcfallback={imageFallback}
                        sizes="(max-width: 767px) 90vw, 43vw"
                        alt={name}
                        className="testimonial_client-image"
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

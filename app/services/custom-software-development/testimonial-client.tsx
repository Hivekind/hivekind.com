import StaticImage from "@/components/static-image";

import tonyJones from "@/public/images/tony-jones.webp";
import tonyJonesFallback from "@/public/images/tony-jones.jpeg";

import jayasimhanMasilamani from "@/public/images/jayasimhan-masilamani.webp";
import jayasimhanMasilamaniFallback from "@/public/images/jayasimhan-masilamani.jpg";

export default function TestimonialClient() {
  return (
    <>
      <div className="staff-testimonial_content">
        <div className="margin-vertical margin-medium">
          <div className="heading-style-h6">
            &quot;New ad engine was delivered, very fast (10&#x27;s of ms),
            functional, extendable, maintainable, and testable. They have very
            good, experienced developers.&quot;
          </div>
        </div>
        <div className="testimonial_staff">
          <div className="staff-testimonial_image-wrapper">
            <StaticImage
              src={tonyJones}
              srcfallback={tonyJonesFallback}
              alt="Tony Jones"
              className="testimonial_staff-image"
            />
          </div>
          <div className="testimonial_staff-info">
            <p className="text-weight-semibold">
              <strong>Anthony Jones</strong>
            </p>
            <p>VP of Engineering, Avvo</p>
          </div>
        </div>
      </div>
      <div className="staff-testimonial_content">
        <div className="margin-vertical margin-medium">
          <div className="heading-style-h6">
            &quot;They bring an ownership mindset to their projects and take
            pride in shipping. They follow a very well-defined development
            process and stick to it.&quot;
          </div>
        </div>
        <div className="testimonial_staff">
          <div className="staff-testimonial_image-wrapper">
            <StaticImage
              src={jayasimhanMasilamani}
              srcfallback={jayasimhanMasilamaniFallback}
              alt="Jayasimhan Masilamani"
              className="testimonial_staff-image"
            />
          </div>
          <div className="testimonial_staff-info">
            <p className="text-weight-semibold">
              <strong>Jayasimhan Masilamani</strong>
            </p>
            <p>VP of Technology, Nolo</p>
          </div>
        </div>
      </div>
    </>
  );
}

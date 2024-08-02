import StaticImage from "@/components/static-image";

import yanaRadenska from "@/public/images/yana-radenska.webp";
import yanaRadenskaFallback from "@/public/images/yana-radenska.jpg";

import tamannaPatel from "@/public/images/tamanna-patel.webp";
import tamannaPatelFallback from "@/public/images/tamanna-patel.jpg";

export default function TestimonialStaff() {
  return (
    <>
      <div className="staff-testimonial_content">
        <div className="margin-vertical margin-medium">
          <div className="heading-style-h6">
            &quot;Words cannot describe what a wonderful group of people you
            are, and how much I&#x27;ve enjoyed working and interacting with
            y&#x27;all, even those folks I&#x27;ve never met in person. I&#x27;m
            so honored to have had the chance to get to know you all.&quot;
          </div>
        </div>
        <div className="testimonial_staff">
          <div className="staff-testimonial_image-wrapper">
            <StaticImage
              src={yanaRadenska}
              srcfallback={yanaRadenskaFallback}
              sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"
              alt="Yana Radenska"
              className="testimonial_staff-image"
            />
          </div>
          <div className="testimonial_staff-info">
            <p className="text-weight-semibold">
              <strong>Yana Radenska</strong>
            </p>
            <p>Former Software Engineer, Avvo</p>
          </div>
        </div>
      </div>
      <div className="staff-testimonial_content">
        <div className="margin-vertical margin-medium">
          <div className="heading-style-h6">
            &quot;I feel that you have all been such wonderful
            colleagues/friends and I&#x27;m just grateful to have met you all
            and had lunches, dinners and good laughs. Everyone at the company is
            honestly a real gem. Rare to find a genuinely good group of people
            such as yourselves.&quot;
          </div>
        </div>
        <div className="testimonial_staff">
          <div className="staff-testimonial_image-wrapper">
            <StaticImage
              src={tamannaPatel}
              srcfallback={tamannaPatelFallback}
              sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"
              alt="Tamanna Patel"
              className="testimonial_staff-image"
            />
          </div>
          <div className="testimonial_staff-info">
            <p className="text-weight-semibold">
              <strong>Tamanna Patel</strong>
            </p>
            <p>Former Product Manager, EssayJack</p>
          </div>
        </div>
      </div>
    </>
  );
}

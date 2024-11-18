import CheckInCircleInvertedSvg from "./svgs/check-in-circle-inverted";

interface TimelineStepProps {
  title: string;
  body: string;
}

export default function TimelineStep({ title, body }: TimelineStepProps) {
  return (
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
            <h3 className="text-size-large">{title}</h3>
          </div>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}

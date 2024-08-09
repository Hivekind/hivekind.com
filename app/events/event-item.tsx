import StaticImage from "@/components/static-image";

import rubyKlLogo from "@/public/images/ruby-kl-logo.webp";
import rubyKlLogoFallback from "@/public/images/ruby-kl-logo.jpg";

interface AgendaProps {
  time: string;
  details: string;
}

interface EventItemProps {
  title: string;
  date: string;
  recordingUrl: string;
  agendas: AgendaProps[];
}

const AgendaItem = ({ time, details }: AgendaProps) => {
  return (
    <div className="agenda-item">
      <div className="agenda-time">
        <div>{time}</div>
      </div>
      <div className="agenda-details">
        <div>{details}</div>
      </div>
    </div>
  );
};

const EventItem = ({ title, date, recordingUrl, agendas }: EventItemProps) => {
  return (
    <div className="event_item">
      <div className="event_image-wrapper">
        <div className="ruby-tuesdays">
          <StaticImage
            src={rubyKlLogo}
            srcfallback={rubyKlLogoFallback}
            priority={true}
            sizes="90vw"
            alt="Ruby KL logo"
            style={{ height: "auto" }}
            className="ruby_tuesdays-image"
          />
        </div>
      </div>
      <div className="event_item-content">
        <div className="event_item-content-left">
          <div className="event_item-content-top">
            <div className="event_title">
              <div className="heading-style-h5">{title}</div>
            </div>
            <div className="event_date-wrapper">
              <div className="text-size-small">{date}</div>
            </div>
          </div>
          <div className="event_item-content-details">
            <div className="event-agenda">
              {agendas.map((agenda, index) => (
                <AgendaItem
                  key={index}
                  time={agenda.time}
                  details={agenda.details}
                />
              ))}
            </div>
          </div>
        </div>
        <a
          href={recordingUrl}
          target="_blank"
          className="button is-event w-button"
        >
          Watch Recording
        </a>
      </div>
    </div>
  );
};

export default EventItem;

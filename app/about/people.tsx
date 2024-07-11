import React from "react";

interface PeopleProps {
  name: string;
  position: string;
  imgFileName: string;
  imgFileType?: string;
  linkedin?: string | undefined;
  x?: string | undefined;
  instagram?: string | undefined;
  facebook?: string | undefined;
  github?: string | undefined;
}

const getLinkedinSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
      fill="CurrentColor"
    />
  </svg>
);

const getXSvg = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
      fill="CurrentColor"
    />
  </svg>
);

const getInstagramSvg = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
      fill="CurrentColor"
    />
  </svg>
);

const getFacebookSvg = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
      fill="CurrentColor"
    />
  </svg>
);

const getGithubSvg = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.1779 2C6.54978 2 2 6.58333 2 12.2535C2 16.786 4.91521 20.6226 8.95936 21.9806C9.46499 22.0826 9.6502 21.76 9.6502 21.4885C9.6502 21.2507 9.63353 20.436 9.63353 19.5871C6.80228 20.1983 6.2127 18.3647 6.2127 18.3647C5.7577 17.1764 5.08354 16.871 5.08354 16.871C4.15687 16.2429 5.15104 16.2429 5.15104 16.2429C6.17895 16.3108 6.71832 17.2954 6.71832 17.2954C7.62811 18.8571 9.09415 18.4157 9.68394 18.1441C9.76811 17.4821 10.0379 17.0238 10.3244 16.7691C8.06624 16.5314 5.69042 15.6488 5.69042 11.7102C5.69042 10.5898 6.09458 9.67311 6.73499 8.9602C6.63395 8.70561 6.27999 7.65291 6.83625 6.24395C6.83625 6.24395 7.69561 5.97228 9.63332 7.29645C10.4629 7.072 11.3185 6.95782 12.1779 6.95687C13.0373 6.95687 13.9133 7.07582 14.7223 7.29645C16.6602 5.97228 17.5195 6.24395 17.5195 6.24395C18.0759 7.65291 17.7216 8.70561 17.6206 8.9602C18.2779 9.67311 18.6654 10.5898 18.6654 11.7102C18.6654 15.6488 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6704C14.7054 20.0454 14.6888 21.149 14.6888 21.4883C14.6888 21.76 14.8742 22.0826 15.3795 21.9807C19.4237 20.6224 22.339 16.786 22.339 12.2535C22.3556 6.58333 17.7892 2 12.1779 2Z"
      fill="CurrentColor"
    />
  </svg>
);

const renderSocialLink = (url: string | undefined, getSvg: () => JSX.Element) =>
  url && (
    <a href={url} target={"_blank"} className={`social-link w-inline-block`}>
      <div className="social-icon w-embed">{getSvg()}</div>
    </a>
  );

const People = ({
  name,
  position,
  imgFileName,
  linkedin,
  x,
  instagram,
  facebook,
  github,
}: PeopleProps) => {
  return (
    <div role="listitem" className="w-dyn-item">
      <div className="team_item">
        <div className="margin-bottom margin-small">
          <div className="team_image-wrapper">
            <img
              alt={name}
              loading="lazy"
              src={imgFileName}
              sizes="(max-width: 991px) 300px, 280px"
              className="team_image"
            />
          </div>
        </div>
        <div>
          <div className="text-size-large text-weight-semibold text-align-center">
            {name}
          </div>
          <div className="text-size-medium text-align-center">{position}</div>
          <div className="w-layout-grid team_social">
            {renderSocialLink(linkedin, getLinkedinSvg)}
            {renderSocialLink(x, getXSvg)}
            {renderSocialLink(instagram, getInstagramSvg)}
            {renderSocialLink(facebook, getFacebookSvg)}
            {renderSocialLink(github, getGithubSvg)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;

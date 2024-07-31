import React from "react";
import CustomImage from "@/components/custom-image";
import LinkedinSvg from "@/components/svgs/linkedin-svg";
import XSvg from "@/components/svgs/x-svg";
import InstagramSvg from "@/components/svgs/instagram-svg";
import FacebookSvg from "@/components/svgs/facebook-svg";
import GithubSvg from "@/components/svgs/github-svg";

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

interface SocialLinkProps {
  url: string | undefined;
  type: string;
}

const SocialLink = ({ url, type }: SocialLinkProps) => {
  if (!url) {
    return null;
  }

  const renderIcon = () => {
    switch (type) {
      case "linkedin":
        return <LinkedinSvg />;
      case "x":
        return <XSvg />;
      case "instagram":
        return <InstagramSvg />;
      case "facebook":
        return <FacebookSvg />;
      case "github":
        return <GithubSvg />;
      default:
        return null;
    }
  };

  return (
    <a href={url} target={"_blank"} className={`social-link w-inline-block`}>
      <div className="social-icon w-embed">{renderIcon()}</div>
    </a>
  );
};

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
            <CustomImage
              src={imgFileName}
              loading="lazy"
              sizes="(max-width: 479px) 100vw, 90vw"
              width={300}
              height={300}
              alt={name}
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
            <SocialLink url={linkedin} type="linkedin" />
            <SocialLink url={x} type="x" />
            <SocialLink url={instagram} type="instagram" />
            <SocialLink url={facebook} type="facebook" />
            <SocialLink url={github} type="github" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;

import React from "react";
import ContactButton from "./contact-button";
import "@/styles/header.css";

interface HeaderProps {
  title: string;
  description: string;
  paddingStyle?: string;
  showContactButton?: boolean;
  cta?: string;
  children?: React.ReactNode;
}

const Header = ({
  title,
  description,
  paddingStyle,
  showContactButton = true,
  cta,
  children,
}: HeaderProps) => {
  return (
    <header className="header-section">
      <div className="padding-global">
        <div className="container-large">
          <div
            className={paddingStyle ? paddingStyle : "padding-section-large"}
          >
            <div className="header_component">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div className="max-width-xlarge">
                    <div className="margin-bottom margin-small">
                      <h1>{title}</h1>
                    </div>
                    <p className="text-size-medium">{description}</p>
                    {showContactButton && <ContactButton cta={cta} />}
                  </div>
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

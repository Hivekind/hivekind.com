import React from "react";

interface ContactButtonProps {
  isCenter?: boolean;
  cta?: string;
}

const ContactButton = ({ isCenter = true, cta }: ContactButtonProps) => {
  const centerStyle = isCenter ? "is-center" : "";

  return (
    <div className="margin-top margin-medium">
      <div className={`button-group ${centerStyle}`}>
        <a href="/contact" className="button w-button">
          {cta || "Schedule a call"}
        </a>
      </div>
    </div>
  );
};

export default ContactButton;

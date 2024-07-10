import React from 'react';

interface ContactButtonProps {
  isCenter: boolean;
}

const ContactButton = ({ isCenter = true }: ContactButtonProps) => {
  const centerStyle = isCenter ? 'is-center' : '';

  return (
    <div className="margin-top margin-medium">
      <div className={`button-group ${centerStyle}`}>
        <a href="/contact" className="button w-button">
          Schedule a call
        </a>
      </div>
    </div>
  )
};

export default ContactButton;
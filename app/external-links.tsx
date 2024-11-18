"use client";
import { useEffect } from "react";

const ExternalLinks = () => {
  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      if (link.hostname !== window.location.hostname) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer"); // For security
      }
    });
  }, []);

  return null;
};

export default ExternalLinks;

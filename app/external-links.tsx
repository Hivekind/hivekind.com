"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const ExternalLinks = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = () => {
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        if (link.hostname !== window.location.hostname) {
          link.setAttribute("target", "_blank");
          link.setAttribute("rel", "noopener noreferrer"); // For security
        }
      });
    };

    handleRouteChange();
  }, [pathname, searchParams]);

  return null;
};

export default ExternalLinks;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/nav-bar.css";
import StaticImage from "@/components/static-image";

import hkLogo from "@/public/images/hk-logo.webp";
import hkLogoFallback from "@/public/images/hk-logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const isMenuOpenRef = useRef(isMenuOpen);
  const pathname = usePathname();

  const toggleMenu = () => {
    if (overlayRef.current) {
      if (isMenuOpen) {
        // Close Mobile Menu
        setIsCollapsing(true);

        overlayRef.current.style.display = "block";
        overlayRef.current.style.height = `${window.innerHeight}px`;

        requestAnimationFrame(() => {
          if (overlayRef.current) {
            overlayRef.current.style.height = "0";
          }
        });

        setTimeout(() => {
          if (overlayRef.current) {
            overlayRef.current.style.display = "none";
            setIsCollapsing(false);
          }
        }, 400); // duration of the closing animation in CSS: transition: height 0.4s ease-out;
      } else {
        // Open Mobile Menu
        overlayRef.current.style.display = "block";
        overlayRef.current.style.height = "0";

        requestAnimationFrame(() => {
          if (overlayRef.current) {
            overlayRef.current.style.height = `${window.innerHeight}px`;
          }
        });
      }

      setIsMenuOpen(!isMenuOpen);
    }
  };

  const closeOverlay = () => {
    if (overlayRef.current) {
      overlayRef.current.style.height = "0";
      overlayRef.current.style.display = "none";
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && isMenuOpenRef.current) {
        closeOverlay();
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Update the ref value whenever isMenuOpen changes
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    // Close mobile menu when pathname changes
    closeOverlay();
  }, [pathname]);

  const isCurrent = (path: string) => {
    return pathname === path ? "w--current" : "";
  };

  return (
    <div className="navbar_component w-nav">
      <div className="navbar_container">
        <Link
          href="/"
          aria-label="home"
          className={`navbar_logo-link w-nav-brand ${isCurrent("/")}`}
        >
          <StaticImage
            src={hkLogo}
            srcfallback={hkLogoFallback}
            sizes="(max-width: 767px) 90vw, 43vw"
            style={{ width: 180, height: "auto" }}
            alt="Hivekind text logo"
            className="navbar_logo"
          />
        </Link>

        {!isMenuOpen && (
          <nav
            role="navigation"
            className="navbar_menu is-page-height-tablet w-nav-menu self-center"
          >
            <Link
              href="/services"
              className={`navbar_link w-nav-link ${isCurrent("/services")}`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`navbar_link w-nav-link ${isCurrent("/about")}`}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={`navbar_link w-nav-link ${isCurrent("/blog")}`}
            >
              Blog
            </Link>
          </nav>
        )}

        <div className="navbar_button-wrapper self-end">
          <Link href="/contact" className="button is-navbar-button w-button">
            Let&#x27;s talk
          </Link>

          <div
            className={`navbar_menu-button w-nav-button ${isMenuOpen ? "w--open" : ""
              }`}
            aria-label="menu"
            onClick={toggleMenu}
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
          >
            <div className="menu-icon2">
              <div
                className={`menuIcon2Line menu-icon2_line-top ${isMenuOpen ? "open" : ""
                  }`}
              ></div>
              <div
                className={`menuIcon2Line menu-icon2_line-middle ${isMenuOpen ? "open" : ""
                  }`}
              >
                <div className="menu-icon_line-middle-inner"></div>
              </div>
              <div
                className={`menuIcon2Line menu-icon2_line-bottom ${isMenuOpen ? "open" : ""
                  }`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-nav-overlay ${isCollapsing ? "collapsing" : ""}`}
        ref={overlayRef}
      >
        <nav
          role="navigation"
          className="navbar_menu is-page-height-tablet w-nav-menu overlay-content"
          style={{ display: "block" }}
        >
          <Link
            href="/services"
            className={`navbar_link w-nav-link w--nav-link-open ${isCurrent(
              "/services"
            )}`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`navbar_link w-nav-link w--nav-link-open ${isCurrent(
              "/about"
            )}`}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`navbar_link w-nav-link w--nav-link-open ${isCurrent(
              "/blog"
            )}`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="button is-navbar-button is-in-menu w-button"
          >
            Let&#x27;s talk
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

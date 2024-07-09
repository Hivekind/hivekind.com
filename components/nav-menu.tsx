import React from 'react';

const NavMenu = () => {
  return (
    <div
      data-animation="default"
      className="navbar_component w-nav"
      data-easing2="ease"
      fs-scrolldisable-element="smart-nav"
      data-easing="ease"
      data-collapse="medium"
      data-w-id="bd7d495b-092f-7876-cf7f-842930cf6650"
      role="banner"
      data-duration="400"
    >
      <div className="navbar_container">
        <a
          href="/"
          aria-current="page"
          className="navbar_logo-link w-nav-brand w--current"
        >
          <img
            src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6389296caf38d7a00b252585_hk-logo.png"
            loading="lazy"
            alt="Hivekind text logo"
            className="navbar_logo"
          />
        </a>
        <nav
          role="navigation"
          id="w-node-bd7d495b-092f-7876-cf7f-842930cf6654-30cf6650"
          className="navbar_menu is-page-height-tablet w-nav-menu"
        >
          <a href="/work" className="navbar_link w-nav-link">
            Work
          </a>
          <a href="/services" className="navbar_link w-nav-link">
            Services
          </a>
          <a href="/about" className="navbar_link w-nav-link">
            About
          </a>
          <a href="/blog" className="navbar_link w-nav-link">
            Blog
          </a>
          <a
            href="/contact"
            className="button is-navbar-button is-in-menu w-button"
          >
            Let&#x27;s talk
          </a>
        </nav>
        <div
          id="w-node-bd7d495b-092f-7876-cf7f-842930cf665d-30cf6650"
          className="navbar_button-wrapper"
        >
          <a href="/contact" className="button is-navbar-button w-button">
            Let&#x27;s talk
          </a>
          <div className="navbar_menu-button w-nav-button">
            <div className="menu-icon2">
              <div className="menu-icon2_line-top"></div>
              <div className="menu-icon2_line-middle">
                <div className="menu-icon_line-middle-inner"></div>
              </div>
              <div className="menu-icon2_line-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;

import type { ReactElement } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import "@/styles/globals.css";
import "@/styles/site.css";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Page Not Found",
};

function NotFound() {
  return (
    <main className="main-wrapper">
      <header className="header-section">
        <div className="padding-global">
          <div className="container-medium">
            <div className="padding-section-large">
              <div className="w-layout-grid lost_component">
                <div className="lost_content">
                  <div className="margin-bottom margin-small">
                    <h1 className="sans-serif-font">Lost?</h1>
                  </div>
                  <p className="text-size-medium">
                    Don't worry, it's just the internet playing hide and seek
                    with you!
                  </p>
                  <div className="margin-top margin-medium">
                    <div className="button-group">
                      <Link href="/" className="button w-button">
                        Let's go home
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bee_image-wrapper">
                  <Image
                    src="/bee.jpg"
                    width="500"
                    height="800"
                    loading="eager"
                    sizes="(max-width: 1137px) 90vw, 1024px"
                    alt="404 bee"
                    className="bee_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}

NotFound.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default NotFound;

import type { ReactElement } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { lato } from "@/fonts";

import "@/styles/globals.css";
import "@/styles/site.css";
import "@/styles/not-found.css";

import StaticImage from "@/components/static-image";
import bee from "@/public/images/404-bee.webp";
import beeFallback from "@/public/images/404-bee.jpg";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Page Not Found",
};

function NotFound() {
  return (
    <main className={lato.className}>
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
                    Don&apos;t worry, it&apos;s just the internet playing hide
                    and seek with you!
                  </p>
                  <div className="margin-top margin-medium">
                    <div className="button-group">
                      <Link href="/" className="button w-button">
                        Let&apos;s go home
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <StaticImage
                    src={bee}
                    srcfallback={beeFallback}
                    priority
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

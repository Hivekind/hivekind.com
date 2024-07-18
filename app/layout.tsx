import "@/styles/globals.css";
import "@/styles/site.css";
import Script from "next/script";
import NavMenu from "@/components/nav-menu";
import Footer from "@/components/footer";

import { getPathnameFromState } from "@/lib/utils";
import type { Metadata, ResolvingMetadata } from "next";
import { getByField, imageFieldType } from "@/lib/contentfulApi";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// note: params and searchParams are unused; however they need to be
// there un order to force this function to be different per page
export async function generateMetadata(
  { params, searchParams }: Props,
  state: ResolvingMetadata
): Promise<Metadata> {
  const pathname = getPathnameFromState(state);
  const meta = await getByField({
    contentType: "staticPages",
    fields: { "fields.path[in]": pathname },
  });

  const { seoTitle, seoDescription, ogImage } = meta?.fields || {};
  const images = [(ogImage as imageFieldType)?.fields?.file?.url];

  return {
    metadataBase: new URL("https://hivekind.com"),
    title: seoTitle?.toString(),
    description: seoDescription?.toString(),
    openGraph: {
      images,
      url: `https://hivekind.com${pathname}`,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="w-mod-js w-mod-ix wf-lato-n4-active wf-lato-n7-active wf-merriweather-n4-active wf-lato-n1-active wf-lato-i1-active wf-lato-n3-active wf-lato-i3-active wf-lato-i4-active wf-lato-i7-active wf-lato-n9-active wf-lato-i9-active wf-merriweather-n3-active wf-merriweather-i3-active wf-merriweather-i4-active wf-merriweather-n7-active wf-merriweather-i7-active wf-merriweather-n9-active wf-merriweather-i9-active wf-active"
    >
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic|Merriweather:300,300italic,400,400italic,700,700italic,900,900italic&display=swap"
          rel="stylesheet"
        />

        {/* Iubenda scripts */}
        <Script id="iubenda-init-script" strategy="beforeInteractive">
          {`
              var _iub = _iub || {};
              _iub.cons_instructions = _iub.cons_instructions || [];
              _iub.cons_instructions.push(["init", {api_key: "gJPUMsanPG2EyTmoWOJ0BWn7J6MdgVLw"}]);
          `}
        </Script>

        <Script id="iubenda-config-script" strategy="beforeInteractive">
          {`
              var _iub = _iub || {};
              _iub.csConfiguration = {
                logLevel: "debug",
                localConsentDomain: "hivekind-com.pages.dev",
                "enableRemoteConsent":true,
                "askConsentAtCookiePolicyUpdate":true,
                "enableFadp":true,
                "enableLgpd":true,
                "fadpApplies":true,
                "floatingPreferencesButtonDisplay":"bottom-right",
                "lang":"en",
                "perPurposeConsent":true,
                "siteId":3286427,
                "whitelabel":false,
                "cookiePolicyId":25742500,
                "banner": {
                  "acceptButtonCaptionColor":"#FFFFFF",
                  "acceptButtonColor":"#E50044",
                  "acceptButtonDisplay":true,
                  "backgroundColor":"#FFFFFF",
                  "backgroundOverlay":true,
                  "closeButtonDisplay":false,
                  "customizeButtonColor":"#212121",
                  "customizeButtonDisplay":true,
                  "explicitWithdrawal":true,
                  "listPurposes":true,
                  "logo":null,
                  "linksColor":"#000000",
                  "position":"float-center",
                  "rejectButtonColor":"#E50044",
                  "rejectButtonDisplay":true,
                  "showPurposesToggles":true,
                  "textColor":"#000000",
                  "acceptButtonCaption":"Accept all",
                  "content": 'When you click "Accept all", you consent to Hivekind Sdn Bhd placing cookies on your device. These are necessary to enhance site navigation, analyze site usage, and assist us in our marketing efforts. Learn more by clicking "Cookie Settings".',
                  "customizeButtonCaption":"Cookie Settings",
                  "rejectButtonCaption":"Reject all"
                }
              };
          `}
        </Script>

        <Script
          src="https://cdn.iubenda.com/iubenda.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="https://cdn.iubenda.com/cons/iubenda_cons.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="https://cs.iubenda.com/autoblocking/3286427.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          strategy="afterInteractive"
        ></Script>

        <link
          href="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/638d78d32e5f78049870b13d_favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6387e8003a75077830ecb173_webclip.png"
          rel="apple-touch-icon"
        />
        <link href="https://hivekind.com/" rel="canonical" />
      </head>

      <body>
        <div className="page-wrapper">
          <NavMenu />
          {children}
        </div>

        <Footer />

        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6347cb105849aecae0fd4ed8"
          strategy="beforeInteractive"
        />
        <Script src="scripts/webflow.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

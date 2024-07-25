import ContactUsSection from "@/components/contact-us-section";
import ShareWrapper from "@/components/share-wrapper";
import { getAllPosts, getBySlug } from "@/lib/contentfulApi";
import { markdownParser, generateToc } from "@/lib/markdownParser";
import Image from "next/image";
import { TocLinkWrapper } from "@/components/toc-link-wrapper";

import { Metadata } from "next";
import CustomImage from "@/components/custom-image";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { post } = await getBySlug({
    contentType: "work",
    slug: params.slug ?? "",
  });

  const { seoTitle, seoDescription, ogImage } = post.fields;
  const images = [ogImage?.fields.file.url].filter(Boolean) as string[];

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      images,
      url: `/work/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const { posts } = await getAllPosts({ contentType: "work" });
  const slugs = posts.map(({ fields }) => ({
    slug: fields.slug,
  }));

  return slugs;
}

export default async function WorkPage({
  params,
}: {
  params: { slug: string; postSummary: string };
}) {
  const { post } = await getBySlug({
    contentType: "work",
    slug: params.slug ?? "",
  });

  const caseBody = markdownParser(`${post.fields.caseBody}`);
  const toc = generateToc(`${post.fields.caseBody}`);

  return (
    <main className="main-wrapper">
      <div className="section-blog background-color-white">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="blog-topic-wrapper">
                <div className="blog_topic">
                  <div className="text-size-small text-weight-semibold">
                    {post.fields.client}
                  </div>
                </div>
              </div>
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <div className="margin-bottom margin-small">
                    <h1>{post.fields.name}</h1>
                  </div>
                  <p className="text-size-medium">{post.fields.caseSummary}</p>
                </div>
              </div>
              <div className="blog-image padding-vertical padding-large">
                <CustomImage
                  src={`${post.fields.mainImage?.fields.file.url}`}
                  alt={`${post.fields.mainImageAltText || post.fields.name}`}
                  width={1600}
                  height={667}
                  className="image"
                  loading="lazy"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <header className="section_content">
                <div className="container-medium">
                  <div className="post_content-wrapper">
                    <div className="fs-toc_sidebar">
                      <h2 className="text-size-medium">Table of Contents</h2>
                      <div className="fs-toc_link-content">
                        {toc.map(
                          ({
                            text,
                            anchor,
                          }: {
                            text: string;
                            anchor: string;
                          }) => (
                            <TocLinkWrapper
                              text={text}
                              anchor={anchor}
                              key={text}
                            />
                          )
                        )}
                      </div>
                      <div className="separator"></div>
                      <ShareWrapper
                        url={`https://hivekind.com/blog/${post.fields.slug}`}
                      />
                    </div>
                    <div className="fs-toc_rich-text">
                      <div
                        fs-toc-element="contents"
                        className="fs-toc_richtext text-rich-text w-richtext"
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: caseBody,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
      <ContactUsSection className="background-color-gray" />
    </main>
  );
}

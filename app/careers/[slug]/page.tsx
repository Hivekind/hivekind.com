import ShareWrapper from "@/components/share-wrapper";
import { getAllPosts, getBySlug } from "@/lib/contentfulApi";
import { markdownParser } from "@/lib/markdownParser";
import { Metadata } from "next";
import Mustache from "mustache";
import "@/styles/careers.css";
import ArrowSvg from "@/components/svgs/arrow-svg";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Handle the special no-positions route
  if (params.slug === 'no-positions-available') {
    return {
      title: "No Open Positions | Careers at HiveKind",
    };
  }

  const { post } = await getBySlug({
    contentType: "job",
    slug: params.slug ?? "",
  });

  const { title } = post.fields;

  return {
    title: title + " | Careers at HiveKind",
  };
}

export async function generateStaticParams() {
  const { posts } = await getAllPosts({ contentType: "job" });

  if (!posts || posts.length === 0) {
    // Return a hardcoded path when no posts exist
    return [{ slug: 'no-positions-available' }];
  }

  const slugs = posts.map(({ fields }) => ({
    slug: fields.slug,
  }));

  return slugs;
}

const NoPositionsMessage = () => (
  <main className="main-wrapper">
    <div className="section-job">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="padding-global">
              <div className="container-small">
                <p>There are no open positions available at the moment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default async function PositionPage({
  params,
}: {
  params: { slug: string };
}) {
  // If it's our hardcoded "no positions" route
  if (params.slug === 'no-positions-available') {
    return <NoPositionsMessage />;
  }

  const { post } = await getBySlug({
    contentType: "job",
    slug: params.slug ?? "",
    fields: {
      "fields.validThrough[gte]": new Date().toISOString(),
    },
  });

  if (!post) {
    return <NoPositionsMessage />;
  }

  const jsonLdData = {
    currentUrl: new URL(
      `/careers/${params.slug}`,
      "https://hivekind.com"
    ).toString(),
    seoTitle: post.fields.seoTitle,
    seoDescription: post.fields.seoDescription,
    ogImage: post.fields.ogImage?.fields.file.url,
    datePosted: post.fields.datePosted,
    validThrough: post.fields.validThrough,
  };

  const jsonLdTemplate = JSON.stringify(post.fields.jsonLd);

  const jobDescription = markdownParser(`${post.fields.jobDescription}`);

  return (
    <main className="main-wrapper">
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: Mustache.render(jsonLdTemplate || "", jsonLdData),
          }}
        />
      </section>
      <div className="section-job">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="padding-global">
                <div className="container-small">
                  <div className="job-post-content_content-top">
                    <div className="job-post-content_breadcrumb">
                      <a
                        href="/about"
                        className="breadcrumb-link w-inline-block"
                      >
                        <div>About</div>
                      </a>
                      <div className="breadcrumb-divider w-embed">
                        <ArrowSvg />
                      </div>
                      <a
                        href="/careers"
                        className="breadcrumb-link w-inline-block"
                      >
                        <div>Careers</div>
                      </a>
                    </div>
                    <ShareWrapper
                      url={`https://hivekind.com/careers/${params.slug}`}
                    />
                  </div>
                  <div
                    fs-toc-element="contents"
                    className="job-desc-page-rich-text text-rich-text w-richtext"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobDescription,
                      }}
                    ></div>
                  </div>
                  <ShareWrapper
                    url={`https://hivekind.com/careers/${params.slug}`}
                    shareText="Share this job"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

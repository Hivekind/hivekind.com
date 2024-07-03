import Link from "next/link";
import { draftMode } from "next/headers";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { marked } from "marked";

// import MoreStories from "../../more-stories";
// import Avatar from "../../avatar";
import Date from "@/components/Date";
// import CoverImage from "../../cover-image";

import { getAllPosts, getPost } from "@/lib/contentfulApi";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { posts } = await getAllPosts();

  console.log(posts);

  return (
    <div className="container mx-auto px-5">
      <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
      {posts.map(({ fields }) => {
        return (
          <article key={fields.slug}>
            <h2>{fields.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: marked.parse(fields.content),
              }}
            ></div>
          </article>
        );
      })}

      <hr className="border-accent-2 mt-28 mb-24" />
      {/* <MoreStories morePosts={morePosts} /> */}
    </div>
  );
}

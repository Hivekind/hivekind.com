import ListItem from "@/components/list-item";
import { getAllPosts } from "@/lib/contentfulApi";

export default async function FeaturedWork() {
  const featured = await getAllPosts({
    contentType: "work",
    order: ["-fields.order"],
    fields: { "fields.featured": true },
  });

  return (
    <div className="w-dyn-list">
      <div role="list" className="collection-list-3 w-dyn-items">
        {featured.posts.map(({ fields }) => {
          return (
            <ListItem
              key={fields.slug}
              url={`/work/${fields.slug}`}
              imgSrc={`${fields.mainImage?.fields.file.url}`}
              client={`${fields.client}`}
              title={`${fields.name}`}
              description={`${fields.caseSummary}`}
            />
          );
        })}
      </div>
    </div>
  );
}

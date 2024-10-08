import { CardListItem, CardListItemProps } from "./card-list-item";

export type CardListProps = {
  items: CardListItemProps[];
};

export function ThreeCols({ items }: CardListProps) {
  return (
    <div className="featuredblog_list-wrapper w-dyn-list">
      <div role="list" className="featuredblog_list w-dyn-items">
        {items.map((item) => (
          <CardListItem key={item.url} item={item} />
        ))}
      </div>
    </div>
  );
}

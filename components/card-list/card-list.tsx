import { CardListItem, CardListItemProps } from "./card-list-item";

export type CardListProps = {
  cols?: number;
  items: CardListItemProps[];
};

const threeColsClass =
  "grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3";

const twoColsClass =
  "grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-2 md:gap-y-16";

export function CardList({ cols = 3, items }: CardListProps) {
  return (
    <div className="w-dyn-list">
      <div
        role="list"
        className={`${cols >= 3 ? threeColsClass : twoColsClass} w-dyn-items`}
      >
        {items.map((item) => (
          <CardListItem key={item.url} item={item} />
        ))}
      </div>
    </div>
  );
}

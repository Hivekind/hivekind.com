import ListItem from "@/components/list-item";

export default function FeaturedWork() {
  return (
    <div className="w-dyn-list">
      <div role="list" className="collection-list-3 w-dyn-items">
        <ListItem
          url="/work/nolo-willmaker-online-the-expansion-of-an-iconic-desktop-product-to-the-web"
          imgSrc="/images/63c8123ab9aab99e9f2a2c3f_willmaker.png"
          client="Nolo"
          title="Nolo WillMaker Online: Expansion of an Iconic Desktop Product to the Web"
          description="We helped Nolo increase conversion by 70% for their WillMaker product."
        />

        <ListItem
          url="/work/essayjack-journey-from-prototype-to-acquisition"
          imgSrc="/images/6388acbd65306f4c13b60071_essayjack.png"
          client="EssayJack"
          title="EssayJack: Journey from Prototype to Acquisition"
          description="Hivekind provided product management, development and devops services to EssayJack until its eventual acquisition."
        />
      </div>
    </div>
  );
}

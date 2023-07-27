import { featuresData } from "@/data";
import { FeatureCard } from "@/widgets/cards";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
export default function CharacterCarousel() {
  const items = featuresData.map(({ img }) => (
    <FeatureCard key={img} img={img} />
  ));
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <section className="px-4 pt-4 ">
      <div className=" mx-20">
        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> */}
        <AliceCarousel
          mouseTracking
          items={items}
          paddingLeft={50}
          paddingRight={50}
          responsive={responsive}
        />
        {/* </div> */}
      </div>
    </section>
  );
}

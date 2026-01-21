import Hero from './Hero/Hero.jsx'
import Category from './Category.jsx'
import LabelAndScroll from './LabelAndScroll.jsx'
import CardCarousel from './CardCarousel.jsx'
import BlackFriday from './assets/purple-woman.png'
import ExploreCardCarousel  from './ExploreCardCarousel.jsx'
import SpecialDeal from './assets/red-sneakers.jpg'
import Compare from './Compare.jsx'
import { useRef } from "react";

function Home() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <Hero />

      <section className="category my-30 ml-14 mr-0">
        {/* categories omitted for brevity */}

        <LabelAndScroll
          onLeft={scrollLeft}
          onRight={scrollRight}
          label="Top Sales"
        />

        <CardCarousel ref={carouselRef} />
        <LabelAndScroll
          onLeft={scrollLeft}
          onRight={scrollRight}
          label="New Gadget Collection"
        />

        <CardCarousel ref={carouselRef} />
      </section>
      <div className='mb-10 pl-2'>
        <img src={BlackFriday} alt="" className='object-cover w-full' />
      </div>

      <div className='my-20 m-16 md:mx-[7em]'>
        <ExploreCardCarousel/>
      </div>
    </section>
  );
}

export default Home;

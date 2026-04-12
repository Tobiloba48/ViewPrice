import Hero from './Hero/Hero.jsx'
import Category from './Category.jsx'
import LabelAndScroll from './LabelAndScroll.jsx'
import CardCarousel from './CardCarousel.jsx'
import BlackFriday from './assets/purple-woman.png'
import ExploreCardCarousel  from './ExploreCardCarousel.jsx'
import SpecialDeal from './assets/red-sneakers.jpg'
import Compare from './Compare.jsx'
import PriceView from './PriceView.jsx'
import Newsletter from './Newsletter.jsx'
import Footer from './Footer.jsx'
import { useRef } from "react";


function Home() {
  const topSalesRef = useRef(null);
  const newGadgetRef = useRef(null);


  const scrollLeft = (ref) => {
    ref.current.scrollBy({
      left: -ref.current.offsetWidth,
      behavior: "smooth",
    });
    };

    const scrollRight = (ref) => {
      ref.current.scrollBy({
        left: ref.current.offsetWidth,
        behavior: "smooth",
      });
    };


  return (
    <section>
      <Hero />

      <section className="category my-30 ml-14 mx-10">

        <div>
          <LabelAndScroll
            label="Top Sales"
            onLeft={() => scrollLeft(topSalesRef)}
            onRight={() => scrollRight(topSalesRef)}
          />
          <CardCarousel ref={topSalesRef} />
        </div>

        <div>
          <LabelAndScroll
            label="New Gadget Collection"
            onLeft={() => scrollLeft(newGadgetRef)}
            onRight={() => scrollRight(newGadgetRef)}
          />
          <CardCarousel ref={newGadgetRef} />
        </div>

      </section>
      <div className='mb-10 pl-2'>
        <img src={BlackFriday} alt="" className='object-cover w-full' />
      </div>

      <div className='my-20 m-16 md:mx-[7em]'>
        <ExploreCardCarousel/>
      </div>
      <PriceView />
      <Newsletter />
      <Footer />
      
    </section>
  );
}

export default Home;

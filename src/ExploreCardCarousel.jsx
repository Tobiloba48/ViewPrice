import ExploreCard from './ExploreCard.jsx'
import BlackFriday from './assets/black-friday.jpg'
import Computer from './assets/macbook.jpg'

function ExploreCardCarousel(){

   return (
    <div className="relative w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                      gap-3 md:gap-5 lg:gap-10 place-content-center">  
            <ExploreCard  />
            <ExploreCard 
                label="Sneakers Deal" 
                cardImage = {BlackFriday} />
            <ExploreCard />
            <ExploreCard 
                label="Computing Gadget" 
                cardImage = {Computer} />
            <ExploreCard label="Black Friday" />
            <ExploreCard label="5000 Naira Market" />
          
      </div>
    </div>
  );
}

export default ExploreCardCarousel
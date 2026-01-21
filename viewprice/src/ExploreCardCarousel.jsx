import ExploreCard from './ExploreCard.jsx'
import BlackFriday from './assets/black-friday.jpg'
import Computer from './assets/macbook.jpg'

function ExploreCardCarousel(){

   return (
    <div className="relative w-full mx-auto">
      <div className="grid grid-cols-3 gap-10">  
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
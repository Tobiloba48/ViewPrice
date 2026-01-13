import SpecialDeal from './assets/red-sneakers.jpg'

function ExploreCard({label="Clearance Sales", cardImage = SpecialDeal}){
    return(
       <div className='grid grid-cols-3 gap-18'>
         <div className='relative p-0'>
            <img src={cardImage} alt="" className='object-center h-[35em]'/>
            <p className='absolute top-0 left-26 z-2 -translate-x-1/2 translate-y-1/2 
                          font-bold text-3xl text-white'>
                {label}
            </p>
        </div>
         
       </div>
    )
}

export default ExploreCard
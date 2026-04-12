import Headset from './assets/headset.png'
import Love from './assets/love.png'
import Star from './assets/Star 1.png'
import Plus from './assets/plus.png'

function Card ({
        productName = "Product Name",
        product = Headset,
        brandName = "Brand/Vendor Name",
        rating = 4.7,
        isInStock = false,
        price = 0,
        formalPrice = 0
    }){

    return(
       <div className="w-full">

            
            {/* Image Section */}
            <div className='bg-gray-400 place-items-center relative rounded-sm'>
                
                <div className='bg-white rounded-full p-2 place-items-center
                                 absolute top-0 left-10 -translate-x-1/2 translate-y-1/2'>
                    <img src={Love} alt="" />
                </div>

                <img 
                    src={product} 
                    alt={productName} 
                    className='h-[16em] sm:h-[18em] md:h-[22em] object-contain'
                />
            </div>

            {/* Content */}
            <div className='grid grid-cols-2 py-2 gap-2'>

                <div>
                    <h1 className='font-bold text-base sm:text-lg'>
                        {productName}
                    </h1>

                    <p className='text-xs sm:text-sm font-semibold'>
                        {brandName}
                    </p>

                    <div className='flex justify-start gap-1 items-center mt-1'>
                        <img src={Star} alt="" className="w-4 h-4" />
                        <p className='border-r border-black pr-3 text-sm'>
                            {rating}
                        </p>
                        <p className='text-[10px] font-semibold pl-2'>
                            {isInStock ? "In stock" : "Out of stock"}
                        </p>
                    </div>  
                </div>

                <div className='flex justify-end items-center'>
                    <div className='bg-[#F75D02] p-3 sm:p-4 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center'>
                        <img src={Plus} alt="" className='w-5 h-4' />
                    </div>
                </div>

                <div className='flex justify-start gap-2 items-center col-span-2'>
                    <p className='font-bold text-lg sm:text-2xl text-[#F75D02]'>
                        N{price}
                    </p>
                    <p className='line-through font-bold text-[10px] sm:text-xs'>
                        N{formalPrice}
                    </p>
                </div>  

            </div>

            <div>
                <p className='bg-black text-white text-center py-2 font-bold text-sm sm:text-base'>
                    Compare Price
                </p>
            </div>
           
       </div>
    )
}

export default Card

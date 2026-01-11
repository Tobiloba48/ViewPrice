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
       <div className='w-[20em] '>
            <div className='bg-gray-400 place-items-center relative rounded-sm'>
                <div className='bg-white rounded-full p-2 place-items-center
                                 absolute top-0 left-10 z-2 -translate-x-1/2 translate-y-1/2'>
                    <img src={Love} alt="" />
                </div>
                <img src={product} alt={productName} className='h-[22em]' />
            </div>
            <div className='grid grid-cols-2 py-1'>
                <div>
                    <h1 className='font-bold text-lg'>
                        {productName}
                    </h1>
                    <p className='text-sm font-semibold'>{brandName}</p>
                    <div className='flex justify-start gap-1 place-items-center'>
                        <img src={Star} alt="" />
                        <p className='border-r border-black pr-3'>{rating}</p>
                        <p className='text-[10px] font-semibold pl-2 align-middle'>
                            {isInStock ? "In stock" : "Out of stock"}</p>
                    </div>  
                </div>
                <div className='flex justify-end place-items-center'>
                    <div className='bg-[#F75D02] p-4 rounded-full w-12 h-12 place-items-center'>
                    <img src={Plus} alt="" className='w-6 h-4 ' />
                </div>
            </div>
            <div className='flex justify-start gap-2 place-items-center'>
                <p className='font-bold text-2xl text-[#F75D02]'>N{price}</p>
                <p className='text-center line-through font-bold text-[10px]'>N{formalPrice}</p>
            </div>  
        </div>
            <div>
                <p className='bg-black text-white text-center py-2 font-bold'>Compare Price</p>
            </div>
           
       </div>
    )
}

export default Card
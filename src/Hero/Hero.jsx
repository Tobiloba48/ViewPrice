import BackgroundImage from '../assets/beautiful-woman-smilling.jpg'
import Header from '../Header/Header.jsx'
import { useState } from "react";
import Search from '../assets/ion_search.png'

function Hero() {

    const [product, setProduct] = useState("");

    return(
        <div className="relative">
            <Header />

            <section className="relative mt-20 h-screen">
                
                <img 
                    src={BackgroundImage} 
                    alt="" 
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className='absolute inset-0 bg-black/60'></div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
                    
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                        Unlock the Best Deals Today
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg">
                        With our innovative platform, you can effortlessly browse 
                        through a vast array of products, comparing prices from leading retailers.
                    </p>
                </div>

                {/* Search Box */}
                <div className="absolute bottom-0 left-1/2 z-20 w-[95%] sm:w-[90%] md:w-[80%] -translate-x-1/2 translate-y-1/2 text-base sm:text-lg">
                    
                    <div className="flex flex-col md:flex-row items-center gap-4 bg-white px-6 sm:px-8 py-4 rounded-xl shadow-xl">

                        <img src={Search} alt="" className="w-5 h-5" />

                        <input
                            type="search"
                            placeholder="Search Your Favourite Product"
                            className="flex-1 outline-none text-base sm:text-lg w-full"
                        />

                        <select
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                            className="border-t md:border-t-0 md:border-l-2 pt-2 md:pt-0 md:pl-4 pr-4 cursor-pointer outline-none py-2 w-full md:w-auto"
                        >
                            <option value="">All Categories</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Phone">Phone</option>
                            <option value="Headphones">Headphones</option>
                            <option value="TV">TV</option>
                            <option value="Clothes">Clothes</option>
                        </select>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Hero

import BackgroundImage from '../assets/beautiful-woman-smilling.jpg'
import Header from '../Header/Header.jsx'
import { useState } from "react";
import Search from '../assets/ion_search.png'

function Hero() {

    const [product, setProduct] = useState("");
    return(
        <div className="relative">
            <Header />
            <section className="relative mt-10 h-screen">
                <img src={BackgroundImage} alt="" 
                className="absolute inset-0 h-full w-full object-fill"/>

            <div className='absolute inset-0 bg-black/60'>

            </div>
            <div className="relative z-10  h-full place-content-center text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Unlock the Best Deals Today
                </h1>
                <p>
                    With our innovative platform, you can effortlessly browse 
                    through a vast array of products, <br />comparing prices from leading retailers.
                </p>
            </div>
           <div className="absolute bottom-0 left-1/2 z-20 w-[90%] -translate-x-1/2 translate-y-1/2 text-xl ">
                <div className="flex items-center gap-6 bg-white px-10 py-4 rounded-xl shadow-xl">
                    <img src={Search} alt="" />
                    <input
                    type="search"
                    placeholder="Search Your Favourite Product"
                    className="flex-1 outline-none text-xl"
                    />

                    <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="border-l-2 pl-4 pr-5 mr-10 cursor-pointer outline-none py-4"
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


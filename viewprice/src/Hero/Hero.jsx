import BackgroundImage from '../assets/beautiful-woman-smilling.jpg'
import Header from '../Header/Header.jsx'

function Hero() {

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
            <div className='flex justify-between gap-10'>
                <input type="search" placeholder='Search Your Favourite Product' />
                <input type="" />
            </div>
            </section>
        </div>
    )
}

export default Hero


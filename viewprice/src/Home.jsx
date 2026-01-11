import Hero from './Hero/Hero.jsx'
import Health from './assets/health.png'
import Fashion from './assets/cloth.png'
import Sport from './assets/ball.png'
import Computer from './assets/computing.png'
import Sneakers from './assets/sneakers.png'
import Shoe from './assets/shoe.png'
import Phone from './assets/phone.png'
import Category from './Category.jsx'
import Card from './Card.jsx'
import RightArrow from './assets/keyboard_arrow_right_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import LeftArrow from './assets/keyboard_arrow_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import CardCarousel from './CardCarousel.jsx'
function Home() {
    return(
        <section>
            <Hero />
              

            <section className='category my-30 mx-14'>
                <div className='flex justify-between gap-2'>
                    <h1 className='font-bold text-xl px-2 mb-10'>Categories</h1>
                    <a href="#" className='text-amber-600 font-semibold'>view all</a>
                </div>
               <div className='flex justify-around gap-4 '>
                    <Category pic={Health} name="Health and Beauty" />
                    <Category pic={Fashion} name="Fashion" />
                    <Category pic={Sport} name="Sport" />
                    <Category pic={Computer} name="Computing" />
                    <Category pic={Sneakers} name="Sneakers" />
                    <Category pic={Shoe} name="Shoe" />
                    <Category pic={Phone} name="Phone" />
               </div>
               <div className='flex justify-between mb-3'>
                    <p className='font-bold text-xl '>Top Sales</p>
                    <div className='flex justify-end gap-3'>
                        <a href="#" className='bg-amber-300 rounded-full p-2 place-items-center'>
                            <img src={LeftArrow} alt="" />
                        </a>
                    
                        <a href="#" className='bg-amber-300 rounded-full p-2 place-items-center'>
                            <img src={RightArrow} alt="" />
                        </a>
                        
                    </div>
               </div>
               <div className="flex gap-10">
                    <Card  />
                    <Card  />    
                    <Card  />    
                    <Card  />    
                    <Card  />    
               </div>
               <CardCarousel />

            </section>
        </section>
        
    )
}
export default Home
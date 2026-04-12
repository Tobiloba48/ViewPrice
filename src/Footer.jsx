import Whatsapp from './assets/whatsapp_symbol.svg.png'
import X from './assets/x_logo.svg.png'
import Facebook from './assets/facebook_symbol.svg.png'
import Google from './assets/google_symbol.svg.png'
import Instagram from './assets/Instagram.png'
import OrangeViewprice from './assets/OrangeViewprice.png'
import Visa from './assets/visa_inc_logo.svg.png'
import MasterCard from './assets/mastercard.png'
import Flutterwave from './assets/flutterwave_symbol.svg.png'


function Footer (){

    return (
        <section className='text-white bg-[#232323] grid grid-cols-2 lg:grid-cols-4
        md:p-10 p-5 gap-5'>
        <div>
            <img src={OrangeViewprice} alt="" className='pb-4 font-bold'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Doloribus totam possimus laborum.</p>
            <div className='flex gap-1 pt-2'>
                <img src={Visa} alt="" />
                <img src={MasterCard} alt="" />
                <img src={Flutterwave} alt="" />
            </div>
        </div>
        <ol className='text-center'>
            <h2 className='pb-4 font-bold'>PRODUCT</h2>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
        </ol>

        <div>
            <h2 className='pb-4 font-bold'>Earnings</h2>
            <p>Become a vendor <br />Advertise your product <br /> Sell on market</p>
        </div>
        
        <div className=''>
            <h2 className='pb-4 font-bold text-center'>Contact</h2>
            <p>Floyd_Hyatt@hotmail.com <br />100 Lake Road, Fort Dena 93748-2373
            <br /> (520) 363-7288x7389 <br />Belgium</p>
            <div className='flex gap-2 lg:gap-3 pt-2 place-content-start lg:place-content-center'>
                <img src={Whatsapp} alt="" />
                <img src={X} alt="" />
                <img src={Facebook} alt="" />
                <img src={Google} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
    </section>
    )
}

export default Footer
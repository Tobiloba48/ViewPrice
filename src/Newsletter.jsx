

function Newsletter(){
    return(
        <>
         <div className="place-items-center p-10 md:p-16">
                <h2 className="font-bold text-2xl lg:text-4xl text-center pb-2">Subscribe to Newsletter</h2>
                <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Provident dignissimos illo ab delectus dolorem, quasi libero</p>

                <div className="flex gap-2 py-4">
                    <input className="h-5 p-5 w-[70%] bg-gray-300" placeholder="Email Address"
                         type="email" />

                    <button className="bg-black  w-[35%] md:w-[25%]cd vi
                     text-white p-2">Subscribe</button>
                </div>
            </div>   
        </>
    )
}
export default Newsletter
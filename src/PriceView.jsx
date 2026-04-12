

function PriceView(){
    return(
        <section className="flex justify-between bg-[#F75D022E] p-5 md:px-20 md:py-10 mb-2 gap-10">
            
            <div className="align-center hidden lg:flex">
                <div className="bg-white w-90 h-90"></div>
            </div>
            <div className="place-content-center">
                <h2 className="font-bold text-2xl lg:text-4xl pb-2 text-center">Compare Product Prices</h2>
                <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Provident dignissimos illo ab delectus dolorem, quasi libero</p>

                <div className="flex gap-2 py-4">
                    <input className="h-5 p-5 bg-white w-[50%] md:w-[70%]" placeholder="Product Name"
                         type="search" />

                    <button className="bg-black  w-[35%] md:w-[25%]
                     text-white p-2">View Prices</button>
                </div>
            </div>
        </section>
    )
}

export default PriceView
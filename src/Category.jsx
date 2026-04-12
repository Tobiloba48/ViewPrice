
function Category(props){
    return (
        <section className="">
            <div className="box flex justify-between gap-10 items-center
                            border border-gray-200 p-4 rounded-xl font-semibold
                            cursor-pointer bg-white mb-30

                            transition-all duration-300 ease-in-out shadow-sm

                            hover:-translate-y-1
                            hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]
                            hover:bg-[#F75D02] hover:text-white
                        ">
                <img src={props.pic} alt="" className="h-8 w-8 object-fill" />
                <label htmlFor="Health and Beauty">{props.name}</label>   
             </div>
        </section>
    )
}

export default Category
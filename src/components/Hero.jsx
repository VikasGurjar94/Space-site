


function Hero (){

 


    return (
        <>
        <div className="text-white flex relative h-fit flex-col items-center w-full justify-between ">
            <div className="hero1 w-full  items-baseline justify-around flex flex-col gap-10 ">
                <h1 id="orbit1" style={{ marginTop : `170px` }}  className="text-[60px]  uppercase tracking-tight leading-[99%] font-semibold  ">orbit the Earth</h1>
                <h1 id="orbit2" className="md:w-1/2" >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, unde rem mollitia nesciunt labore voluptatum officiis magnam illo id reiciendis necessitatibus facere dignissimos aspernatur, voluptates ab ea. Commodi, maiores dicta. Error fugiat fugit earum delectus veritatis tempora a cupiditate, nam deserunt perferendis quam possimus reprehenderit quibusdam magni saepe velit neque
                </h1>
                <button id="hero-btn" className="w-[150px] h-[40px] hover:ring-1  text-center  text-white text-xl font-semibold bg-blue-600 rounded-2xl   ">Learn More</button>
            </div>
            <img className="w-full z-50  " src="/assets/moon.png" alt="" />
            <div className=" h-[30px] md:h-[40px] lg:h-[60px] w-full z-998 absolute bottom-0 bg-gradient-to-b from-0% from-transparent  to-black  to-90% ">

            </div>

        </div>
        </>
    )
}

export default Hero ;
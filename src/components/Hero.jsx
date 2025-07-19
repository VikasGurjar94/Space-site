

function Hero (){
    return (
        <>
        <div className="text-white  flex flex-col items-center w-[450px] md:w-full h-screen justify-between ">
            <div className="hero1 md:w-[700px] flex flex-col gap-6 self-baseline ">
                <h1 style={{ marginTop : `170px` }} className="text-[60px]  uppercase tracking-tight leading-[99%] font-semibold  ">orbit the <br /> Earth</h1>
                <h1 className="">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, unde rem mollitia nesciunt labore voluptatum officiis magnam illo id reiciendis necessitatibus facere dignissimos aspernatur, voluptates ab ea. Commodi, maiores dicta. Error fugiat fugit earum delectus veritatis tempora a cupiditate, nam deserunt perferendis quam possimus reprehenderit quibusdam magni saepe velit neque?
                </h1>
                <button className="w-[150px] h-[40px] hover:outline-2 hover:w-[155px] text-center  text-white text-xl font-semibold bg-blue-600 rounded-2xl   ">Learn More</button>
            </div>
        <img className="w-[100vw]  " src="/assets/moon.png" alt="" />

        </div>
        </>
    )
}

export default Hero ;
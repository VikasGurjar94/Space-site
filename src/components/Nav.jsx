

function Nav() {
    return (
        <>
            <nav   className=" relative  px-10 h-[10vh] flex justify-between items-center bg-black/50 backdrop:blur  ">
                <div className="cursor-pointer  flex justify-between items-center ">
                    <img
                        className="md:h-[50px] md:w-[50px] h-[30px] w-[30px] " src="/assets/logo.png" alt="logo" />

                    <h1 className="text-white md:text-2xl sm:text-[20px] font-black  ">TCJ-SPACE</h1>
                </div>
                <div className="text-white hidden lg:flex lg:gap-10 lg:text-xl md:flex md:gap-7 md:text-[15px]  ">
                    <a href="#">About</a><a href="#">Space</a><a href="#">Satellite</a><a href="#">Technology</a>
                </div>
                <div className="text-white">
                    <button className="border w-[100px] rounded-lg h-[40px] text-[22px]  ">Log in</button>
                </div>
            </nav>
        </>
    )
}

export default Nav;


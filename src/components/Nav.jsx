

function Nav() {
    return (
        <>
            <nav   className=" fixed  w-full z-999  px-10 h-[10vh] flex justify-between items-center bg-black/10 backdrop-blur-sm  ">
                <div className="cursor-pointer hover:scale-105 flex justify-between items-center ">
                    <img
                        className="md:h-[50px] md:w-[50px] h-[30px] w-[30px] " src="/assets/logo.png" alt="logo" />

                    <h1 className="text-white md:text-2xl sm:text-[20px] font-black  ">TCJ-SPACE</h1>
                </div>
                <div className="text-white hidden lg:flex lg:gap-10 lg:text-xl md:flex md:gap-7 md:text-[15px]  ">
                    <a href="#">About</a><a href="#">Space</a><a href="#">Satellite</a><a href="#">Technology</a>
                </div>
                <div className="text-white">
                    <button className="border hover:bg-blue-700 hover:ring-1 hover:scale-105 w-[80px] font-bold rounded-lg h-[35px] text-[18px]  ">Log in</button>
                </div>
            </nav>
        </>
    )
}

export default Nav;


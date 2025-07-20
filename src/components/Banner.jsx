

function Banner (){

    return (
        <>
            <div className="bg-black bannerBig flex flex-col items-center justify-around gap-15 relative  w-full h-fit ">
                <div className="banner md:flex md:flex-row md:justify-between md:items-center    -amber-50 flex flex-col items-center gap-15 ">
                    <img className=" rounded-lg object-cover  w-[350px]  " src="/assets/satelite1.jpg" />
                    <div className=" text-white flex flex-col  items-start">
                        <h1 className="text-blue-600  text-base">OUR MISSION</h1>
                       <div className="flex flex-col gap-5">
                         <p className="text-[50px] uppercase">RapidCast</p>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, debitis! Tenetur, unde dolor commodi ut possimus repellat aliquid Rerum, debitis! Tenetur, unde dolor commodi ut possimus repellat aliquid.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis impedit aut quo fugit veniam quisquam, possimus neque doloribus amet voluptatum. Maiores, vel vero modi aspernatur odio asperiores illum Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni repellat ea totam delectus recusandae dolor ex quae obcaecati veritatis.
                        </p>
                       </div>
                    </div>
                </div>
                <div className="banner md:flex md:flex-row md:justify-between md:items-center    flex flex-col items-center gap-15 ">
                    <div className=" text-white flex flex-col  items-start">
                        <h1 className="text-blue-600  text-base">OUR MISSION</h1>
                       <div className="flex flex-col gap-5">
                         <p className="text-[50px] uppercase">RapidCast</p>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, debitis! Tenetur, unde dolor commodi ut possimus repellat aliquid Rerum, debitis! Tenetur, unde dolor commodi ut possimus repellat aliquid.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis impedit aut quo fugit veniam quisquam, possimus neque doloribus amet voluptatum. Maiores, vel vero modi aspernatur odio asperiores illum Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni repellat ea totam delectus recusandae dolor ex quae obcaecati veritatis.
                        </p>
                       </div>
                    </div>
                    <img className=" rounded-lg object-cover  w-[350px]  " src="/assets/satelite2.jpg" />
                </div>
            </div>
        </>
    )
}

export default Banner ; 
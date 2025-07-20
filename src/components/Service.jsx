import { FaReact } from "react-icons/fa";
import { BsRocketFill } from "react-icons/bs";
import { FaSatellite } from "react-icons/fa";


function Service() {



    return (
        <>
            <div  className=" bg-black  h-[110vh] relative  w-full  ">
                <img src="/assets/wave.gif" className="absolute h-[650px] z-10 object-cover top-0 w-full  " />
                <div id="service" className="absolute  h-[750px] flex justify-around items-center flex-col md:flex-row gap-4 md:justify-around md:items-baseline  top-15 w-full  z-99">
                    <div className="h-[40vh]  text-white flex flex-col justify-around items-center bg-blue w-[300px] rounded-2xl   bg-blue-900/60 backdrop-blur-sm ">
                        <FaReact size={80} color="white" ></FaReact>
                        <p className="text-center text-2xl">HST</p>
                        <p  className="text-center text-2xl">300 - 1500 km</p>
                        <p className="text-center">Used for astronomical observations, capturing stunning images of he universe</p>
                    </div>
                    <div className="h-[40vh] text-white flex flex-col justify-around items-center bg-blue  w-[300px] rounded-2xl   bg-blue-900/60  ">
                        <BsRocketFill size={80} color="white" />
                        <p className="text-center text-2xl">ISS</p>
                        <p  className="text-center text-2xl">700 - 4500 km</p>
                        <p className="text-center"> Launches spacecraft, overcomes gravity, uses powerful propulsion systems.</p>
                    </div><div className="h-[40vh] text-white flex flex-col justify-around items-center bg-blue w-[300px] rounded-2xl   bg-blue-900/60  ">
                        <FaSatellite size={80} color="white" />
                        <p className="text-center text-2xl">GTS</p>
                        <p  className="text-center text-2xl">300 - 150 km</p>
                        <p className="text-center">Orbits Earth, transmits signals, enables communication, navigation, and observation.</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Service;
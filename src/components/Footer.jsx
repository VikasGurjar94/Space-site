import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {



    return (
        <>
            <footer className="bg-gray-800 flex flex-col gap-10 " >
                <div className="w-full bg-gray-800 text-white flex gap-10 flex-col md:flex-row md:items-baseline justify-around">
                    <div className="flex flex-col justify-around gap-5">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[25px] font-semibold ">BE READY TO GROW</h1>
                            <p >Get Exclusive Updates To Your Box</p>
                        </div>
                        <div className="flex justify-baseline gap-4 md:gap-2 items-center ">
                            <input type="email" placeholder="Email" className="border  border-white w-[70%] md:w-[95%] rounded-[5px] focus:outline-2 h-8 focus:outline-blue-600 " />
                            <button>GET</button>
                        </div>


                    </div>

                    <div className="flex justify-between md:w-1/4 items-center md:gap-7 ">
                        <div>
                            <h1 className="text-xl font-semibold">Quick Links</h1>
                            <br />
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/">About</a>
                                </li>
                                <li>
                                    <a href="/">Contact</a>
                                </li>
                                <li>
                                    <a href="/">Services</a>
                                </li>
                                <li>
                                    <a href="/">Log in</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">Quick Links</h1>
                            <br />
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/">About</a>
                                </li>
                                <li>
                                    <a href="/">Contact</a>
                                </li>
                                <li>
                                    <a href="/">Services</a>
                                </li>
                                <li>
                                    <a href="/">Log in</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div>
                        <ul className="gap-3 grid grid-rows-5 ">
                            <div className="text-xl row-span-2 font-semibold">
                                CONTACT US
                            </div>
                            <li> <FaLocationDot className="inline" /> Ahmedabad Gujarat</li>
                            <li><MdEmail className="inline" /> abcdef@gmail.com</li>
                            <li><FaPhoneAlt className="inline" /> +91 9638953766</li>
                        </ul>
                    </div>

                </div>

                <div className="hidden md:block text-2xl  md:h-[3px] w-full bg-white/50 ">
                </div>

                <div className="hidden md:justify-between text-base text-white/50 md:flex w-full">
                      <div className="flex justify-start items-center" >
                       <pre> copyright <FaCopyright className="inline"/> 2025 by TCJ </pre> 
                    </div>
                    <div className="flex justify-around gap-4 items-center">
                        <a  href=""><AiFillInstagram size={50} color="white" /></a>
                        <a href=""><FaFacebook size={45} color="white"/></a>
                        <a href=""><FaLinkedin size={45} color="white"/></a>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <h1>Privacy Policy</h1>
                        <h1>Terms and Conditions</h1>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;
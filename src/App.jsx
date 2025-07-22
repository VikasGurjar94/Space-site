import BgVid from "./components/BgVid";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useState , useEffect } from "react";
import { RingLoader } from "react-spinners";

  // return ;


function App (){
    const [loading , setLoading] = useState(true) ;


gsap.registerPlugin(ScrollTrigger,SplitText);

     useGSAP(()=>{

        let animateWord1 = new SplitText('#orbit1' , {type : 'lines'})
        let animateWord2 = new SplitText('#orbit2' , {type : 'lines'})

        let tl = gsap.timeline() ;
        tl.from(animateWord1.lines , {
            yPercent : 100,
            opacity : 0 ,
            duration : 0.8,
            stagger : 0.2,
            ease : 'power2.inOut'
        },0.1)
        .from(animateWord2.lines , {
            yPercent : 100,
            opacity : 0 ,
            duration : 1,
            stagger : 0.2,
            ease : 'power2.inOut'
        })
        .from('#hero-btn' , {
            yPercent : -100,
            opacity : 0 ,
            duration : 1,
            ease : 'bounce.out'
        })


    },[loading])



    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      } , 2000)
    } , [])


  return (<>

    {
      loading ? <div className="flex h-screen w-full justify-center items-center">
<RingLoader size='40'  color="#000000" /> <h1 className="text-[#000000]">Loading ...</h1>
      </div>
       : <>
  <div className="flex flex-col relative">
    <BgVid/>
    <Nav></Nav>
    <Hero></Hero>
    <Service></Service>
    <Banner/>
    <Footer></Footer>
    </div>
      </>
    }
    
    
  </>
    
    
  )
}
export default App;
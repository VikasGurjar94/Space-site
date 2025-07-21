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

function App (){
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


    },[])


  return (<>
  <div className="relative">
    <BgVid/>
    <Nav></Nav>
    <Hero></Hero>
    <Service></Service>
    <Banner/>
    <Footer></Footer>
    </div>
  </>
    
    
  )
}
export default App;
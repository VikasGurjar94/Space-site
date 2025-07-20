import BgVid from "./components/BgVid";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Banner from "./components/Banner";

function App (){
  return (<>
  <div className="relative">
    <BgVid/>
    <Nav></Nav>
    <Hero></Hero>
    <Service></Service>
    <Banner/>
    </div>
  </>
    
    
  )
}
export default App;
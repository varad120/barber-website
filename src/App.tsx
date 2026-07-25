
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import About from "./components/About";


function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
       <Gallery />
      <Services />
      <About />
    </div>
  );
}

export default App;
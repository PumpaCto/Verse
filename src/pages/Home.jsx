import Hero from "../components/Hero";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";

function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default Home;

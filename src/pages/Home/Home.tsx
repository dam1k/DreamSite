import Hero from "../../components/HeroSection/Hero";
import Services from "../../components/Services/Services";
import Projects from "../../components/Projects/Projects";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    setTimeout(() => {
      document.body.style.overflowX = "auto";
    }, 750)
  }, [])
  return (
  <>
    <Hero/>
    <Services/>
    <Projects/>
    </>)
}

export default Home;
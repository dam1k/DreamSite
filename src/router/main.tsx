import {Routes, Route, useLocation} from "react-router-dom"
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {useEffect} from "react";
import Home from "../pages/Home/Home";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import About from "../pages/About/About";
import ServicesPage from "../pages/Services/ServicesPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import NotFound from "../pages/NotFound/NotFound";

const Router = () => {
     const {pathname} = useLocation();
     useEffect(() => {
          document.body.style.overflowX = "hidden";
          setTimeout(() => {
            document.body.style.overflowX = "auto";
          }, 1000)
        }, [])
     return (
          <>
          <Navbar/>
          <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/projects" element={<ProjectsPage/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/services" element={<ServicesPage/>}/>
               <Route path="/contact" element={<ContactPage/>}/>
               <Route path="*" element={<NotFound/>}/>
          </Routes>
          {pathname !== '/about' && <Footer/>}
          </>
     )
}
export default Router;
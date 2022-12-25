import {Routes, Route} from "react-router-dom"
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Home from "../pages/Home/Home";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Reviews from "../pages/Reviews/Reviews";

const Router = () => {
     return (
          <>
          <Navbar/>
          <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/projects" element={<ProjectsPage/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/services" element={<Services/>}/>
               <Route path="/reviews" element={<Reviews/>}/>
          </Routes>
          <Footer/>
          </>
     )
}

export default Router;
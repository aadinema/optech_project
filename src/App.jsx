import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home.jsx";
// import ItSolution from "./components/itSolution/ItSolution.jsx"
import Contact from "./components/Contact/Contact.jsx";
import TechAgency from "./components/TechAgency/TechAgency.jsx";
import StartupHome from "./components/StartupHome/StartupHome.jsx";
import ItConsulting from "./components/ItConsulting/ItConsulting.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import PortfolioGrid from "./components/Portfolio/PortfolioGrid/PortfolioGrid.jsx";
import PortfolioMasonry from "./components/Portfolio/PortfolioM/PortfolioMasonry.jsx";
import PortfolioDetails from "./components/Portfolio/PortfolioDetails/PortfolioDetails.jsx";
import Services from "./components/Services/Services.jsx";
import Team from "./components/Team/Team.jsx";
import MainBlog from "./components/MainBlog/MainBlog.jsx";
import BlogDetails from "./components/BlogDetails/BlogDetails.jsx";
import BlogGrid from "./components/BlogGrid/BlogGrid.jsx";
import FourZeroFourPage from "./components/404/FourZeroFourPage.jsx";
import Faqs from "./components/Faqs/Faqs.jsx";
import TeamDetails from "./components/TeamDetails/TeamDetails.jsx";
import Testimonial from './components/Testimonial/Testimonial.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demos/main-demo" element={<Home />} />
        {/* <Route path="/demos/it-solutions" element={<ItSolution />} /> */}
        <Route path="/demos/Tech-Agency" element={<TechAgency />} />
        <Route path="/demos/Startup-Home" element={<StartupHome />} />
        <Route path="/demos/IT-Consulting" element={<ItConsulting />} />
        <Route path="/Pages/About-Us" element={<AboutUs />} />
        <Route path="/Pages/Services" element={<Services />} />
        <Route path="/Pages/Team" element={<Team />} />
        <Route path="/Pages/Team-Details" element={<TeamDetails />} />
        <Route path="/Pages/404" element={<FourZeroFourPage />} />
        <Route path="/Pages/Faqs" element={<Faqs />} />
        <Route path="/Pages/Testimonial" element={<Testimonial />} />
        <Route path="/Portfolio/Portfolio-Grid" element={<PortfolioGrid />} />
        <Route
          path="/Portfolio/Portfolio-Masonry"
          element={<PortfolioMasonry />}
        />
        <Route
          path="/Portfolio/Portfolio-Details"
          element={<PortfolioDetails />}
        />
        <Route path="/Blog" element={<MainBlog />} />
        <Route path="/Blog/Blog-Grid" element={<BlogGrid />} />
        <Route path="/Blog/Blog-Details" element={<BlogDetails />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<FourZeroFourPage />} />
      </Routes>
    </Router>
  );
};

export default App;

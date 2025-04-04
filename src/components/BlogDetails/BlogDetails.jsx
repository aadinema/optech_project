import React from "react";
import Topbar from "../Home/Navigation/Topbar/Topbar";
import Navigation from "../Home/Navigation/Mainbar/Navigation";
import Footer from "../Home/Footer/Footer";
import Page2 from "./Page2/Page2";
import Page1 from "./page1/Page1";

const BlogDetails = () => {
  return (
    <>
      <Topbar/>
      <Navigation/>
      <Page1/>
      <Page2/>
      <Footer/>
    </>
  );
};

export default BlogDetails;

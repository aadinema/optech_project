import React from 'react'
import Topbar from '../Home/Navigation/Topbar/Topbar'
import Navigation from '../Home/Navigation/Mainbar/Navigation'
import Footer from '../Home/Footer/Footer'
import Page1 from './Page1/Page1'
import Page2 from './Page2/Page2'
import WorkTogether from '../Home/WorkTogether/WorkTogether'

const MainBlog = () => {
  return (
    <>
      <Topbar/>
      <Navigation/>
      <Page1/>
      <Page2/>
      <Footer/>
    </>
  )
}

export default MainBlog

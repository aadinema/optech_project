import React from 'react'
import Topbar from '../Home/Navigation/Topbar/Topbar'
import Navigation from '../Home/Navigation/Mainbar/Navigation'
import Footer from '../Home/Footer/Footer'
import Page2 from './Page2/Page2'
import WorkTogether from '../Home/WorkTogether/WorkTogether'
import Page1 from './Page1/Page1'

const Testimonial = () => {
  return (
    <>
     <Topbar/>
     <Navigation/>
     <Page1/>
     <Page2/>
     <WorkTogether/>
     <Footer/> 

    </>
  )
}

export default Testimonial

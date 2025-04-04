import React from 'react'
import Topbar from '../Home/Navigation/Topbar/Topbar'
import Navigation from '../Home/Navigation/Mainbar/Navigation'
import Footer from '../Home/Footer/Footer'
import Page1 from './page1/Page1'
import Page2 from '../StartupHome/Page2/Page2'
import WorkTogether from '../Home/WorkTogether/WorkTogether'
import Page6 from '../ItConsulting/Page6/Page6'

const Services = () => {
  return (
    <>
     <Topbar/>
     <Navigation/>
     <Page1/>
     <Page2/>
     <Page6/>
     <WorkTogether/>
     <Footer/> 
    </>
  )
}

export default Services

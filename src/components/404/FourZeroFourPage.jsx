import React from 'react'
import Navigation from '../Home/Navigation/Mainbar/Navigation'
import Topbar from '../Home/Navigation/Topbar/Topbar'
import Footer from '../Home/Footer/Footer'
// import Page1 from './Page1/Page1'
import Page2 from './Page2/Page2'

const FourZeroFourPage = () => {
  return (
    <>
      <Topbar/>
      <Navigation/>
      {/* <Page1/> */}
      <Page2/>
      <Footer/>
    </>
  )
}

export default FourZeroFourPage

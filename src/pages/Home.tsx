import React from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import Feature from '../components/Home/Feature'
import AboutSection from '../components/Home/AboutSection'
import ProductSection from '../components/Home/ProductSection'
import ParkingSectin from '../components/Home/ParkingSectin'
import FeedBackSection from '../components/Home/FeedBackSection'

const Home = () => {
  return (
    <div>
      <HomeBanner/> 
      <Feature/>
      <AboutSection/>
      <ProductSection/>
      <ParkingSectin/>
      <FeedBackSection/>
    </div>
  )
}

export default Home
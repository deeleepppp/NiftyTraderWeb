import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import StockMarketBanner from './banner/StockMarketBanner'
import AutoScrollGallery from './autoScrollGallery/AutoScrollGallery'
import FeaturesSection from './features/FeaturesSection'
import PromoBanner from './promoBanner/PromoBanner'
import Testimonials from './testimonials/Testimonials'
import Pricing from './pricing/Pricing'
import FAQ from './faq/Faq'
import MarketBanner from './marketBanner/MarketBanner'
import Footer from './footer/Footer'

const Combination = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <StockMarketBanner/>
    <AutoScrollGallery/>
    <FeaturesSection/>
    <PromoBanner/>
    <Testimonials/>
    <Pricing/>
    <FAQ/>
    <MarketBanner/>
    <Footer/>
    </>
  )
}

export default Combination
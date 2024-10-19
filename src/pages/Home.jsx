import React from 'react'
import Hero from '../components/Hero.jsx'
import CookieDisplay from '../components/CookieDisplay.jsx'
import DessertDisplay from '../components/DessertDisplay.jsx'
import Promotion from '../components/Promotion.jsx'
import FAQs from '../components/FAQs.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'

export default function Home() {
  return (
    <div>
      <ScrollToTop />
       <Hero />
        <CookieDisplay />
        <DessertDisplay />
        <FAQs />
        <Promotion />
    </div>
  )
}

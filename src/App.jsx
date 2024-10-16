import React from 'react'
import Header from './components/Header'
import FooterComp from './components/FooterComp.jsx'
import Hero from './components/Hero.jsx'
import CookieCard from './components/CookieCard.jsx'
import CookieDisplay from './components/CookieDisplay.jsx'
import DessertDisplay from './components/DessertDisplay.jsx'
import Promotion from './components/Promotion.jsx'
import FAQs from './components/FAQs.jsx'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <CookieDisplay />
      <DessertDisplay />
      <FAQs />
      <Promotion />
      <FooterComp />
    </div>
  )
}

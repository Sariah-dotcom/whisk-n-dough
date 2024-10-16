import React from 'react'
import Header from './components/Header'
import FooterComp from './components/FooterComp.jsx'
import Hero from './components/Hero.jsx'
import CookieCard from './components/CookieCard.jsx'
import CookieDisplay from './components/CookieDisplay.jsx'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <CookieDisplay />

      <FooterComp />
    </div>
  )
}

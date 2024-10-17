import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import FooterComp from './components/FooterComp.jsx'
import Home from './pages/Home.jsx';
import AllDesserts from './pages/AllDesserts.jsx';


export default function App() {
  return (
    <div>
      <Router>

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all-desserts' element={<AllDesserts />} />

        </Routes>
        <FooterComp />
      </Router>

    </div>
  )
}

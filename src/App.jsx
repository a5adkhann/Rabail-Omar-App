import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import Bridals from './pages/Bridals'
import Formals from './pages/Formals'
import Mommy from './pages/Mommy'
import LuxuryPret from './pages/LuxuryPret'
import Contact from './pages/Contact'
import { Fade } from 'react-awesome-reveal'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/bridals" element={<Bridals />}></Route>
                <Route path="/formals" element={<Formals />}></Route>
                <Route path="/mommy-and-me" element={<Mommy />}></Route>
                <Route path="/luxury-pret" element={<LuxuryPret />}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
  )
}

export default App  
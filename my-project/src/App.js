import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Features from './components/features/Features';
import Services from './components/serivces/Services';
import Construction from './components/construction/Construction';
import Listitem from './components/itemlist/Listitem';
import Items from './components/items/Items';
import About from './components/aboutus/About.js';
import Contact from './components/contactus/Contact';
import Footer from './components/footer/Footer';



function App() {
  return (
    
    <>
    <Navbar />
    <Hero />
    <Features/>
    <Services/>
    <Construction/>
    <Listitem/>
    <Items/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;

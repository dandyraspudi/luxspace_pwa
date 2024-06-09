import React from 'react';
import Header from './components/HeaderBar.js';
import Hero from './components/Hero.js';
import Browse from './components/Browse.js';
import Arrived from './components/Arrived.js';
import Menu from './components/Menu.js';
import Clients from './components/Clients.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Browse/>
      <Arrived/>
      <Menu/>
      <Clients/>
      <Footer/>
    </>
  );
}

export default App;

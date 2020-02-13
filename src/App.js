import React from 'react';
import './App.css';

import Header from './components/Header'
import Banniere from './components/banniere'
import Portfolio from './components/portfolio'
import InfoCv from './components/cv'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Header />
      <Banniere />
      <Portfolio />
      <InfoCv />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import './viewPortfolio.css';
import ViewPortfolio from './viewPortfolio';
import Image from './images/01.jpg';

import Header from './Header'
import Footer from './footer'

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const descriptionProjet = {
  projet1: {
    titre: 'WebAgency',
    sousTitre: 'Projet Openclassrooms HTML5/CSS3 :',
    descriptionProjet: "Projet Openclassrooms réalisé dans le cadre de la formation 'Développeur Web Junior'. Le premier projet consistait à effectuer une intégration d'une maquette en HTML5/CSS3 (sans framework tel que Bootstrap), responsive, SEO avec une validation HTML et CSS W3C.",
    image: Image,
    link: "./Portfolio/Projet1DWJ/Projet1.html",
  }
}

class Projet extends Component {
    state = {
      descriptionProjet
    }
    render() {
      const { descriptionProjet } = this.state

      const pageProjet = Object.keys(descriptionProjet)
      .map(projet => (
      <ViewPortfolio 
        key={projet}
        titre = {descriptionProjet[projet].titre}
        sousTitre = {descriptionProjet[projet].sousTitre}
        descriptionProjet = {descriptionProjet[projet].descriptionProjet}
        image = {descriptionProjet[projet].image}
        link = {descriptionProjet[projet].link}/>
    ))
      

      return (
        <div>
          <Header/>
          <div className="parallax-container">
          <div className="overlay-container"></div>
          <ScrollAnimation animateIn="fadeIn">
          {pageProjet}
          </ScrollAnimation>
        </div>
          <Footer/>
        </div>
      );
    }
}

export default Projet;
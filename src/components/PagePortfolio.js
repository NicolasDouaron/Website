import React, {Component} from 'react';
import AddProject from './addProject';
import Image from './images/01.jpg';

import Header from './Header'
import Footer from './footer'

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const portfolio = {
  projet1: {
    titre: 'WebAgency',
    description: 'Projet Openclassrooms réalisé dans le cadre de la formation "Développeur Web Junior".',
    image: Image,
  }
}

class PagePortfolio extends Component {
    state = {
      portfolio
    }
    render() {
      const { portfolio } = this.state

      const listeProjet = Object.keys(portfolio)
      .map(projet => (
      <AddProject 
        key={projet}
        titre = {portfolio[projet].titre}
        description = {portfolio[projet].description}
        image = {portfolio[projet].image}/>
    ))
      

      return (
          <div>
            <Header />
            <div id="container-portfolio" className="pagePortfolio container-portfolio">
              <ScrollAnimation animateIn="fadeIn">
                <div id="portfolio" className="title-pagePortfolio title-portfolio">
                  <h3>Portfolio</h3>
                  <span></span>
                  <h2 className="sous-titre">Toutes mes réalisations</h2>
                </div>
                <div className="projet">
                  <ul className="works">
                    {listeProjet}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
            <Footer />
          </div>
      );
    }
}

export default PagePortfolio;
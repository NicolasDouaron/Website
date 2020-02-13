import React, {Component} from 'react';
import './portfolio.css';
import AddProject from './addProject';
import Image from './images/01.jpg';
import ImageMore from './images/gray.jpg'
import ImageBackground from './images/img_portfolio.jpg';


import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const portfolio = {
  projet1: {
    titre: 'WebAgency',
    titreDescription: 'Projet Openclassrooms HTML5/CSS3 :',
    description: 'Projet Openclassrooms réalisé dans le cadre de la formation "Développeur Web Junior".',
    descriptionPortfolio: "Projet Openclassrooms réalisé dans le cadre de la formation 'Développeur Web Junior'. Le premier projet consistait à effectuer une intégration d'une maquette en HTML5/CSS3 (sans framework tel que Bootstrap), responsive, SEO avec une validation HTML et CSS W3C.",
    image: Image,
    imageBackground: ImageBackground,
  }
}

class Portfolio extends Component {
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
       
          <div id="container-portfolio" className="container-portfolio">
            <ScrollAnimation animateIn="fadeIn">
              <div id="portfolio" className="title-portfolio">
                <h3>Portfolio</h3>
                <span></span>
              </div>
              <div className="projet">
                <ul className="works">
                  {listeProjet}
                  <li className="work_realize">
                    <div className="imagebox">
                      <img src={ImageMore} alt="Background"></img>
                      <div className="more">
                          <a><i className="fas fa-plus"></i></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
            <div className="parallax-separ">
              <div className="overlay-separ"></div>
            </div>
          </div>
      );
    }
}

export default Portfolio;
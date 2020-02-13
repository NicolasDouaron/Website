import React, {Component} from 'react';
import './info_cv.css';
import Image from './images/img_formation.jpg';

import AddFormation from './description_formation';

const lien = '<a class="link_webagency" href="Portfolio/Projet1DWJ/Projet1.html" target="_blank">WebAgency</a>;'
console.log(lien)

const ajoutFormation = {
  formation1: {
    nom: 'Bachelor Informatique',
    date: 'Septembre 2019 à Septembre 2022',
    lieux: 'Campus Academy, Nantes, Loire-Atlantique',
    description: 'Actuellement en première année bachelor informatique'
  },
  formation2: {
    nom: "Développeur Web Junior",
    date: 'Janvier 2018 à Mars 2018',
    lieux: "Openclassrooms, A distance",
    description: "Projet 1 validé: Réaliser une maquette en HTML5 et CSS3. Voir le projet : " + {lien},
  },
  formation3: {
    nom: "BTS Gestion et Protection de la Nature",
    date: 'Septembre 2016 à Avril 2017',
    lieux: 'Lycée Henri Queuille, Neuvic, Corrèze',
    description: "Première année de BTS."
  },
  formation4: {
    nom: 'Bac Professionnel GMNF',
    date: 'Septembre 2014 à Juin 2016',
    lieux: 'Lycée Kerlebost, Saint-Thuriau, Morbihan',
    description: 'Diplôme obtenu mention bien.'
  },
  formation5: {
    nom: "BEP Froid et Conditionnement d'Air",
    date: 'Septembre 2012 à Juin 2014',
    lieux: 'Lycée Saint Joseph La Salle, Lorient, Morbihan',
    description: 'Diplôme obtenu.'
  }
}

class Formation extends Component {
    state = {
      ajoutFormation
    }
    render() {
      const { ajoutFormation } = this.state

      const listeFormation = Object.keys(ajoutFormation)
      .map(formation => (
      <AddFormation 
        key={formation}
        nom = {ajoutFormation[formation].nom}
        date = {ajoutFormation[formation].date}
        lieux = {ajoutFormation[formation].lieux}
        description = {ajoutFormation[formation].description}/>
    ))

      return (
      <div className="container-cv">
        <div className="bloc-info">
          <div className="bloc-info__img">
            <img src={Image} alt=""></img>
            <div className="bloc--image_title">
              <h2>Diplômes et Formations</h2>
            </div>
            <div className="bloc--image_overlay"></div>
          </div>
          <div> 
            {listeFormation}
          </div>
        </div>
      </div>
      );
    }
}

export default Formation;
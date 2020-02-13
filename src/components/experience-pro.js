import React, {Component, Fragment} from 'react';
import './info_cv.css';
import Image from './images/img_experience.jpg';

import AddExperience from './description_experience';

const experience = {
  exp1: {
    metier: 'Manutentionnaire',
    date: 'Décembre 2018 à Juillet 2019',
    entreprise: 'Districenter',
    description: 'Rigueur, travail en équipe, autonome.'
  },
  exp2: {
    metier: "Agent d'accueil en déchetterie / Ripeur",
    date: 'Juin 2018 à Juillet 2018',
    entreprise: "Communauté d'Agglomération Mont Saint Michel Normandie",
    description: "Gestion d'une déchetterie en autonomie.\nAssistance auprès des usagers."
  },
  exp3: {
    metier: "Agent d'accueil en déchetterie / Ripeur",
    date: 'Mai 2017 à Septembre 2017',
    entreprise: 'Arc Sud Bretagne',
    description: "Gestion d'une déchetterie en autonomie.\nAssistance auprès des usagers."
  },
  exp4: {
    metier: 'Ripeur',
    date: 'Août 2016',
    entreprise: 'Lorient Agglomération',
    description: 'Secteur collecte des déchets.'
  }
}


class ExperiencePro extends Component {
    state = {
      experience
    }
    render() {
      const { experience } = this.state

      const listeExp = Object.keys(experience)
      .map(exp => (
      <AddExperience 
        key={exp}
        metier = {experience[exp].metier}
        date = {experience[exp].date}
        entreprise = {experience[exp].entreprise}
        description = {experience[exp].description}/>
    ))

      return (
        <Fragment>
          <div id="cv" className="container-cv">
            <div className="title-cv">
              <h3>Curriculum Vitae</h3>
              <span></span>
            </div>
            <div className="bloc-info">
              <div className="bloc-info__img">
                <img src={Image} alt=""></img>
                <div className="bloc--image_title">
                  <h2>Mon Expérience Professionnelle</h2>
                </div>
                <div className="bloc--image_overlay"></div>
              </div>
              <div> 
                {listeExp}
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
}

export default ExperiencePro;
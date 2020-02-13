import React, {Component} from 'react';
import Image from './images/img_competence.jpg';

import Js from './images/javascript.png';
import Git from './images/git.png';
import XD from './images/adobexd.png';


class Competence extends Component {
    render() {
      

      return (
      <div className="container-cv">
        <div className="bloc-info_competence">
          <div className="bloc-info-competence__img">
            <img src={ Image } alt=""></img>
            <div className="bloc--image_title">
              <h2>Mes compétences Web et Outils</h2>
            </div>
            <div className="bloc--image-competence_overlay"></div>
          </div>
          <div>
            <div className="bloc-competence">
              <div className="bloc-competence__front">
              <span><strong>Javascript</strong></span>
                <span><img style={{width: '55px', height: '33px'}} src={ Js } alt="Logo Javascript"></img></span>
              </div>
              <div className="bloc-competence__outil">
                <span><strong>Git</strong></span>
                <span><img style={{width: '32px', height: '33px'}} src={ Git } alt="Logo Git"></img></span>
              </div>
            </div>
            <div className="bloc-competence">
              <div className="bloc-competence__front">
                <span><strong>HTML5</strong></span>
                <span><i style={{color: '#e34f26', width: '60px'}} className="fab fa-html5 fa-2x"></i></span>
              </div>
              <div className="bloc-competence__outil">
                <span><strong>AdobeXD</strong></span>
                <span><img style={{width: '32px', height: '33px'}} src={ XD } alt="Logo Adobe XD"></img></span>
              </div>
            </div>
            <div className="bloc-competence">
              <div className="bloc-competence__front">
                <span><strong>CSS3</strong></span>
                <span><i style={{color: '#264de4', width: '60px'}} className="fab fa-css3-alt fa-2x"></i></span>
              </div>
              <div className="bloc-competence__outil">
                <span><strong>Wordpress</strong></span>
                <span><i style={{color: '#464646', width: '60px'}} className="fab fa-wordpress fa-2x"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
}

export default Competence;
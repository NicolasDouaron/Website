import React, {Fragment} from 'react'
import './banniere.css';
import Image from './images/miniature_cv.jpg';
import Typing from 'react-typing-animation';

import "animate.css/animate.min.css";

const Banniere = () => {
  return (
    <Fragment>
      <div id="home" className="parallax-header">
        <div className="container-header">
          <div className="overlay-header"></div>
          <div className="content-header">
            <div>
              <img className="style-img" src={Image} alt="Nicolas Douaron"></img>
            </div>
            <h3>Nicolas <span>Douaron</span></h3>
            <Typing loop={true} speed={100}>
              <p>Etudiant Développeur Web</p>
              <Typing.Reset count={1} delay={1000} />
            </Typing>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Banniere;


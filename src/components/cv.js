import React, {Component} from 'react';
import './info_cv.css';

import ExperiencePro from './experience-pro';
import Competence from './competences';
import Formation from './formation';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class InfoCv extends Component {
    render() {
      

      return (
      <ScrollAnimation animateIn="fadeIn">
        <div>
          <ScrollAnimation animateIn="bounceInLeft">
            <ExperiencePro />
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceInRight">
            <Competence />
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceInLeft">
            <Formation />
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
      );
    }
}

export default InfoCv;
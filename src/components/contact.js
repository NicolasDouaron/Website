import React, {Component} from 'react';
import './contact.css';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class Contact extends Component {
    render() {
      

      return (
      <ScrollAnimation animateIn="bounceInUp">
        <div id="contact" className="parallax-contact">
          <div className="content-contact">
            <div className="contact-form">
              <h1>Contact</h1>
              <form name="verifForm" action="http://127.0.0.1:8000/action.php" method="post">
                <div className="input-fields">
                  <input type="text" className="input" name="nom" placeholder="Prénom" 
                  minLength="3" maxLength="25" size="25" required/>
                  <input type="email" className="input" name="email" placeholder="Email" size="50" maxLength="50" required/>
                  <input type="text" className="input" name="subject" placeholder="Sujet" size="50" maxLength="50" required/>
                </div>
                <div className="msg">
                <textarea type="text" name="message" placeholder="Message" minLength="1" maxLength="255" rows="4" cols="40" required></textarea>
                <div style={{display: 'flex'}}>
                  <input className="btn" value="Envoyer" type="submit"/>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </ScrollAnimation>
        
      );
    }
}

export default Contact;
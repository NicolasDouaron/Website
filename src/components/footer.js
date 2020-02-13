import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
    render() {
      

      return (
        <div>
          <footer>
            <div>
              <p><span><a className="hoverName" href="#home">@2020 Nicolas DOUARON</a></span> - Reproduction interdite
                <span className="reseau bloc-profil">
                  <a href="https://www.linkedin.com/in/nicolas-douaron-20605b197/" target="_blank">
                    <i className="linkedin fab fa-linkedin-in fa-2x"></i>
                  </a>
                  <a href="https://www.instagram.com/photographienico/?hl=fr" target="_blank">
                    <i className="instagram fab fa-instagram fa-2x"></i>
                  </a>
                </span>
              </p>
            </div>
          </footer>
        </div>
      );
    }
}

export default Footer;
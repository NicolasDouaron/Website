import React, {Fragment} from 'react'
import './Header.css';

const Header = () => {

  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-60px";
    }

    prevScrollpos = currentScrollPos;
  };

  return (
    <Fragment>
      <div id="navbar" className="header">
        <a href="/home">
          <h2 className="logo">Nicolas Douaron</h2>
        </a>
        <input type="checkbox" id="chk" />
        <label htmlFor="chk" className="show-menu-btn">
          <i className="fas fa-bars"></i>
        </label>

        <ul className="menu">
          <li><a href="/home">Accueil</a></li>
          <li><a href="/home#portfolio">Portfolio<i className="fa fa-sort-desc"></i></a></li>
          <li><a href="/home#cv">Curriculum Vitae</a></li>
          <li><a href="/home#contact" style={{borderRight: 'none'}}>Contact</a></li>
          <label htmlFor="chk" className="hide-menu-btn">
            <i className="fas fa-times"></i>
          </label>
        </ul>

      </div>
    </Fragment>
  )
}

export default Header;


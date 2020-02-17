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

  function toggle() {
    document.getElementById("chk").checked = false
    console.log('reff');
  }

  return (
    <Fragment>
      <div id="navbar" className="header">
        <a href="/">
          <h2 className="logo">Nicolas Douaron</h2>
        </a>
        <input type="checkbox" id="chk" />
        <label htmlFor="chk" className="show-menu-btn">
          <i className="fas fa-bars"></i>
        </label>

        <ul className="menu">
          <li><a href="/">Accueil</a></li>
          <li><a onClick={toggle} href="/#portfolio">Portfolio<i className="fa fa-sort-desc"></i></a></li>
          <li><a onClick={toggle} href="/#cv">Curriculum Vitae</a></li>
          <li><a onClick={toggle} href="/#contact" style={{borderRight: 'none'}}>Contact</a></li>
          <label htmlFor="chk" className="hide-menu-btn">
            <i className="fas fa-times"></i>
          </label>
        </ul>

      </div>
    </Fragment>
  )
}

export default Header;


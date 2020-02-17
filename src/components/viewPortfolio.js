import React, {Fragment} from 'react'

const ViewPortfolio = ({titre, sousTitre, descriptionProjet, image}) => {
  return (
    <Fragment>
      <div className="textbox_portfolio">
          <h1>{titre}</h1>
          <span className="underline"></span>
          <h4>{sousTitre}</h4>
          <div className="bloc_description">
              <p>{descriptionProjet}</p>
              <div className="bloc_image">
                  <img src={image} alt="Image WEBAGENCY"></img>
              </div>
          </div>
          <span className="view">
              <a id="lien_portfolio" href="https://nicolasdouaron.github.io/Webagency/" target="_blank">Voir le
                  projet</a>
          </span>
      </div>
    </Fragment>
  )
}

export default ViewPortfolio;
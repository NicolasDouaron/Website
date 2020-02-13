import React, {Fragment} from 'react'

const AddFormation = ({nom, date, lieux, description}) => {
  return (
    <Fragment>
      <div className="bloc-info__descri">
        <div className="bloc-info__date">
          <span><strong>{nom}</strong></span>
          <span>{date}</span>
        </div>
        <div className="bloc-info__work">
          <span className="bloc-info__title">{lieux}</span>
          <span className="bloc-info__text">{description}</span>
        </div>
      </div>
    </Fragment>
  )
}

export default AddFormation;
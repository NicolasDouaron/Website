import React, {Fragment} from 'react'

const AddExperience = ({metier, date, entreprise, description}) => {
  return (
    <Fragment>
      <div className="bloc-info__descri">
        <div className="bloc-info__date">
          <span><strong>{metier}</strong></span>
          <span>{date}</span>
        </div>
        <div className="bloc-info__work">
          <span className="bloc-info__title">{entreprise}</span>
          <span className="bloc-info__text">{description}</span>
        </div>
      </div>
    </Fragment>
  )
}

export default AddExperience;

/*import React, {Component} from 'react';

class AddExperience extends Component {
  constructor (props) {
    super(props);
    this.state = {
      metier: this.props.metier,
      date: this.props.date,
      entreprise: this.props.entreprise,
      description: this.props.description
    }
  }

    render() {
      return (
        <div class="bloc-info__descri">
          <div class="bloc-info__date">
            <span><strong>{this.state.metier}</strong></span>
            <span>{this.state.date}</span>
          </div>
          <div class="bloc-info__work">
            <span class="bloc-info__title">{this.state.entreprise}</span>
            <span class="bloc-info__text">{this.state.description}</span>
          </div>
        </div>
      );
      
    }
}

export default AddExperience;*/
import React, {Fragment, Component} from 'react'
import { Redirect } from 'react-router-dom'

class AddProject extends Component {
  constructor (props) {
    super(props);
    this.state = {
      titre: this.props.titre,
      description: this.props.description,
      image: this.props.image
    }
  }

  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/projet' />
    }
  }
  render() {
    return (
      <Fragment>
        <li className="work_realize">
          <div className="imagebox">
            <img src={this.state.image} alt="Lunette noir sur fond orange"></img>
            <div className="textbox">
              <h4>{this.state.titre}</h4>
            </div>
            <div className="textbox_hover">
              <div className="text_center">
                <h4>{this.state.titre}</h4>
                <p>{this.state.description}</p>
                <span className="btn-more">
                  {this.renderRedirect()}
                  <a id="lien_portfolio" onClick={this.setRedirect}>En savoir plus</a>
                </span>
              </div>
            </div>
          </div>
        </li>
      </Fragment>
    )
  }
}

export default AddProject;

/*import React, {Component} from 'react';

class AddProject extends Component {
  constructor (props) {
    super(props);
    this.state = {
      titre: this.props.titre,
      description: this.props.description,
      image: this.props.image
    }
  }

    render() {
      return (
        <li className="work_realize">
          <div className="imagebox">
            <img src={this.state.image} alt="Lunette noir sur fond orange"></img>
            <div className="textbox">
              <h4>{this.state.titre}</h4>
            </div>
            <div className="textbox_hover">
              <div className="text_center">
                <h4>{this.state.titre}</h4>
                <p>{this.state.description}</p>
                <span className="btn-more">
                  <a id="lien_portfolio" href="portfolio.html">En savoir plus</a>
                </span>
              </div>
            </div>
          </div>
        </li>
      );
      
    }
}

export default AddProject;*/

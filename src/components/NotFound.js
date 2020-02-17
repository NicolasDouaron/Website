import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class NotFound extends Component {
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
      return <Redirect to='/' />
    }
  }

  render () {
    return (
      <div className="notFound">
        <h1 className="">Error 404</h1>
        <h2>Ne t'avise pas de taper n'importe quoi dans mon url !</h2>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Retour Site Web</button>
      </div>
    )
  }
}

export default NotFound
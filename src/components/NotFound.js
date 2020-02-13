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
      return <Redirect to='/home' />
    }
  }

  render () {
    return (
      <div className="notFound">
        <h2>Ne t'avise pas de taper n'importe quoi dans mon url !</h2>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Back to Website</button>
      </div>
    )
  }
}

export default NotFound
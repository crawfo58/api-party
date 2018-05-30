import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import './Nasa.css'

class Nasa extends Component {
  render() {
    return (
      <div className="Nasa">
        <img
          src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png"
          alt="NASA"
        />

        <Route exact path="/nasa" render={() => <h2>No rover selected.</h2>} />
        <Route path="/nasa:rover" render={props => <h2>props.match.params.</h2>} />
      </div>
    )
  }
}

export default Nasa
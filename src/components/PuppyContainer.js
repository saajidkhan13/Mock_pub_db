import React, { Component } from 'react'
import '../App.css';

import Puppy from './Puppy';

class PuppyContainer extends Component {


  render() {
    const puppies = this.props.puppies
    return (
      <div id="puppy-container">
        <h1>PUPPIES!!!</h1>
        {puppies.map(puppy => {
          return <Puppy key={puppy.id} puppyInfo={puppy} handleClick={this.props.handleClick} handleToggle={this.props.handleToggle}/>
        })}
      </div>
    )
  }
}

export default PuppyContainer

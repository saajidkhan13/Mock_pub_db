import React, { Component } from 'react'

class Puppy extends Component {


  render() {
    const puppy = this.props.puppyInfo
    return (
      <div>
        <button onClick={() => this.props.handleClick(puppy.id)}>{puppy.name}</button>
        <div>puppy info</div>
        <button onClick={() => this.props.handleToggle(puppy.id)}>Toggle pup goodness</button>
      </div>
    )
  }
}

export default Puppy;

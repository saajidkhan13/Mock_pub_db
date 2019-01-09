import React, { Component } from 'react';
import '../App.css';

class PuppyDetails extends Component {



  render() {
    const puppy = this.props.puppy
    const behavior = this.props.puppy.isGoodDog ? <h1>Good dog!</h1> : <h1>Bad dog!!!</h1>
    return (
      <div id="detail-container">
        <h1>{puppy.breed}</h1>
        <img alt={puppy.id} src={puppy.image} />
        <h1>{behavior}</h1>
      </div>
    )
  }
}

export default PuppyDetails;

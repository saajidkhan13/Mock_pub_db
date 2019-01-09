import React, { Component } from 'react';
import '../App.css';

class Filter extends Component {
  render() {
    return (
      <div style={{margin: "auto", width: "450px"}}>
        <input
          type="text"
          placeholder="search by name and/or breed"
          style={{width: "250px"}}
          onChange={this.props.handleInput}
        />
        Good boiz only
        <input
          type="checkbox"
          onChange={this.props.handleCheck}
        />
      </div>
    )
  }
}

export default Filter;

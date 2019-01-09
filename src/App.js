import React, { Component } from 'react';
import logo from './logo.svg';
import Filter from './components/Filter';
import PuppyContainer from './components/PuppyContainer';
import PuppyDetails from './components/PuppyDetails';
import './App.css';

const API = "http://localhost:3000/pups";


class App extends Component {
  state = {
    puppies: [],
    display: false,
    puppyToDisplay: {},
    term: "",
    checked: false
  }


  componentDidMount(){
    fetch(API)
      .then(r => r.json())
      .then(puppiesData => {
        this.setState({puppies: puppiesData}, () => console.log(this.state.puppies))
      })
  }


  handleClick = (id) => {
    this.setState({display: !this.state.display })
    const selectedPuppy = this.state.puppies.find(puppy => puppy.id === parseInt(id))
    this.setState({puppyToDisplay: selectedPuppy})
  }


  handleToggle = (id) => {
    console.log('i have been clicked');
    const selectedPuppy = this.state.puppies.find(puppy => puppy.id === parseInt(id))
    selectedPuppy.isGoodDog = !selectedPuppy.isGoodDog
    const updatedArray = this.state.puppies.map(puppy => puppy.id === parseInt(id) ? selectedPuppy : puppy )
    this.setState({updatedArray})
  }

  handleInput = (event) => {
    this.setState({term: event.target.value })
  }

  filteredPuppies = () => {
    const newPuppies = this.state.puppies.filter(puppy => {
      return puppy.name.toLowerCase().includes(this.state.term.toLowerCase())
      || puppy.breed.toLowerCase().includes(this.state.term.toLowerCase())
    })
    if(this.state.checked){
      const goodies = this.state.puppies.filter(puppy => { return puppy.isGoodDog === true})
      return goodies
    } else {
      return newPuppies
    }
  }

  handleCheck = (event) => {
    console.log(event.target);
    this.setState({checked: !this.state.checked})
  }





  render() {
    return (
      <div>
        <h1 id="header">Puppy DB</h1>
        <Filter handleCheck={this.handleCheck} handleInput={this.handleInput}/>
        <div id="app-container">
          <PuppyContainer puppies={this.filteredPuppies()} handleClick={this.handleClick} handleToggle={this.handleToggle} />
          {this.state.display ? <PuppyDetails puppy={this.state.puppyToDisplay} /> : null}
        </div>
      </div>
    );
  }
}

export default App;

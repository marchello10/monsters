import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super() // super duoda prieeiga prie state ir Component metodu
    this.state = {
      monsters: [],
      searchField: ''
    }

    //now program knows that 'this' (in method handleChange) is a Component class
    // but we use arrow handleChange function instead, so we don't have to write these lines for every func
    //this.handleChange = this.handleChange.bind(this)
  }

  // lifecycle method, turim prieeiga prie jo, del Component
  //renders component onto the DOM for the first time (ir refreshinant).
  // When it does that it calls the block inside.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( { monsters: users } ))
  }

  //in this way we would have to bind 'this' (see constructor)
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value })
  // }
  // ES6 arrow functions automatically allow you to set 'this' when function is defined
  // handleChange method points to an arrow function, so App defines the arrow function based on what code we given it
  // so it automatically binds 'this' to the place where this arrow function is defined
  // and the context of this arrow function is the App component
  // this situation is called lexical scoping
  //Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  //called when state changes, returns jsx
  //you cannot setState in render, cause setState calls render (loop)
  render() {
    //destructuring (const { })
    //pull props of the object and set them to const
    //helps for code readability, so you don't have to write this.state...
    const { monsters, searchField } = this.state
    // same as:
    // const monsters = this.state.monsters
    // const searchField = this.state.searchField
    const filteredMonsters = monsters.filter(
        (monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1> Monsters </h1>
        <SearchBox
           placeholder={'search monsters'}
           // 'this' references a content in which it's being invoked
           // in this case 'this' is 'Component' class
           handleChange={this.handleChange}
           // jei rasytumem this.handleCharge(), tai iskviestu iskart f-ja inicializuojant SearchBox, o ne aktyvavus eventa
           // taigi eventuose, tarkim onClick={this.hanndleChange} reiskia kad priskiriam onClickui musu funkcija
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;

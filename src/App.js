import React, {Component} from 'react';
import './App.css';
import './components/toggle/toggle.css';
import { CardList } from './components/card-list/card-list.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      luck: false
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => 
        response.json())
        .then(users => this.setState({ monsters: users }));
  }

  setLuck(e) {
    debugger;
    this.setState({ luck: e.target.checked }, () => console.log(this.state.luck));
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <input type='search' placeholder='Search monsters' onChange={e => this.setState({ searchField: e.target.value },) }/>
      <div className="mb-2">
        <label className="switch">
          <input onChange={e => this.setState({ luck: e.target.checked })} type="checkbox"/>
          <span className="slider round"></span>
        </label>
        {
          this.state.luck ? <label> Fuck go back!</label> : <label> Feeling lucky!</label>
        }
      </div>
      <CardList luck={this.state.luck} monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
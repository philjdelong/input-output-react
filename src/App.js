import './App.css';
import { Component } from 'react'
import UserInput from './Components/UserInput/UserInput.js'
import UserOutput from './Components/UserOutput/UserOutput.js'

class App extends Component {
  state = {
    username: "Phil"
  };

  userInput = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <UserInput input={this.userInput}></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
        </header>
      </div>
    );
  }
}

export default App;

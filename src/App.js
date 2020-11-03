import React from 'react';
import './App.css';
import Unicorn from "./components/Unicorn"
import Shepherd from "./components/Shepherd"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shepherdMessage: ""
    }
  }

  componentDidUpdate() {
    console.log(this.state.shepherdMessage);
  }

  updateShepherdMessage = (msg = "I missed something") => {
    this.setState({
      shepherdMessage: msg
    })
  }

  render() {
    return (
      <div className="App">
        <Shepherd update={this.updateShepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
        <Unicorn color={this.state.shepherdMessage} />
      </div>
    );
  }
}

export default App;

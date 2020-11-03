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
    // just to be sure our message updated correctly, we get every new message in the console
    console.log(`Shepherd says: ${this.state.shepherdMessage}`);
  }

  // This function takes a message in it's argument, and updates App's state with it. In the case we call it without any argument, there's a default value 
  updateShepherdMessage = (msg = "I missed something") => {
    this.setState({
      shepherdMessage: msg
    })
  }

  render() {
    return (
      <div className="App">
        {/* We create one Shepherd, and give it a handle to a App function to update the message */}
        <Shepherd update={this.updateShepherdMessage} />
        {/* We create as many Unicorns as we see fit. Every Unicorn receives the Shepherd's message through App's state (initially an empty string, as long as the Sphepherd has not spoken) */}
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

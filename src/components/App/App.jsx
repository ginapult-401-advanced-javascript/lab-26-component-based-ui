import React from "react";
import { connect } from "react-redux";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import './app.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementButtonClick = e => {
    e.preventDefault();
    // this.setState({ counter: Math.floor(Math.random() * 20 + 1) });
    this.setState(previousState => ({
      counter: previousState.counter + 1
    }));
  };

  decrementButtonClick = e => {
    e.preventDefault();
    // this.setState({ counter: Math.floor(Math.random() * 20 + 1) });
    this.setState(previousState => ({
      counter: previousState.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        {/* <button onClick={this.incrementButtonClick}>Click Me +</button>
        <button onClick={this.decrementButtonClick}>Click Me -</button> */}
        <a onClick={this.incrementButtonClick}>Increment +</a>
        <a onClick={this.decrementButtonClick}>Decrement -</a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

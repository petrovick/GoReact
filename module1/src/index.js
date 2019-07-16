import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import Button from "./Button";
import "./style.scss";

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    console.log("Teste");
    return (
      <Fragment>
        <h1 className="title"> Hello Rocketseat </h1>
        <h2 style={{ color: "#F00" }}> {this.state.counter}</h2>
        <Button onClick={this.handleClick}> Somar </Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));

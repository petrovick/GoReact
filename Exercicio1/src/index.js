import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import Post from "./Post";
import "./style.scss";

class App extends Component {
  state = {
    counter: 0,
    dados: []
  };

  componentDidMount() {
    this.setState({
      // [
      dados: {
        id: "1",
        nome: "Diego Schell",
        avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4",
        tempoPost: 3,
        text: "Text Muito Longo"
      } /*,
        {
          id: "2",
          avatar: "avatar teste 2",
          tempoPost: 4,
          text: "Text Muito Longo"
        },
        {
          id: "3",
          avatar: "avatar teste 3",
          tempoPost: 5,
          text: "Text Muito Longo 3"
        }*/
      //]
    });
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <Fragment>
        <Post dados={this.state.dados} />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));

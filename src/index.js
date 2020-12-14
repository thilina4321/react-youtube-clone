import ReactDOM from "react-dom";
import React, { Component } from "react";

import Season from './Season/SeasonDisplay'

class App extends Component {
  state = {
    lat: null,
    errorMsg: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      (e) => {
        this.setState({ errorMsg: e.message });
      }
    );
  }

  render() {
    return (
      <div>
      <Season lat={this.state.lat}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

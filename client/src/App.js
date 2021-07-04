import React, { Component } from 'react';
import axios from "axios";

import Card from "./components/card/Card.js"


class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")

        .then(res => {
          const players = res.data;
          this.setState({ players });
          console.log(res);
        })
    }

    render() {
      return (
        <div className="App">
          <Card players={this.state.players} />
        </div>
      )
    }
  }
export default App;

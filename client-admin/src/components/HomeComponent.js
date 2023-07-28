import React, { Component } from 'react';
import bugati from "../img/bugati.jpg"

class Home extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">ADMIN HOME</h2>
        <img src={bugati} width="800px" height="600px" alt="" />
      </div>
    );
  }
}
export default Home;
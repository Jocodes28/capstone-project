import React, { Component } from "react";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }
  componentDidMount() {
    const selectedId = this.props.match.params.selectedId;
    fetch(`https://rickandmortyapi.com/api/character/${selectedId}`);
  }
  render() {
    return (
      <div>
        <h2>Name</h2>
        <img src></img>
        <strong>Species: </strong>
        <strong>Status: </strong>
        <strong>Gender: </strong>
        <strong>Origin: </strong>
      </div>
    );
  }
}

export default Characters;

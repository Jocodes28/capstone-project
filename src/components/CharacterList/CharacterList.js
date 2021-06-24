import React, { Component } from "react";
import jsonData from "../../characters.json";
import "./CharacterList.css";

import { Link } from "react-router-dom";

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTotal: 0,
    };
  }

  //   componentDidMount() {
  //     this.allId();
  //     console.log(this.state.characterArray);
  //     fetch(`capstone-project\src\characters.json`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         this.setState({
  //           characterArray: data,
  //         });
  //         console.log("characters", this.state.characterArray);
  //       });
  //   }

  //this function sorts through and alphabetizes the objects within the array in the json file
  dynamicSort(property) {
    let sortOrder = 1;

    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      if (sortOrder === -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    };
  }
  render() {
    jsonData.sort(this.dynamicSort("name"));
    console.log(jsonData);
    let aArray = jsonData.filter((data) => data.name.startsWith("A"));
    let bArray = jsonData.filter((data) => data.name.startsWith("B"));
    let cArray = jsonData.filter((data) => data.name.startsWith("C"));
    let dArray = jsonData.filter((data) => data.name.startsWith("D"));
    let eArray = jsonData.filter((data) => data.name.startsWith("E"));
    let fArray = jsonData.filter((data) => data.name.startsWith("F"));
    let gArray = jsonData.filter((data) => data.name.startsWith("G"));
    let hArray = jsonData.filter((data) => data.name.startsWith("H"));
    let iArray = jsonData.filter((data) => data.name.startsWith("I"));
    let jArray = jsonData.filter((data) => data.name.startsWith("J"));
    let kArray = jsonData.filter((data) => data.name.startsWith("K"));
    let lArray = jsonData.filter((data) => data.name.startsWith("L"));
    let mArray = jsonData.filter((data) => data.name.startsWith("M"));
    let nArray = jsonData.filter((data) => data.name.startsWith("N"));
    let oArray = jsonData.filter((data) => data.name.startsWith("O"));
    let pArray = jsonData.filter((data) => data.name.startsWith("P"));
    let qArray = jsonData.filter((data) => data.name.startsWith("Q"));
    let rArray = jsonData.filter((data) => data.name.startsWith("R"));
    let sArray = jsonData.filter((data) => data.name.startsWith("S"));
    let tArray = jsonData.filter((data) => data.name.startsWith("T"));
    let uArray = jsonData.filter((data) => data.name.startsWith("U"));
    let vArray = jsonData.filter((data) => data.name.startsWith("V"));
    let wArray = jsonData.filter((data) => data.name.startsWith("W"));
    let xArray = jsonData.filter((data) => data.name.startsWith("X"));
    let yArray = jsonData.filter((data) => data.name.startsWith("Y"));
    let zArray = jsonData.filter((data) => data.name.startsWith("Z"));
    let numArray = jsonData.filter((data) => data.name.startsWith("8"));

    return (
      <div className="characterContainer">
        <div>
          <ul className="aContainer">
            <h1>A</h1>
            {aArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`} className="aContainer">
                  <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul>
            <h1>B</h1>
            {bArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul>
          <h1>C</h1>
          {cArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>D</h1>
          {dArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>E</h1>
          {eArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>F</h1>
          {fArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>G</h1>
          {gArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>H</h1>
          {hArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>I</h1>
          {iArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>J</h1>
          {jArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>K</h1>
          {kArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>L</h1>
          {lArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>M</h1>
          {mArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>N</h1>
          {nArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>O</h1>
          {oArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>P</h1>
          {pArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>Q</h1>
          {qArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>R</h1>
          {rArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>S</h1>
          {sArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>T</h1>
          {tArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>U</h1>
          {uArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>V</h1>
          {vArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
        <h1>W</h1>
          {wArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/charactesr/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
        <h1>X</h1>
          {xArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
        <h1>Y</h1>
          {yArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>Z</h1>
          {zArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h1>#</h1>
          {numArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link className="li-link-color" to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CharacterList;

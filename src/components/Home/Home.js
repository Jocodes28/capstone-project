import React, { Component } from "react";
// import Image from "react-bootstrap/Image";
import { Carousel } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: [],
      filterCharacters: [],
    };
  }
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        // console.log("this is data from home api", data);
        this.setState({ allCharacters: data.results });
        // console.log("this is all chracters", this.state.allCharacters);
      })
      .catch((error) => console.log(error));
  }

  render() {
    let rickSanchez = this.state.allCharacters.map((element) => {
      if (element.name === "Rick Sanchez") {
        return (
          <div>
            <h1>{element.name}</h1>
          </div>
        );
      }
    });

    let mortySmith = this.state.allCharacters.map((element) => {
      if (element.name === "Morty Smith") {
        // console.log("this is an element", element.image);
        return (
          <div>
            <h1>{element.name}</h1>
          </div>
        );
      }
    });

    let summerSmith = this.state.allCharacters.map((element) => {
      if (element.name === "Summer Smith") {
        return (
          <div>
            <h1>{element.name}</h1>
          </div>
        );
      }
    });

    let bethSmith = this.state.allCharacters.map((element) => {
      if (element.name === "Beth Smith") {
        return (
          <div>
            <h1>{element.name}</h1>
          </div>
        );
      }
    });

    let jerrySmith = this.state.allCharacters.map((element) => {
      if (element.name === "Jerry Smith") {
        return (
          <div>
            <h1>{element.name}</h1>
          </div>
        );
      }
    });
    //       return (
    // <div>
    //   <h1>{element.name}</h1>
    // </div>
    //       ):
    // return(

    // )
    // })
    return (
      <div className="carouselDiv">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/carousel-wide-mirror.png"
              alt="First slide"
            />
            <Carousel.Caption className="carouselInfo">
              <img src="/images/rick05.jpg" alt="rick" />

              <Link to="/characters/1" className="linkColorClass">
                {rickSanchez}
              </Link>
              <p className="quoteColorClass">
                “Can somebody just let me out of here? If I die in a cage I lose
                a bet.”
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/carousel-wide-mirror.png"
              alt="First slide"
            />
            <Carousel.Caption className="carouselInfo">
              <img src="/images/morty05.jpg" alt="morty" />
              <Link to="/characters/2" className="linkColorClass">
                {mortySmith}
              </Link>
              <p className="quoteColorClass">
                “Nobody exists on purpose, nobody belongs anywhere, everybody's
                gonna die. Come watch TV.”
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/carousel-wide-mirror.png"
              alt="Third slide"
            />

            <Carousel.Caption className="carouselInfo">
              <img src="/images/summer05.jpg" alt="beth" />

              <Link to="/characters/3" className="linkColorClass">
                {summerSmith}
              </Link>
              <p className="quoteColorClass">
                “Camping is just being homeless without the change.”
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/carousel-wide-mirror.png"
              alt="Third slide"
            />

            <Carousel.Caption className="carouselInfo">
              <img src="/images/beth05.jpg" alt="beth" />
              <Link to="/characters/4" className="linkColorClass">
                {bethSmith}
              </Link>
              <p className="quoteColorClass">
                "I'm sorry you feel you deserve an apology."
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/carousel-wide-mirror.png"
              alt="Third slide"
            />
            <Carousel.Caption className="carouselInfo">
              <img src="/images/jerry05.jpg" alt="beth" />

              <Link to="/characters/5" className="linkColorClass">
                {jerrySmith}
              </Link>
              <p className="quoteColorClass">
                "If the shoe fits, buy it in every color."
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Home;

import React from "react";

import Slide1 from "../../../assets/slides/slide1.jpg";
import Slide2 from "../../../assets/slides/slide2.jpg";
import Slide3 from "../../../assets/slides/slide3.jpg";
import "./SlideShow.scss";
class SlideShow extends React.Component {
  state = {
    slideIndex: 1,
    slides: [
      {
        img: Slide1,
        text: "Img 1"
      },
      {
        img: Slide2,
        text: "Img 2"
      },
      {
        img: Slide3,
        text: "Img 3"
      }
    ]
  };

  componentDidMount() {
    this.id = setInterval(this.showSlides, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  showSlides = () => {
    this.setState({
      slideIndex: (this.state.slideIndex % 3) + 1
    });
  };

  render() {
    return (
      <div className="slideshow-section">
        <div className="slideshow-container">
          {this.state.slides.map((slide, i) => (
            <div
              key={200 + i}
              className={
                this.state.slideIndex === i + 1
                  ? "active mySlides fade"
                  : "mySlides fade"
              }
              style={{
                display: this.state.slideIndex === i + 1 ? "block" : "none",
                width: "100%",
                height: "auto"
              }}
            >
              <img
                src={slide.img}
                alt="slide"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
        <br />
      </div>
    );
  }
}

export default SlideShow;

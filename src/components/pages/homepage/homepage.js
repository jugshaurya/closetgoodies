import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SlideShow from "./SlideShow";
import Banners from "./Banners";

import Home1 from "../../../assets/hompage/home1.webp";
import Home2 from "../../../assets/hompage/home2.webp";
import Home3 from "../../../assets/hompage/home3.webp";
import Home4 from "../../../assets/hompage/home4.webp";
import "./homepage.scss";

class HomePage extends React.Component {
  state = {
    sections: [
      {
        img: Home1,
        link: "/shop/men",
        name: "Men"
      },
      {
        img: Home2,
        link: "/shop/women",
        name: "Women"
      },
      {
        img: Home3,
        link: "/shop/boys",
        name: "Boy"
      },
      {
        img: Home4,
        link: "/shop/girls",
        name: "Girl"
      }
    ]
  };

  render() {
    return (
      <div className="homepage">
        <div className="container">
          <header className="heading">
            <h2>Closet Goodies</h2>
            <h4>Exclusive Wears for Men, Women, Boys and Girls</h4>
          </header>
          <SlideShow />
          {/* <div className="slideshow"></div> */}

          <Banners />
          <div className="homepage-sections">
            {this.state.sections.map((section, i) => (
              <div className="homepage-section" key={600 + i}>
                <img src={section.img} alt="sectionpic" />

                <div className="homepage-section-outer-box">
                  <div className="homepage-section-inner-box">
                    <div className="texta">
                      SHOP FOR {section.name.toUpperCase()}
                    </div>
                    <p className="textb">
                      Fill your closet with our top {section.name.toLowerCase()}
                      's collection, choose from variety of products.
                    </p>
                    <Link to={section.link} className="homepage-section-button">
                      SHOP
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sections: state.data.sections
});

export default connect(mapStateToProps)(HomePage);

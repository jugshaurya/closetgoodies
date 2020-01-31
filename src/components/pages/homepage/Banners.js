import React from "react";

import "./Banners.scss";
import { ReactComponent as Banner1 } from "../../../assets/banners/banner1.svg";
import { ReactComponent as Banner2 } from "../../../assets/banners/banner2.svg";
import { ReactComponent as Banner3 } from "../../../assets/banners/banner3.svg";
class Banners extends React.Component {
  state = {
    banners: [
      { svg: Banner1, text: "Free Returns and Exchange" },
      { svg: Banner2, text: "10% Discount with Code: GOODIES" },
      { svg: Banner3, text: "Free Delievery on Order Rs.1500" }
    ]
  };

  getBannerComp(i) {
    if (i + 1 === 1) return <Banner1 />;
    if (i + 1 === 2) return <Banner2 />;
    if (i + 1 === 3) return <Banner3 />;
  }

  render() {
    return (
      <div className="banner-section">
        <div className="banner-container">
          {this.state.banners.map((banner, i) => (
            <div className="banner" key={400 + i}>
              <div className="banner-svg">{this.getBannerComp(i)}</div>
              <div className="banner-text">{banner.text}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Banners;

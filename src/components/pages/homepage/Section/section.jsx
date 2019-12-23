import React from "react";
import "./section.styles.css";
const Section = ({ type, data }) => {
  return (
    <div className="section">
      <header>
        <div className="left">{type}</div>
        <div className="right">Go to {type} Store</div>
      </header>
      <main>
        <div className="items">
          <div className="top">
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
          </div>
          <div className="bottom">
            <div className="item">6</div>
            <div className="item">7</div>
            <div className="item">8</div>
            <div className="item">9</div>
            <div className="item">See All</div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Section;

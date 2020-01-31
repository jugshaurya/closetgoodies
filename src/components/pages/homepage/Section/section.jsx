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
            {data.map((urlSrc, idx) => {
              if (idx < 5) {
                return (
                  <div className="item">
                    <img src={urlSrc} alt="product" />
                  </div>
                );
              }
            })}
          </div>
          <div className="bottom">
            {data.map((urlSrc, idx) => {
              if (idx >= 5) {
                return (
                  <div className="item">
                    <img src={urlSrc} alt="product" />
                  </div>
                );
              }
            })}
            <div className="item">See All</div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Section;

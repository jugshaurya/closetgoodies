import React from "react";
// other Component Import
import SectionItem from "./sectionItem";
// style Import
import "./homepage.styles.css";

class HomePage extends React.Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "hats"
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "jackets"
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "sneakers"
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: "womens"
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        linkUrl: "mens"
      }
    ]
  };

  render() {
    const { sections } = this.state;
    return (
      <div className="home-page">
        <div className="menu">
          {sections.map(menuItem => (
            <SectionItem item={menuItem} key={menuItem.id} {...this.props} />
          ))}
        </div>

        {/* Website-logo */}
        <div style={{ background: "rgba(10,10,10,0.1)" }}>
          <img src="./icon.png" alt="Logo" />
        </div>
      </div>
    );
  }
}

export default HomePage;

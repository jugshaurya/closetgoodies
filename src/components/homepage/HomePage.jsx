import React from "react";
import "./homepage.style.css";
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
        linkUrl: ""
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: ""
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: ""
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        linkUrl: ""
      }
    ]
  };

  render() {
    return (
      <div className="home-page">
        <div className="menu">
          {this.state.sections.map(menuItem => (
            <div
              key={menuItem.id}
              className={`menu-item ${menuItem.size}`}
              // onClick={() => history.push(`${match.url}${menuItem.linkUrl}`)}
            >
              <div
                className="background-image"
                style={{
                  backgroundImage: `url(${menuItem.imageUrl})`
                }}
              />
              <div className="content">
                <h1 className="title">{menuItem.title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;

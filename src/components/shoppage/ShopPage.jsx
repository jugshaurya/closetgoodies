import React from "react";

import SHOP_DATA from "../../assets/shop.data";
import "./shoppage.style.css";

class ShopPage extends React.Component {
  state = {
    db: SHOP_DATA
  };

  render() {
    const { db } = this.state;
    return (
      <div className="shop-page">
        {db.map(collection => (
          <div className="collection" key={collection.id}>
            <h1 className="title">{collection.title.toUpperCase()}</h1>
            <div className="docs">
              {collection.items
                .filter((val, id) => id < 3)
                .map(doc => (
                  <div className="doc" key={doc.id}>
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url(${doc.imageUrl})`
                      }}
                    />
                    <div className="doc-footer">
                      <span className="name">{doc.name}</span>
                      <span className="price">${doc.price}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ShopPage;

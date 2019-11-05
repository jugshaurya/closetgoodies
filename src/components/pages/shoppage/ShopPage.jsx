import React from "react";
import ShopTypeCollection from "./ShopTypeCollection";
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
          <ShopTypeCollection key={collection.id} collection={collection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

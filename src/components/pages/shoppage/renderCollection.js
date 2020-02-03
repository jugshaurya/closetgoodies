import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./renderCollection.scss";
import { addToCart } from "../../../redux/cart/cart.actions";
const RenderCollection = props => {
  const { history, addToCart } = props;
  // if props value is null simply return
  if (!props.collection) {
    return <></>;
  }

  return (
    <div className="shoppage-section">
      <div className="container">
        <div className="section-name">
          <span>{props.collectionName} </span> Closet
        </div>
        {props.collection.map((collection, i) => (
          <div className="collection" key={collection.id}>
            <h3 className="collection-header">
              {collection.title.toUpperCase()}
            </h3>
            <div className="collection-items">
              {collection.items.map(item => (
                <div className="item" key={item.id}>
                  <div className="image">
                    <img
                      src={item.imageUrl}
                      alt="itempic"
                      onClick={() => addToCart(item)}

                      // onClick={() =>
                      //   history.push(
                      //     `/shop/${props.collectionName}/${encodeURI(
                      //       item.name
                      //         .split(" ")
                      //         .join("")
                      //         .toLowerCase()
                      //     )}`
                      //   )
                      // }
                    />
                  </div>
                  <p className="name">{item.name}</p>
                  <p className="price">
                    <span>Rs.</span>
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default withRouter(connect(null, mapDispatchToProps)(RenderCollection));

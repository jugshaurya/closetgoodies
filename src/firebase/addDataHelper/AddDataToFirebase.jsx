import React, { Component } from "react";

import { addShopDataToFirestore } from "../helpers.firebase";
import SHOP_DATA from "./shop.data.js";
// const fs = require("fs");
class AddDataToFirebase extends Component {
  getData = () => {
    console.log(SHOP_DATA);
    const objectKeys = Object.keys(SHOP_DATA);
    const result = objectKeys.reduce((accu, item) => {
      return [...accu, { [item]: SHOP_DATA[item] }];
    }, []);
    console.log(result);
    return result;
  };

  componentDidMount() {
    addShopDataToFirestore("products", this.getData());
  }

  render() {
    return <h1>Add please</h1>;
  }
}

export default AddDataToFirebase;

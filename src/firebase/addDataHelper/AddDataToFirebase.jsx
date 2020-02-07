import React, { Component } from "react";
import { addShopDataToFirestore } from "../helpers.firebase";

// import data file of which data you want to import to firebase
import ACTUAL_DATA from "./actual.data.js";

class AddDataToFirebase extends Component {
  getData = () => {
    return ACTUAL_DATA;
  };

  componentDidMount() {
    addShopDataToFirestore("data", this.getData());
  }

  render() {
    return null;
  }
}

export default AddDataToFirebase;

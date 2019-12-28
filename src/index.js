import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Store Import
import store from "./redux/store";
import App from "./App";
// import AddDataToFirebase from "./firebase/addDataHelper/AddDataToFirebase";
// CSS Import
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      {/* Run if new data is required to add inside Firestore with new data in shop.data.js */}
      {/* <AddDataToFirebase /> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

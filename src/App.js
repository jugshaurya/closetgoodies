import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/HomePage";
import ShopPage from "./components/shoppage/ShopPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

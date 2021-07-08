import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS Page</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

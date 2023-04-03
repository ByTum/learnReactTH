import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Order from "./containers/order/Order";
import Product from "./containers/product/Product";
import NotFound from "./containers/error/NotFound";

class App extends Component {
  renderRouter() {
    return (
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/orders" Component={Order} />
        <Route exact path="/products" Component={Product} />
        <Route exact path="*" Component={NotFound} />
      </Routes>
    );
  }

  render() {
    return <BrowserRouter> {this.renderRouter()} </BrowserRouter>;
  }
}
export default App;

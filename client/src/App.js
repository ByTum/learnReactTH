import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";

class App extends Component {
  renderRouter() {
    return (
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
      </Routes>
    );
  }

  render() {
    return <BrowserRouter> {this.renderRouter()} </BrowserRouter>;
  }
}
export default App;

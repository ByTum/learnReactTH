import React, { Component } from "react";

/*
const Header = () => {
  return <h1>Header</h1>;
};
export default Header;
*/

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()} </h1>
      </div>
    );
  }
}

export default Header;

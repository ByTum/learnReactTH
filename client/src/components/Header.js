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
    // setInterval(() => this.tick(), 1000);
    // console.log("constructor");
  }

  componentDidMount() {
    // console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    // const style = { height: 70 };

    return (
      <div className="containter-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-success">
              <img style={{ height: 70 }} src="/images/logo/logo.png" alt="" />
              เฮลตี้ คาเฟ่
            </h1>
          </div>
          <div className="col-md-4 text-right">
            <h5 className="text-muted mt-4">
              {this.state.date.toLocaleTimeString()}
            </h5>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;

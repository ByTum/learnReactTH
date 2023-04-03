import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              <ul className="list-inline">
                <li className="list-inline-item title">
                  <Link className="text-success" to="/">
                    หน้าหลัก
                  </Link>
                </li>
                <li className="list-inline-item title">|</li>
                <li className="list-inline-item title">
                  <Link className="text-success" to="/orders">
                    รายการสั่งซื้อ
                  </Link>
                </li>
                <li className="list-inline-item title">|</li>
                <li className="list-inline-item title">
                  <Link className="text-success" to="/products">
                    สินค้า
                  </Link>
                </li>
                <li className="list-inline-item title">|</li>
                <li className="list-inline-item title">
                  <Link className="text-success" to="/about">
                    เกี่ยวกับเรา
                  </Link>
                </li>
              </ul>
            </h5>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;

import React, { Component } from "react";
import Header from "../components/Header";
import Moniter from "../components/moniter/Moniter";
import Footer from "../components/Footer";
// import ProductItem from "./components/product/ProductItem";
// import axios from "axios";
import { connect } from "react-redux";
import { productsFetch } from "../actions/index";

class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = { products: "" };
  }

  componentDidMount() {
    // solution 1
    /* 
    this.setState({
      products: [
        {
          productId: 1,
          productName: "สลัดผัก",
          unitPrice: "120",
          thumbnail: "/images/product/1.jpg",
        },
        {
          productId: 2,
          productName: "ไก่ทอด",
          unitPrice: "90",
          thumbnail: "/images/product/2.jpg",
        },
        {
          productId: 3,
          productName: "บิงซู",
          unitPrice: "200",
          thumbnail: "/images/product/3.jpg",
        },
        {
          productId: 4,
          productName: "เฟรนฟราย",
          unitPrice: "140",
          thumbnail: "/images/product/4.jpg",
        },
        {
          productId: 5,
          productName: "เค้ก 3 ชั้น",
          unitPrice: "200",
          thumbnail: "/images/product/5.jpg",
        },
        {
          productId: 6,
          productName: "กาแฟ เฮลตี้ฟู้ด",
          unitPrice: "140",
          thumbnail: "/images/product/6.jpg",
        },
      ],
    });
    */
    // solution 2 get data from api
    /*
    fetch("http://localhost:3001/products", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ products: res });
      });
      */
    //  solution 3 axios
    /*
    axios.get("http://localhost:3001/products").then((res) => {
    console.log(res.data);
      {
        this.setState({ products: res.data });
      }
    });
    */
    // solution 4 redux
    this.props.productsFetch();
  }

  render() {
    return (
      <div className="Home">
        <Header />
        {/* <ProductItem productName="Iphone" unitPrice="45000" />
        <ProductItem productName="I Pad" unitPrice="20000" />
        <ProductItem productName="I Pod" unitPrice="5000" /> */}
        <Moniter products={this.props.products} />
        <Footer firstname="tum" lastname="tum lastname" />
      </div>
    );
  }
}
// function mapStateTuProps(state) {
// deconstructor
function mapStateToProps({ products }) {
  // console.log(state);
  // state from store redux
  // return { products: state.products };
  return { products };
}

export default connect(mapStateToProps, { productsFetch })(Home);

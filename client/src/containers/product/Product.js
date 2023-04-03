import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
// import withRouter from "../../components/WithRouter";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";
import { productsFetch, productsDelete } from "../../actions";

export const withRouter = (Component) => {
  return (props) => <Component {...props} navigate={useNavigate()} />;
};

class Product extends Component {
  constructor(props) {
    super(props);
    // this.state = { products: null };
    this.delProduct = this.delProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
    // axios.get("http://localhost:3001/products").then((res) => {
    //   this.setState({ products: res.data });
    // });
    this.props.productsFetch();
  }

  editProduct(product) {
    // this.props.history.push(`product/edit/${product.id}`, null);
    // this.props.history(`edit/${product.id}`);
    this.props.navigate(`edit/${product.id}`);
  }

  delProduct(product) {
    // axios.delete("http://localhost:3001/products/" + product.id).then((res) => {
    //   axios.get("http://localhost:3001/products").then((res) => {
    //     this.setState({ products: res.data });
    //   });
    // });
    this.props.productsDelete(product.id);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h1>สินค้า</h1>
            </div>
            <div className="col-6">
              <button
                className="btn btn-success title float-right"
                // onClick={() => this.props.history("add")}
                onClick={() => this.props.navigate("add")}
              >
                เพิ่ม
              </button>
            </div>
          </div>
          <ProductList
            products={this.props.products}
            onDelProduct={this.delProduct}
            onEditProduct={this.editProduct}
          />
        </div>
        <Footer firstname="tum" lastname="tum lastname" />
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

// export default (props) => <Product history={useNavigate()} />;

// export default function (props) {
//   const history = useNavigate();
//   return <Product history={history} />;
// }

// export default connect(mapStateToProps, { productsFetch, productsDelete })(
//   Product
// );

export default withRouter(
  connect(mapStateToProps, { productsFetch, productsDelete })(Product)
);

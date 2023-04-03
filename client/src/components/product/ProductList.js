import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  showProducts() {
    // if (this.props.products) {
    //   return this.props.products.map((product) => (
    //     <ProductItem
    //       productName={product.productName}
    //       unitPrice={product.unitPrice}
    //     />
    //   ));
    // }
    return (
      // check data is exits ?
      this.props.products &&
      this.props.products.map((product) => (
        // <ProductItem
        //   productName={product.productName}
        //   unitPrice={product.unitPrice}
        // />

        // Spread Operator
        // react want key
        <ProductItem
          key={product.id}
          product={product}
          onAddOrder={this.props.onAddOrder}
          // get props from component Product.js
          onDelProduct={this.props.onDelProduct}
          onEditProduct={this.props.onEditProduct}
        />
      ))
    );
  }

  render() {
    return <div className="row">{this.showProducts()}</div>;
  }
}
export default ProductList;

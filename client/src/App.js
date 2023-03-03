import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductItem from "./components/product/ProductItem";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductItem productName="Iphone" unitPrice="45000" />
      <ProductItem productName="I Pad" unitPrice="20000" />
      <ProductItem productName="I Pod" unitPrice="5000" />
      <Footer firstname="tum" lastname="tum lastname" />
    </div>
  );
}

export default App;

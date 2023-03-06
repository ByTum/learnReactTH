import React from "react";

const Footer = (props) => {
  const { firstname, lastname } = props;

  return (
    <div className="container-fluid">
      <hr />
      <div className="text-center title text-uppercase ">
        <small>
          <span className="text-danger">By : {firstname}</span> |
          <span className="text-muted"> Contact : {lastname}</span>
        </small>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = (props) => {
  const { firstname, lastname } = props;

  return (
    <div>
      <h1>
        Footer {firstname} {lastname}
      </h1>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = ({ lenght }) => {
  return (
    <footer>
      {lenght} List {lenght > 1 ? "items" : "item"}{" "}
    </footer>
  );
};

export default Footer;

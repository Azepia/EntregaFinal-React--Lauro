import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import './css/main.css';

ReactDOM.render(<App />, document.getElementById("root"));

const Footer = () => {
    return (
      <footer>
        <p>Proyecto eCommerce con React</p>
        <PaymentMethod />
      </footer>
    );
  };


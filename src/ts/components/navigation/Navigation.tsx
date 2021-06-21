import React from "react";
import PropTypes from "prop-types";
import { NavBar, Cart } from "./Navigation.styles";
import logo from "./logo-primary.svg";
import cart from "./IconCart.svg";

type NavPropsType = {
  total: string;
};

const Navigation = (props: NavPropsType) => {
  return (
    <NavBar>
      <img className="logo" src={logo} />
      <Cart>
        <img className="cart" src={cart} />
        <span className="value">{props.total}</span>
      </Cart>
    </NavBar>
  );
};

Navigation.propTypes = {
  total: PropTypes.string,
};

export default Navigation;

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CartList from "../CartList/CartList";
import axios from "axios";
import { connect } from "react-redux";
class Cart extends PureComponent {
  render() {
    const { cartList } = this.props;
    return <CartList cartList={cartList} />;
  }
}

Cart.propTypes = {};

const mapStateToProps = state => {
  return {
    cartList: state.cartReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(Cart);

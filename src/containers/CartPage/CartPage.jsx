import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import CartList from "../../components/CartList/CartList";
import { connect } from "react-redux";
import {
  actPlusProductInCart,
  actMinusProductInCart
} from "../../actions/index";

class CartPage extends PureComponent {
  render() {
    const {
      cart,
      onUpdatePlusProductInCart,
      onUpdateMinusProductInCart
    } = this.props;
    return (
      <CartList
        cart={cart}
        onUpdatePlusProductInCart={onUpdatePlusProductInCart}
        onUpdateMinusProductInCart={onUpdateMinusProductInCart}
      />
    );
  }
}

CartPage.propTypes = {};
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdatePlusProductInCart: product => {
      dispatch(actPlusProductInCart(product, 1));
    },
    onUpdateMinusProductInCart: product => {
      dispatch(actMinusProductInCart(product, 1));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CartItem from "../CartItem/CartItem";

class CartList extends PureComponent {
  render() {
    const { cartList } = this.props;
    return (
      <tbody>
        {cartList.map(cartItem => (
          <CartItem cartItem={cartItem}>{console.log(cartItem)}</CartItem>
        ))}
        <tr>
          <td colSpan={3} />
          <td>
            <h4>
              <strong>Tổng Tiền</strong>
            </h4>
          </td>
          <td>
            <h4>
              <strong>15$</strong>
            </h4>
          </td>
          <td colSpan={3}>
            <button
              type="button"
              className="btn btn-primary waves-effect waves-light"
            >
              Complete purchase
              <i className="fa fa-angle-right right" />
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

CartList.propTypes = {
  cartList: PropTypes.array.isRequired
};

export default CartList;

import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class CartItem extends PureComponent {
  render() {
    const { cartItem } = this.props;
    const { productItem } = cartItem;
    return (
      <tr>
        <th scope="row">
          <img src={productItem.image} alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{productItem.name}</strong>
          </h5>
        </td>
        <td>${productItem.salePrice}</td>
        <td className="center-on-small-only">
          <span className="qty">{cartItem.quantity} &nbsp;</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                              btn-rounded waves-effect waves-light"
            >
              <a>-</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                                              btn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>${productItem.salePrice * cartItem.quantity}</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title
            data-original-title="Remove item"
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired
};

export default CartItem;

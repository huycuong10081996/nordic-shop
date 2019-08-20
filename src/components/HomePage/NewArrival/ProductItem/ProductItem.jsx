import React, { PureComponent } from "react";
import PropTypes from "prop-types";
// import "./ProductItem.scss";
import { Link } from "react-router-dom";
import style from "./ProductItem.scss";
class ProductItem extends PureComponent {
  handleAddToCartBtnClick = productItem => {
    this.props.onAddToCartBtn(productItem);
    console.log(productItem);
  };

  render() {
    const { productItem, onProductItemClick } = this.props;
    return (
      <div
        className="product-item homepage"
        // onClick={() => onProductItemClick(productItem)}
      >
        <div className="product discount product_filter">
          <div className="product_image">
            <img src={productItem.image} alt="" />
          </div>
          <div className="favorite favorite_left" />
          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
            <span>-$20</span>
          </div>
          <div className="product_info">
            <h6 className="product_name">
              <Link to={`/single/${productItem.id}`}>{productItem.name}</Link>
            </h6>
            <div className="product_price">
              ${productItem.salePrice}
              <span>${productItem.originalPrice}</span>
            </div>
          </div>
        </div>
        <div className="red_button add_to_cart_button">
          <a onClick={() => this.handleAddToCartBtnClick(productItem)}>
            add to cart
          </a>
        </div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  productItem: PropTypes.object.isRequired,
  onProductItemClick: PropTypes.func
};

export default ProductItem;

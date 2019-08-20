import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./ProductCategoriesItem.scss";
class ProductCategoriesItem extends PureComponent {
  render() {
    const { productCategoriesItem } = this.props;
    return (
      <div className="product-item">
        <div className="product discount product_filter">
          <div className="product_image">
            <img src={productCategoriesItem.image} alt="" />
          </div>
          <div className="favorite favorite_left" />
          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
            <span>-$20</span>
          </div>
          <div className="product_info">
            <h6 className="product_name">
              <a href="single.html">{productCategoriesItem.name}</a>
            </h6>
            <div className="product_price">
              ${productCategoriesItem.salePrice}
              <span>${productCategoriesItem.originalPrice}</span>
            </div>
          </div>
        </div>
        <div className="red_button add_to_cart_button">
          <a href="#">add to cart</a>
        </div>
      </div>
    );
  }
}

ProductCategoriesItem.propTypes = {
  productCategoriesItem: PropTypes.object.isRequired
};

export default ProductCategoriesItem;

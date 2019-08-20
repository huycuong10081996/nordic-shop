import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";
class ProductList extends PureComponent {
  // gotoProductDetailPage = product => {
  //   const { history } = this.props;
  //   const productDetailUrl = `/single/${product.id}`;
  //   history.push(productDetailUrl);
  //   console.log("his", history);
  // };

  render() {
    const { productList, onAddToCartBtn } = this.props;

    return (
      <div
        className="product-grid"
        data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'
      >
        {productList.map(productItem => (
          <ProductItem
            key={productItem.id}
            productItem={productItem}
            onAddToCartBtn={onAddToCartBtn}
          />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.array.isRequired
  // history: PropTypes.func
};

export default ProductList;

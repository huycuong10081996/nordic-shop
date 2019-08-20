import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./ProductCategoriesList.scss";
import ProductCategoriesItem from "../ProductCategoriesItem/ProductCategoriesItem";
class ProductCategoriesList extends PureComponent {
  render() {
    const { productCategoriesList } = this.props;

    return (
      <div className="product-grid">
        {productCategoriesList.map(productCategoriesItem => (
          <ProductCategoriesItem
            key={productCategoriesItem.id}
            productCategoriesItem={productCategoriesItem}
          />
        ))}
      </div>
    );
  }
}

ProductCategoriesList.propTypes = {
  productCategoriesList: PropTypes.array.isRequired
};

export default ProductCategoriesList;

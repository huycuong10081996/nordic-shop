import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class CategoryItem extends PureComponent {
  render() {
    const { categoryItem, onCategoriesItemClick } = this.props;
    return (
      <li
        key={categoryItem.id}
        className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked"
        data-filter="*"
        onClick={() => onCategoriesItemClick(categoryItem.id)}
      >
        {categoryItem.name}
      </li>
    );
  }
}

CategoryItem.propTypes = {
  categoryItem: PropTypes.object.isRequired,
  onCategoriesItemClick: PropTypes.func
};

CategoryItem.defaultProps = {
  onCategoriesItemClick: null
};

export default CategoryItem;

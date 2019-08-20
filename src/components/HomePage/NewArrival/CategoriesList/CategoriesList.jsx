import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CategoryItem from "../CategoryItem/CategoryItem";
// import categoriesApi from "../../../api/categoriesApi";
class CategoriesList extends PureComponent {
  render() {
    const { categoriesList, onCategoriesItemClick } = this.props;
    return (
      <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
        {categoriesList.map(categoryItem => (
          <CategoryItem
            key={categoryItem.id}
            categoryItem={categoryItem}
            onCategoriesItemClick={onCategoriesItemClick}
          />
        ))}
      </ul>
    );
  }
}

CategoriesList.propTypes = {
  categoriesList: PropTypes.array.isRequired,
  onCategoriesItemClick: PropTypes.func
};

CategoriesList.defaultProps = {
  onCategoriesItemClick: null
};

export default CategoriesList;

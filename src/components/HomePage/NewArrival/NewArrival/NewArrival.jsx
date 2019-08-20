import React, { PureComponent } from "react";
import "./NewArrival.scss";
import ProductList from "../ProductList/ProductList";
import CategoriesList from "../CategoriesList/CategoriesList";
import axios from "axios";
import { addNewCart } from "../../../../actions/cart";
import { connect } from "react-redux";
class NewArrival extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      categoriesList: []
    };
  }
  handleSortingProductsByCategoryItem = async id => {
    try {
      let response = await axios.get(
        `http://api.demo.nordiccoder.com/api/categories/${id}/products`
      );
      this.setState({ productList: response.data.body });
    } catch (error) {
      throw error;
    }
  };
  componentDidMount = async () => {
    try {
      let productListResponse = await axios.get(
        `http://api.demo.nordiccoder.com/api/products`
      );
      let categoriesListResponse = await axios.get(
        `http://api.demo.nordiccoder.com/api/categories`
      );

      let dataProductList = productListResponse.data;
      let dataCategoriesList = categoriesListResponse.data;

      this.setState({
        productList: dataProductList.body,
        categoriesList: dataCategoriesList.body
      });
    } catch (error) {
      throw error;
    }
  };

  render() {
    const { productList, categoriesList } = this.state;
    const { onAddToCartBtn } = this.props;
    return (
      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col text-center">
              <div className="new_arrivals_sorting">
                <CategoriesList
                  categoriesList={categoriesList}
                  onCategoriesItemClick={
                    this.handleSortingProductsByCategoryItem
                  }
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ProductList
                productList={productList}
                onAddToCartBtn={onAddToCartBtn}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCartBtn: productItem => {
      dispatch(addNewCart(productItem, 1));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewArrival);

import React, { PureComponent } from "react";
import "./CategoryMainSort.scss";
import Axios from "axios";
import ProductListCategory from "../ProductListCategory/ProductListCategory";

import "react-input-range/lib/css/index.css";
import InputChange from "../InputChange/InputChange";
import { getParamsUrl } from "../../getParams.js";
class CategoryMainSort extends PureComponent {
  constructor(props) {
    super(props);

    //get param
    const urlParams = new URLSearchParams(window.location.search);
    const initPage = Number(urlParams.get("page"));
    const initShowProduct = Number(urlParams.get("show"));
    const minPrice = Number(urlParams.get("minPrice"));
    const maxPrice = Number(urlParams.get("maxPrice"));

    this.state = {
      productList: [],
      currentFilter: {
        sortBy: "salePrice",
        productPage: initShowProduct ? initShowProduct : 6,
        curentPage: initPage ? initPage : 1,
        totalProduct: 0,
        minPrice: minPrice ? minPrice : 300,
        maxPrice: maxPrice ? maxPrice : 750
      }
    };
  }

  changeSortBy = sortDefault => {
    const newState = {
      ...this.state,
      currentFilter: { ...this.state.currentFilter, sortBy: sortDefault }
    };
    this.setState(newState);
    
    this.getProductList(newState.currentFilter);
    this.props.redirect(getParamsUrl(newState.currentFilter));
  };
  getProductList = async filters => {
    const { sortBy, productPage, curentPage, minPrice, maxPrice } = filters;
    const filter = {
      order: sortBy,
      limit: productPage,
      skip: (curentPage - 1) * productPage,
      where: {
        salePrice: {
          between: [minPrice, maxPrice]
        }
      }
    };
    
    const params = JSON.stringify(filter);
    let response = await Axios.get(
      `http://api.demo.nordiccoder.com/api/products?filter=${params}`
    );
    
    this.setState({ ...this.state, productList: response.data.body });
  };

  getShowProductPage = productPage => {
    const newState = {
      ...this.state,
      currentFilter: { ...this.state.currentFilter, productPage }
    };
    this.setState(newState);
    
    this.getProductList(newState.currentFilter);
    this.props.redirect(getParamsUrl(newState.currentFilter));
  };
  handleInputChange = (minPrice, maxPrice) => {
    const newState = {
      ...this.state,
      currentFilter: { ...this.state.currentFilter, minPrice, maxPrice }
    };
    this.setState(newState);
    this.getProductList(newState.currentFilter);
    this.props.redirect(getParamsUrl(newState.currentFilter));
  };

  componentDidMount = async () => {
    
    this.getProductList(this.state.currentFilter);
    console.log(this.state.productList);
  };
  render() {
    const { productList } = this.state;
    const { onAddToCart } = this.props;
    const sortType = {
      default: "Default Sorting",
      name: "Product Name",
      salePrice: "Price"
    };
    const sortArray = Object.keys(sortType);

    
    return (
      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">
            {/* Breadcrumbs */}
            <div className="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">
                  <a href="index.html">
                    <i className="fa fa-angle-right" aria-hidden="true" />
                    Men's
                  </a>
                </li>
              </ul>
            </div>
            {/* Sidebar */}
            <div className="sidebar">
              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Product Category</h5>
                </div>
                <ul className="sidebar_categories">
                  <li>
                    <a href="#">Men</a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <span>
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </span>
                      Women
                    </a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">New Arrivals</a>
                  </li>
                  <li>
                    <a href="#">Collection</a>
                  </li>
                  <li>
                    <a href="categories.html">shop</a>
                  </li>
                </ul>
              </div>
              {/* Price Range Filtering */}
              <InputChange handleInputChange={this.handleInputChange} />
            </div>
            {/* Main Content */}
            <div className="main_content">
              {/* Products */}
              <div className="products_iso">
                <div className="row">
                  <div className="col">
                    {/* Product Sorting */}
                    <div className="product_sorting_container product_sorting_container_top">
                      <ul className="product_sorting">
                        <li>
                          <span className="type_sorting_text">
                            {sortType[this.state.currentFilter.sortBy]}
                          </span>
                          <i className="fa fa-angle-down" />
                          <ul className="sorting_type">
                            {sortArray.map(sortItem => (
                              <li
                                className={`type_sorting_btn ${
                                  sortItem === this.state.currentFilter.sortBy
                                    ? "active-selected"
                                    : ""
                                }`}
                                onClick={() => this.changeSortBy(sortItem)}
                              >
                                <span>{sortType[sortItem]}</span>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <span>Show</span>
                          <span className="num_sorting_text">
                            {this.state.currentFilter.productPage}
                          </span>
                          <i className="fa fa-angle-down" />
                          <ul className="sorting_num">
                            <li
                              className={`num_sorting_btn ${
                                6 === this.state.currentFilter.productPage
                                  ? "active-selected"
                                  : ""
                              }`}
                              onClick={() => this.getShowProductPage(6)}
                            >
                              <span>6</span>
                            </li>
                            <li
                              className={`num_sorting_btn ${
                                12 === this.state.currentFilter.productPage
                                  ? "active-selected"
                                  : ""
                              }`}
                              onClick={() => this.getShowProductPage(12)}
                            >
                              <span>12</span>
                            </li>
                            <li
                              className={`num_sorting_btn ${
                                24 === this.state.currentFilter.productPage
                                  ? "active-selected"
                                  : ""
                              }`}
                              onClick={() => this.getShowProductPage(24)}
                            >
                              <span>24</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                          <span>1</span>
                          <ul className="page_selection">
                            <li>
                              <a href="#">1</a>
                            </li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                          </ul>
                        </div>
                        <div className="page_total">
                          <span>of</span> 3
                        </div>
                        <div id="next_page" className="page_next">
                          <a href="#">
                            <i
                              className="fa fa-long-arrow-right"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <ProductListCategory
                      productList={productList}
                      onAddToCart={onAddToCart}
                    />

                    <div className="product_sorting_container product_sorting_container_bottom clearfix">
                      <ul className="product_sorting">
                        <li>
                          <span>Show:</span>
                          <span className="num_sorting_text">04</span>
                          <i className="fa fa-angle-down" />
                          <ul className="sorting_num">
                            <li className="num_sorting_btn">
                              <span>01</span>
                            </li>
                            <li className="num_sorting_btn">
                              <span>02</span>
                            </li>
                            <li className="num_sorting_btn">
                              <span>03</span>
                            </li>
                            <li className="num_sorting_btn">
                              <span>04</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <span className="showing_results">
                        Showing 1–3 of 12 results
                      </span>
                      <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                          <span>1</span>
                          <ul className="page_selection">
                            <li>
                              <a href="#">1</a>
                            </li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                          </ul>
                        </div>
                        <div className="page_total">
                          <span>of</span> 3
                        </div>
                        <div id="next_page_1" className="page_next">
                          <a href="#">
                            <i
                              className="fa fa-long-arrow-right"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CategoryMainSort.propTypes = {};

export default CategoryMainSort;

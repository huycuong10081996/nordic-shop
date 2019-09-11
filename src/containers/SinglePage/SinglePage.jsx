import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import ProductDetailTab from "../../components/ProductDetailTab/ProductDetailTab";
import Axios from "axios";
import { connect } from "react-redux";
import { actAddToCart } from "../../actions/index";

class SinglePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {},
      loading: true
    };
  }

  componentDidMount = async () => {
    let response = await Axios.get(
      `https://nc-shopping-api.herokuapp.com/api/products/${this.props.match.params.productId}`
    );
    this.setState({ productDetail: response.data.body, loading: false });
  };
  render() {
    const { loading, productDetail } = this.state;
    const { addToCart } = this.props;
    if (loading) return  <div className="lds-css ng-scope">
        <div className="lds-spinner" style={{width: '100%', height: '100%'}}><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
        <style type="text/css" dangerouslySetInnerHTML={{__html: "@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.lds-spinner {\n  position: relative;\n}\n.lds-spinner div {\n  left: 94px;\n  top: 48px;\n  position: absolute;\n  -webkit-animation: lds-spinner linear 1s infinite;\n  animation: lds-spinner linear 1s infinite;\n  background: #1e1e27;\n  width: 12px;\n  height: 24px;\n  border-radius: 40%;\n  -webkit-transform-origin: 6px 52px;\n  transform-origin: 6px 52px;\n}\n.lds-spinner div:nth-child(1) {\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-animation-delay: -0.916666666666667s;\n  animation-delay: -0.916666666666667s;\n}\n.lds-spinner div:nth-child(2) {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg);\n  -webkit-animation-delay: -0.833333333333333s;\n  animation-delay: -0.833333333333333s;\n}\n.lds-spinner div:nth-child(3) {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg);\n  -webkit-animation-delay: -0.75s;\n  animation-delay: -0.75s;\n}\n.lds-spinner div:nth-child(4) {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  -webkit-animation-delay: -0.666666666666667s;\n  animation-delay: -0.666666666666667s;\n}\n.lds-spinner div:nth-child(5) {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg);\n  -webkit-animation-delay: -0.583333333333333s;\n  animation-delay: -0.583333333333333s;\n}\n.lds-spinner div:nth-child(6) {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg);\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(7) {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  -webkit-animation-delay: -0.416666666666667s;\n  animation-delay: -0.416666666666667s;\n}\n.lds-spinner div:nth-child(8) {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg);\n  -webkit-animation-delay: -0.333333333333333s;\n  animation-delay: -0.333333333333333s;\n}\n.lds-spinner div:nth-child(9) {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg);\n  -webkit-animation-delay: -0.25s;\n  animation-delay: -0.25s;\n}\n.lds-spinner div:nth-child(10) {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n  -webkit-animation-delay: -0.166666666666667s;\n  animation-delay: -0.166666666666667s;\n}\n.lds-spinner div:nth-child(11) {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg);\n  -webkit-animation-delay: -0.083333333333333s;\n  animation-delay: -0.083333333333333s;\n}\n.lds-spinner div:nth-child(12) {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg);\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.lds-spinner {\n  width: 200px !important;\n  height: 200px !important;\n  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n}\n" }} /></div>;
    return (
      <div className="container single_product_container">
        <Breadcrumbs />
        <ProductDetail productDetail={productDetail} addToCart={addToCart} />
        <ProductDetailTab productDetail={productDetail} />
      </div>
    );
  }
}

SinglePage.propTypes = {};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (product, quantity) => {
      dispatch(actAddToCart(product, quantity));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SinglePage);

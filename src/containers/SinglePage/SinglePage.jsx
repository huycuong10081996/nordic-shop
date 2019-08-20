import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SinglePage.scss";

import Single from "../../components/SinglePage/Single/Single";
import axios from "axios";
class SinglePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {}
    };
  }
  componentDidMount = async () => {
    try {
      let response = await axios.get(
        `http://api.demo.nordiccoder.com/api/products/${
          this.props.match.params.productId
        }`
      );
      this.setState({ productDetail: response.data.body });
    } catch (error) {
      throw error;
    }
  };
  render() {
    const { match } = this.props;
    const { productDetail } = this.state;
    return <Single productDetail={productDetail} />;
  }
}

SinglePage.propTypes = {};

export default SinglePage;

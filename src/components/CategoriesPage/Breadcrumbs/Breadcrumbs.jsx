import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Breadcrumbs.scss";
class Breadcrumbs extends PureComponent {
  render() {
    return (
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
    );
  }
}

Breadcrumbs.propTypes = {};

export default Breadcrumbs;

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "../NavbarMenuItem/NavbarMenuItem.scss";
import { NavLink } from "react-router-dom";
class NavbarMenuItem extends PureComponent {
  render() {
    const { navbarMenuItem } = this.props;
    return <NavLink to={navbarMenuItem.link}>{navbarMenuItem.name}</NavLink>;
  }
}

NavbarMenuItem.propTypes = {
  navbarMenuItem: PropTypes.object.isRequired
};

export default NavbarMenuItem;

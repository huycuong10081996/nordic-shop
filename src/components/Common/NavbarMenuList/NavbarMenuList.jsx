import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import NavbarMenuItem from "../NavbarMenuItem/NavbarMenuItem";
import "../NavbarMenuList/NavbarMenuList.scss";
class NavbarMenuList extends PureComponent {
  render() {
    const { navbarMenuList } = this.props;
    console.log(this.props);
    return (
      <ul className="navbar_menu">
        {navbarMenuList.map(navbarMenuItem => (
          <li key={navbarMenuItem.id}>
            <NavbarMenuItem navbarMenuItem={navbarMenuItem} />
          </li>
        ))}
      </ul>
    );
  }
}

NavbarMenuList.propTypes = {
  navbarMenuList: PropTypes.array.isRequired
};

export default NavbarMenuList;

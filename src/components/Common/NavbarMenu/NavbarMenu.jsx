import React, { PureComponent } from "react";
import NavbarMenuList from "../NavbarMenuList/NavbarMenuList";

class NavbarMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      navbarMenuList: [
        {
          id: 1,
          name: "home",
          link: "/"
        },
        {
          id: 2,
          name: "shop",
          link: "/categories"
        },
        {
          id: 3,
          name: "promotion",
          link: "#"
        },
        {
          id: 4,
          name: "blog",
          link: "https://nordiccoder.com/blog"
        },
        {
          id: 5,
          name: "contact",
          link: "contact.html"
        }
      ]
    };
  }
  render() {
    const { navbarMenuList } = this.state;
    return <NavbarMenuList navbarMenuList={navbarMenuList} />;
  }
}

// NavbarMenu.propTypes = {};

export default NavbarMenu;

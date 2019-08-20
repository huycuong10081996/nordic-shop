import React, { PureComponent } from "react";
import QuickCategories from "../../components/HomePage/QuickCategories/QuickCategories";
import MainSlider from "../../components/HomePage/HeroBanner/MainSlider/MainSlider";
import NewArrival from "../../components/HomePage/NewArrival/NewArrival/NewArrival";
import DealOfTheWeek from "../../components/HomePage/DealOfTheWeek/DealOfTheWeek";
import ShippingInformation from "../../components/Common/ShippingInformation/ShippingInformation";
import "../HomePage/HomePage.scss";
class HomePage extends PureComponent {
  render() {
    return (
      <>
        <MainSlider />
        <QuickCategories />
        <NewArrival />
        <DealOfTheWeek />
        <ShippingInformation />
      </>
    );
  }
}

// HomePage.propTypes = {};

export default HomePage;

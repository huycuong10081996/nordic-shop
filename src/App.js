import React from "react";
import "./App.css";
import HomePage from "./containers/HomePage/HomePage";
import SinglePage from "./containers/SinglePage/SinglePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import CategoryPage from "./containers/CategoryPage/CategoryPage";
import CartPage from "./containers/CartPage/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/single/:productId" component={SinglePage} />
        <Route path="/category" component={CategoryPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

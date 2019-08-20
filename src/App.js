import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Categories from "./containers/Categories/Categories";
import SinglePage from "./containers/SinglePage/SinglePage";
import CartPage from "./containers/CartPage/CartPage";

function App() {
  return (
    <BrowserRouter>
      <div className="super_container">
        <Header />

        {/* Router */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories" component={Categories} />
          <Route path="/single/:productId" component={SinglePage} />
          <Route path="/cart" component={CartPage} />
          <Route
            render={props => (
              <div style={{ marginTop: "200px" }}>404 rồi đại vương ơi</div>
            )}
          />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

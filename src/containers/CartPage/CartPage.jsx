import React, { PureComponent } from "react";
import Cart from "../../components/CartPage/Cart/Cart";
import { Link } from "react-router-dom";
class CartPage extends PureComponent {
  handleTotalProductPrice = () => {};

  render() {
    return (
      <section className="section" style={{ marginTop: "200px" }}>
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th />
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th />
              </tr>
            </thead>

            <Cart />
          </table>
        </div>
      </section>
    );
  }
}

CartPage.propTypes = {};

export default CartPage;

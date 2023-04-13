import "./CartPage.css";
import PagePath from "../../components/PagePath/PagePath";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./cart";
import { removeAllCartAction } from "../../redux/action/actions";

export default function CartPage() {
  const dispatch = useDispatch();
  const addedProducts = useSelector((state) => state["products"]);
  let total = useSelector((state) => state["totalPrice"]);

  addedProducts !== undefined &&
    !!addedProducts.length &&
    addedProducts
      .filter((item, i) => i >= 1)
      .map((product, ind) => {
        return (total += product.Qty * product.Price);
      });

  return (
    <div className="CartPage">
      <PagePath title="Cart" curPage="Cart" />
      <div className="cart">
        <table className="cartTable">
          <thead>
            <tr>
              <th className="cartProduct cpImg">IMAGE</th>
              <th className="cartProduct cpName">PRODUCT NAME</th>
              <th className="cartProduct cpPrice">PRICE</th>
              <th className="cartProduct cpQyt">QTY</th>
              <th className="cartProduct cpSub">SUBTOTAL</th>
              <th className="cartProduct cpAct">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {addedProducts !== undefined &&
              !!addedProducts.length &&
              addedProducts
                .filter((item, i) => i >= 1)
                .map((product, ind) => {
                  return (
                    <Cart
                      key={product.Id}
                      ind={ind}
                      Qty={product.Qty}
                      Photo={product.Photo}
                      Title={product.Title}
                      Price={product.Price}
                      Id={product.Id}
                    />
                  );
                })}

            <tr className="grandTotal">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <p className="gt-txt">Total: </p>
              </td>
              <td>
                <p className="gt-total">&#8380; {total}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="cartProcess">
          <div className="cp-coupon">
            <input placeholder="Enter your coupon code if you have one" />
            <button className="applyCoupon">Apply Coupon</button>
          </div>
          <div className="cp-buttons">
            <button
              className="cp-btn clearCart"
              onClick={() => dispatch(removeAllCartAction(0))}
            >
              Clear Cart
            </button>
            <button className="cp-btn shopCart">Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
}

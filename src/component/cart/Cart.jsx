import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "../restaurantmenu/ItemList";
import "../cart/cart.css";
import { clearCart } from "../../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container">
      {cartItem.length === 0 ? (
        <>
          <Link to="/">
            <button className="home-btn">Go to Home</button>
          </Link>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>
            Cart is empty. Add items to the cart!{" "}
          </p>
        </>
      ) : (
        <>
          <button onClick={handleClear}>Clear Cart</button>
          <ItemList data={cartItem} />
        </>
      )}
    </div>
  );
};

export default Cart;

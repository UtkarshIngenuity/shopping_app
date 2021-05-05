import React, {useEffect} from "react";
import "./CartInfo.css";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";


function CartInfo() {
  const cartItems = useSelector((state) => state.cart);
  
  var visible;
  var btn_visibility;
  
  if (cartItems.length === 0) {
    visible = (
      <div className="d-flex justify-content-center">No items in the cart.</div>
    );
    btn_visibility = { visibility: "hidden" };
  } else if (cartItems.length > 0) {
    
    visible = cartItems.map((i, index) => (
      <CartItem 
      src={i.src} 
      name={i.title}
      id={i.id} />
    ));
  }
  

  return (
    <div className="cart_info">
      <div className="triangle"></div>
      {visible}
      <button style={btn_visibility} className="checkout btn btn-warning">
        Checkout
      </button>
    </div>
  );
}

export default CartInfo;

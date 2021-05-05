import React from "react"
import './App.css';
import CartInfo from "./components/CartInfo";
import Header from "./components/Header"
import Products from "./components/Products";
import {useSelector} from "react-redux"

function App() {
  var cartVisibility;
  const cart = useSelector(state => state.cartButton)
  if(cart){
    cartVisibility = <CartInfo />
  }else{
    cartVisibility = cartVisibility
  }
  return (
    <div>
     <Header />
     {cartVisibility}
     <hr />
     <Products />
    </div>
  );
}

export default App;

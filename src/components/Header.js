import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import {cartClicked} from "../actions/actionTypes"

const Header = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  
  
function clickHandler(){
   dispatch(cartClicked())
}
  return (
    <div className="header container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            My Store
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <button
              onClick={clickHandler}
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="right"
              data-bs-content="Right popover"
              className="cart_btn btn btn-warning"
            >
              <ShoppingCartIcon />
              <div className="counter">{counter}</div>
             
            </button>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

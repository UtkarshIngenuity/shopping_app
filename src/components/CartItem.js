import React from "react"
import "./CartItem.css"
import {useDispatch, useSelector} from "react-redux"
import {itemRemoved} from "../actions/actionTypes"

import DeleteIcon from '@material-ui/icons/Delete';


function CartItem(props){
  const dispatch=useDispatch()
  const cart = useSelector(state => state.cart)
  function deleteItem () {
     dispatch(itemRemoved(cart,props.id))
    
  }
   
    return (
        <div className="cart_item">

          <img className="cart_img" src={props.src} alt="image" /><p className="cart_title">{props.name}</p><DeleteIcon onClick={deleteItem} className="delete_icon" />
        </div>
    )
}

export default CartItem
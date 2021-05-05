import React from "react"
import "./ProductDetail.css"
import {useDispatch} from "react-redux"
import {itemAdded} from "../actions/actionTypes"


function ProductDetail (props) {
  const dispatch = useDispatch()

  function clickHandler() {
    dispatch(itemAdded(props))
    
  }
    return (
        
        <div className="product_detail card" style={{width: "18rem"}}>
  <img src={props.src} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.description.substring(0,100)}...</p>
    <button onClick={clickHandler} class="btn btn-warning">Add to cart +</button>
  </div>
</div>


    )
}

export default ProductDetail
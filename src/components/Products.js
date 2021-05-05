import React, { useEffect } from "react";
import { fetchProducts } from "../actions/actionTypes";
import { useSelector, useDispatch } from "react-redux";
import ProductDetail from "./ProductDetail";
import "./Products.css"

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  var visible;
  if (productList.length === 0) {
    visible = <div className="d-flex justify-content-center"> 
        <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    </div>;
  }else if(productList.length > 0){
      visible = productList[0].data.map((i,id) => <ProductDetail
      title = {i.title}
      src = {i.image}
      description = {i.description}
      id = {i.id}
      
      /> )
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(productList[0]);

  return <div className = "product_wrap container">{visible}</div>;
};

export default Products;

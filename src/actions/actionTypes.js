import axios from "axios";



export const showProducts = (products) => {
  return {
    type: "SHOW_PRODUCTS",
    payload: products,
  };
};

export const fetchProducts = () => {
  return async function(dispatch){
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => {
      console.log("error: ", err);
    });
  dispatch(showProducts(response));
  }
  
  
};

export const itemAdded = (products) => {
  return {
    type : "ITEM_ADDED",
    payload: products
  }
}

export const itemRemoved = (item,itemId) => {
  return {
    type : "ITEM_REMOVED",
    payload: item,
    id : itemId
    
    
  }
}

export const cartClicked = () => {
  return {
    type: "CART_CLICKED"
  }
}
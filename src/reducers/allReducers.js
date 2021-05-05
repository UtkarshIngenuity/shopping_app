import productReducer from "./productsReducer"
import {counterReducer} from "./counterReducer"
import {combineReducers} from "redux"
import cartReducer from "./cartReducer"
import cartButtonReducer from "./cartButtonreducer"

const allReducers = combineReducers({
    products : productReducer,
    counter : counterReducer,
    cart : cartReducer,
    cartButton : cartButtonReducer
})


export default allReducers
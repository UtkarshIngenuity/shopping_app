import {createStore, applyMiddleware, compose} from "redux"
import allReducers from "./reducers/allReducers"
import Thunk from "redux-thunk"


const store = createStore(allReducers,compose(applyMiddleware(Thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))


export default store
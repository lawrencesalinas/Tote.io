// install redux react-redux redux-thunk redux-devtools-extension
// combineReducers --> takes all reducers and combine them into one reducer and take that one large reducer into our store
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// function that apply our store to the redux dev tools
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers';
;



const reducer = combineReducers({
    productList:productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})
    
const cartItemsFromStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) : []

                // if items exist parse them and that will be the return value

const initialState= {
    cart:{cartItems: cartItemsFromStorage}
}
const middleware = [thunk]   


const store = createStore(reducer , initialState,  
    composeWithDevTools(applyMiddleware(...middleware)))

export default store

// add store to index.js
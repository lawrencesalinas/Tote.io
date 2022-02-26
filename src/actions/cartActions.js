import  axios  from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constant/cartConstants';

                                            // getState get any part of the state like useSelector
export const addToCart = (id, qty) => async (dispatch, getState) => {
    // compare products if they're inside the cart array
    const {data} = await axios.get(`/api/products/${id}`)


    dispatch({
        type: CART_ADD_ITEM,
        // payload is update the state with the product data
        // loading data into payload
        payload: {
            // this is the data when we call the cartreducer
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty
        }
    })
    // set local storage pass in key value pair for value use get state 
    // for values we use getState() function, 
    // we need to go to our store cart and get cart.cartItems and need to be string value, 
    // use Json stringify to turn to string because local storage  can only have key value pairs
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type:CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}



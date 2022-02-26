// import {
//  USER_LOGIN_REQUEST,
//  USER_LOGIN_SUCCESS,
//  USER_LOGIN_FAIL,
//  USER_LOGOUT
// } from '../constant/userConstants'

// export const userLoginReducer = (state = {}, action ) =>{
//     // check action type with switch statement
//     switch(action.type){
//             // product is loading
//             case USER_LOGIN_REQUEST:
//                 return { loading: true, products: []}
//             // api has returned some data, payload is we got from our api call
//             case PRODUCT_LIST_SUCCESS:
//                 return { loading: false, products: action.payload }
//             // error
//             case PRODUCT_LIST_FAIL:
//                 return { loading: false, error: action.payload }
//             // when any of switch cases don't match
//             default: 
//                 return state
//     }
// }
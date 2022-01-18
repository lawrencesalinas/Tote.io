 
 // this where we update our product state
 import { 
     PRODUCT_LIST_REQUEST,
     PRODUCT_LIST_SUCCESS,
     PRODUCT_LIST_FAIL
} from '../constant/productsConstants'
// want to do in our state
// takes state and an action type and manipulate our state and return update to our store
 export const productListReducer = (state = {products:[]}, action ) =>{
    // check action type with switch statement
    switch(action.type){
            // product is loading
            case PRODUCT_LIST_REQUEST:
                return { loading: true, products: []}
            // api has returned some data, payload is we got from our api call
            case PRODUCT_LIST_SUCCESS:
                return { loading: false, products: action.payload }
            // error
            case PRODUCT_LIST_FAIL:
                return { loading: false, error: action.payload }
            // when any of switch cases don't match
            default: 
                return state
    }
}
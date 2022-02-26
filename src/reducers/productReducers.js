 // Reducer is simply a function that takes in our current state and it's gonna take in an action of what we
 // want to do to the state so the action would be like load data or
 // its gonna tell us we got back  error when we're loading our data
 // depending on what the action type is, we're just gonna change and manipulate the state
 // funciton will take in a state and an action type, it's gonna manipulate state or cetain 
 // part of state and return back a new copy into our store, 
 // the reducer updates our store
 
 
 // this where we update our product state
import { 
     PRODUCT_LIST_REQUEST,
     PRODUCT_LIST_SUCCESS,
     PRODUCT_LIST_FAIL,
     
     PRODUCT_DETAILS_REQUEST,
     PRODUCT_DETAILS_SUCCESS,
     PRODUCT_DETAILS_FAIL,

} from '../constant/productsConstants'
// want to do in our stat  e
// takes state and an action type and manipulate our state and return update to our store
 export const productListReducer = (state = {products:[]}, action ) =>{
    // check action type with switch statement
    switch(action.type){
            // product is loading
            case PRODUCT_LIST_REQUEST:
                // return back this object to our state
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

 // product as an object  state has review array
export const productDetailsReducer = (state = {product: {reviews:[]}}, action) => {
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state}

        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

// after creating a new reducer, register it to store
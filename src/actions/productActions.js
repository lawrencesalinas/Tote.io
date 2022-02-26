import axios from 'axios'
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
} from '../constant/productsConstants'


// this function is in charge of calling api in homescreen
// redux thunk can make a function within a function
// dispatch will be use to dispacth actions on top
export const listProducts = () => async(dispatch) => { 
    try{ 
        // request
        dispatch({ type: PRODUCT_LIST_REQUEST })
        
        const { data } = await axios.get('/api/products')
        // successs, loaded state with data
        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload: data
        })
       
    }catch(error){
        dispatch({
            type:PRODUCT_LIST_FAIL,
            // check if error response is generic or custom message
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const listProductDetails = (id) => async(dispatch) => {

    try{ 
        // request
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        
        const { data } = await axios.get(`/api/products/${id}`)
        // successs, loaded state with data
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
       
    }catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

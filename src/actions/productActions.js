import axios from 'axios'
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from '../constant/productsConstants'


// this function is in charge of calling api in homescreen
// redux thunk can make a fucntion within a function
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
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}
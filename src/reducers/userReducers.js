import {
 USER_LOGIN_REQUEST,
 USER_LOGIN_SUCCESS,
 USER_LOGIN_FAIL,

 USER_LOGOUT,

 USER_REGISTER_REQUEST,
 USER_REGISTER_SUCCESS,
 USER_REGISTER_FAIL,


} from '../constant/userConstants'

export const userLoginReducer = (state = {}, action ) =>{
    // check action type with switch statement
    switch(action.type){
            // user is loading
            case USER_LOGIN_REQUEST:
                return { loading: true}
            // api has returned some data, payload is we got from our api call
            case USER_LOGIN_SUCCESS:
                return { loading: false, userInfo: action.payload }
            // error
            case USER_LOGIN_FAIL:
                return { loading: false, error: action.payload }
            
            case USER_LOGOUT:
                // return empty state
                return {}
            // when any of switch cases don't match
            default: 
                return state
    }
}

export const userRegisterReducer = (state = {}, action ) =>{
    // check action type with switch statement
    switch(action.type){
            // user is loading
            case USER_REGISTER_REQUEST:
                return { loading: true}
            // api has returned some data, payload is we got from our api call
            case USER_REGISTER_SUCCESS:
                return { loading: false, userInfo: action.payload }
            // error
            case USER_REGISTER_FAIL:
                return { loading: false, error: action.payload }
            
            case USER_LOGOUT:
                // return empty state
                return {}
            // when any of switch cases don't match
            default: 
                return state
    }
}
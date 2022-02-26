import { CART_ADD_ITEM } from "../constant/cartConstants";
import { CART_REMOVE_ITEM } from "../constant/cartConstants";

export const cartReducer =  (state = { cartItems: [] }, action) => {
    switch (action.type) {
      // we need to check if the product we sent back inside acton.payload exist inside our cart item array
      // we dont want to add new item, just update if it exist
      // if product doesnt exist we take action .payload and add to this array
      case CART_ADD_ITEM:
        // check if products exist, payload is the product
        // payload is the payload inside action coming from product data
        const item = action.payload;
        // loop through cart items if it exist                      //product here is the id not the porduct object
        const existItem = state.cartItems.find((x) => x.product === item.product);
        if (existItem) { 
          return {
            // spread operator for current state
            ...state,
            // we want to map that state cart items and loop and find
            // if the cartitems matches the new cart item, and replace matching item with new item

            cartItems: state.cartItems.map((x) => {
              // if product matches existItem.product then replace with new Item if it doesnt return x
              // which is the original product
              return x.product === existItem.product ? item : x;
            }),
          };
        } else {
          return {
            //  return the state
            ...state,
            //  return array spread acroos the original array, add in new item
            cartItems: [...state.cartItems, item],
          };
        }

      case CART_REMOVE_ITEM:
        return{
          ...state,
          cartItems:state.cartItems.filter(x => x.product != action.payload)
        }

      default:
        return state;
    }
  };

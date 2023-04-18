// here i will be defining the data manpulating function so using this functions one can manuplate the datalayer(store items added by the user ) created the "stateProvider"

// defining the initialsate where the Basket(or cart) will be empty.
export const initialState = {
  Cart: [],
};
export const final_subtotal = (Cart) =>
  Cart?.reduce((amt, item) => item.price + amt,0);
// here reduce is a javascript function(syntax: arr.reduce(callback(accumulator, currentValue), initialValue)) here the initial value is a 0 
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        Cart: [...state.Cart, action.item],
        // state.Basket --> means current item present inside basket(array)
        //  action.item--> means the product which will be added to basket
        // here ...state defines the current state(for eg: if we have 2 products in our cart then
        // that will be our current state )
      };
    case "REMOVE_FROM_THE_CART":
      const ProductIndex = state.Cart.findIndex(
        (item) => item.id === action.id
      );
      // this above line finds the index of that
      // if we have same product more than once then it will return the index of first id matched.
      // eg: [1,2,3,2,2,2] in this array,we want to find the index of value 2 then the above line will return '1'
      let NewCart = [...state.Cart];
      if (ProductIndex >= 0) {
        NewCart.splice(ProductIndex, 1);
        // if that index is there then this splice function will remove it
        // eg: [1,2,3,2,2,2] in this array,we want to remove 2 then it will remove the value at index 1 and
        //  give us the array(i.e it will return [1,3,2,2,2])
      } else {
        alert(
          "It seems item is not there in cart, please add that item to the cart"
        );
      }
      return {
        ...state,
        Cart: NewCart,
      };
      case "USER_NAME":
        {
          return{
            ...state,
            user_name: action.user_name
          }
        }
    default:
      return state;
  }
};

export default reducer;

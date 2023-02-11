// here i will be defining the data manpulating function so using this functions one can manuplate the datalayer(store items added by the user ) created the "stateProvider"

// defining the initialsate where the Basket(or cart) will be empty.
export const initialState = {
  Cart: [],
};

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
    default:
      return state;
  }
};

export default reducer;

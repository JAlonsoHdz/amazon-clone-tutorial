export const initialState = {
  basket: []
};

//Selector, this will sum the items added to the basket
export const getBasketTotal = basket =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  //console.log(action); check if reducers is triggering actions
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_FROM_BASKET":
      // get the first index that matche the product id
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product id: ${action.id} as its not in basket`
        );
      }

      return {
        ...state,
        basket: newBasket
      };

    default:
      return state;
  }
};

export default reducer;

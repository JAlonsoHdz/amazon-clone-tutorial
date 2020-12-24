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

    default:
      return state;
  }
};

export default reducer;

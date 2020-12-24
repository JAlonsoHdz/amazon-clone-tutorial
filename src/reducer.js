export const initialState = {
  basket: []
};

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
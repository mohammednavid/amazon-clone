export const initialState = {
  basket: [],
  user: null,
};

//Selector
export const AddTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Basket":
      return {
        ...state,
        basket: [...state.basket, action.items],
      };

    case "Empty_Basket":
      return {
        ...state,
        basket: [],
      };
    case "Remove_From_Basket":
      const Index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (Index >= 0) {
        newBasket.splice(Index, 1);
      } else {
        console.warn(
          `Can't remove product(id: ${action.id}) as it's not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "Set_User":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;

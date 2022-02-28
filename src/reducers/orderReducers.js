const { CREATE_ORDER, CLEAR_ORDER, CLEAR_CART } = require("../types");

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { order: action.payload };
    case CLEAR_ORDER:
      return {
        order: null,
      };
    /* case CLEAR_CART:
      return {
        cartItems: [],
      }; */
    default:
      return state;
  }
};

export { orderReducer };

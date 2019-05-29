const arrReducer = (state = ["nokia", "ip", "oppo"], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return (state = [...state, action.item]);
    case "REMOVE_ITEM":
      return (state = state.filter((item, index) => index !== action.index));
    default:
      return state;
  }
};
export default arrReducer;

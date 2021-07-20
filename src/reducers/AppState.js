const AppStateReducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        authenticated: action.payload,
      };
    default:
      return state;
  }
};

export default AppStateReducer;

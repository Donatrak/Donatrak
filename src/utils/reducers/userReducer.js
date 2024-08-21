export const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export const stepperReducer = (state = 0, action) => {
  switch (action.type) {
    case "STEPPER":
      return action.payload;

    default:
      return state;
  }
};

export const intendedPageReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_INTENDED_PAGE":
      return action.payload;
    case "CLEAR_INTENDED_PAGE":
      return "";
    default:
      return state;
  }
};

const initialstate = 0;

export const myfun = (state = initialstate, Action) => {
  switch (Action.type) {
    case "addCart":
      return (state = Action.value);

    case "removeCart":
      return state;

    default:
      return state;
  }
};

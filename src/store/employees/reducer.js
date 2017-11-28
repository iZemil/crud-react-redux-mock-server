export const employees = (state = [], action) => {
  switch (action.type) {
    case "FETCH_EMPLOYEES":
      return action.data;
    case "ADD_EMPLOYEE":
      return [
        ...state,
        action.employee
      ];
    case "EDIT_EMPLOYEE":
      return state.map(dep =>
        dep.id === action.id ?
          { ...dep, name: action.newName } :
          dep
      )
    case "REMOVE_EMPLOYEE":
      return state.filter(item => +item.id !== +action.id);
    default:
      return state;
  }
}
export const departments = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DEPARTMENTS":
      return action.data;
    case "ADD_DEPARTMENT":
      return [
        ...state,
        action.department
      ];
    case "EDIT_DEPARTMENT":
      return state.map(dep =>
        dep.id === action.id ?
          { ...dep, name: action.newName } :
          dep
      )
    case "REMOVE_DEPARTMENT":
      return state.filter(item => +item.id !== +action.id);
    default:
      return state;
  }
}
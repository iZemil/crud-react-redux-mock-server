import { combineReducers } from 'redux';

const departments = (state = [
  {
      id: 1,
      name: "IT"
    },
    {
      id: 2,
      name: "Accountiong"
    }
], action) => {
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

const employees = (state = [
  {
      "first_name": "Ivan",
      "last_name": "Petrov",
      "department_no": 1
    }
], action) => {
  switch (action.type) {
    case "FETCH_EMPLOYEES":
      return action.data
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  departments,
  employees
});

export default rootReducer;
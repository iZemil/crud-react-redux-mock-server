import { combineReducers } from 'redux';
import { departments} from './departments/reducer';
import { employees } from './employees/reducer';

const rootReducer = combineReducers({
  departments,
  employees
});

export default rootReducer;
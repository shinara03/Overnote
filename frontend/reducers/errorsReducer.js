import { combineReducers } from 'redux';
import notebookErrorReducer from './notebook/notebook_error_reducer';
import sessionErrorReducer from './session_error_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorReducer,
  notebook: notebookErrorReducer
})

export default errorsReducer;
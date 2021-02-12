import usersReducer from './users_reducer'
import {combineReducers} from 'redux'
import notebookReducer from './notebook/notebook_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  notebooks: notebookReducer
})

export default entitiesReducer;
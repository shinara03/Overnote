import usersReducer from './users_reducer'
import {combineReducers} from 'redux'
import notebookReducer from './notebook/notebook_reducer';
import noteReducer from './note/note_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  notebooks: notebookReducer,
  notes: noteReducer
})

export default entitiesReducer;
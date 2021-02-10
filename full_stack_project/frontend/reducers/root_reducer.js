import {combineReducers} from 'redux'
import entitiesReducer from './entities_reducer'
import errorsReducer from './errorsReducer';
import sessionReducer from './session_reducer'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer
})

export default rootReducer;
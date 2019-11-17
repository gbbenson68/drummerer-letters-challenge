import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import profileReducer from './reducers/profiles.js'
import notesReducer from './reducers/notes.js'

const reducer = combineReducers({
  profile: profileReducer,
  notes: notesReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store

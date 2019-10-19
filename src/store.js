import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// TODO - create reducers for application

// TODO - Add reducers to below to combine
// const reducer = combineReducers()

// Create emptry reducer for now.
const reducer = () => {}

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store

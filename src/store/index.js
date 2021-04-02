import { createStore, combineReducers, applyMiddleware } from 'redux'
import commonsReducers from './reducers/commonsReducers'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    commonsReducers
})
export default store = createStore(rootReducer, applyMiddleware(thunk))

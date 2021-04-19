import { createStore, combineReducers, applyMiddleware } from 'redux'
import commonsReducers from './reducers/commonsReducers'
import authReducer from './reducers/userReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    commonsReducers,
    authReducer
})
export default store = createStore(rootReducer, applyMiddleware(thunk))

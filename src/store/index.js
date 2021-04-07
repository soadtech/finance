import { applyMiddleware, createStore, combineReducers } from 'redux'
import userReducer from "./reducers/userReducer"
import createSagaMiddleware from 'redux-saga'
import users from "./sagas/userSaga"

const sagaMiddleware = createSagaMiddleware()

const rootReducers = combineReducers({
    user: userReducer,
});

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(users)
export default store
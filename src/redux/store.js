import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Posts from './posts'
import Login from './login'

let rootReducer = combineReducers({
    Posts,
    Login

})

let store = createStore(rootReducer,applyMiddleware(thunk))

export default store
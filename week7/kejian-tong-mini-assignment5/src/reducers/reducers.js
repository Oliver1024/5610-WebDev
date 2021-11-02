import { combineReducers } from 'redux'
import clickReducer from './clickReducer'
import playReducer from './playReducer'

export default combineReducers({
    play: playReducer,
    clickCount: clickReducer
})
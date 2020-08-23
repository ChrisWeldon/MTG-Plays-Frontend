import { combineReducers } from 'redux'
import cards from './cards'
import search from './search'
import plays from './plays'

const rootReducer = combineReducers({
    cards,
    search,
    plays
})

export default rootReducer;


import {
    REQUEST_SEARCH,
    RECEIVE_SEARCH
} from "../constants/ActionTypes"


export default function cards(state=[], action){
    switch(action.type){

        case REQUEST_SEARCH:
            return state

        case RECEIVE_SEARCH:
            return [
                ...action.list
            ]
        default:
            return state
    }
}


import {
    REQUEST_CARD,
    RECEIVE_CARD,
    ADD_CARD,
    REMOVE_CARD
} from "../constants/ActionTypes"


export default function cards(state=[], action){
    switch(action.type){

        case REQUEST_CARD:
            return [
                ...state,
                {
                    title: action.title,
                    loaded: false
                }
            ]

        case RECEIVE_CARD:
            return state.map(card=> (card.title==action.title) ? {
                ...action.resp,
                loaded: true
            } : card)

        case ADD_CARD:
            return [
                ...state.filter(card=>card.id!=action.card.id),
                {
                    ...action.card,
                    loaded: true
                }
            ]

        case REMOVE_CARD:
            return state.filter(card => card.id != action.id)

        default:
            return state
    }
}

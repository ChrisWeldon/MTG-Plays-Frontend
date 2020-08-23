
import {
    REQUEST_CARD_PLAYS,
    RECEIVE_CARD_PLAYS,
    REMOVE_CARD
} from "../constants/ActionTypes"

const initialState = {
    byId:{

    },
    allIds:[]
}

export default function plays(state=initialState, action){
    const { byId, allIds} = state

    switch(action.type){
        case REQUEST_CARD_PLAYS:
            return {
                byId: {...byId, [action.id] : {loading: true}},
                allIds:[ ...allIds , action.id ]
            }

        case RECEIVE_CARD_PLAYS:
            return {
                byId: { ...byId, [ action.id ]: {...action.plays, loading : false} },
                allIds: [ ...allIds]
            }

        case REMOVE_CARD:

            return {
                byId: Object.assign({}, byId, { [action.id] :undefined }),
                allIds: allIds.filter(id => id!=action.id)
            }

        default:
            return state
    }
}

import * as types from '../constants/ActionTypes'
import fetch from 'cross-fetch'
import 'babel-polyfill'

export const addCard = (card) => ({
    type: types.ADD_CARD,
    card
})

export const requestCardPlays = (id) => ({
    type: types.REQUEST_CARD_PLAYS,
    id
})

export const receiveCardPlays = (id, plays) => ({
    type: types.RECEIVE_CARD_PLAYS,
    id,
    plays
})


export function fetchCardPlays(card){
    return function(dispatch){
        dispatch(addCard(card))
        dispatch(requestCardPlays(card.id))

        return fetch('http://mtgapi.chriswevans.com/df/plays/'+ card.id +'/standard')
            .then(resp=>resp.json())
            .then(json => dispatch(receiveCardPlays(card.id, json)))
            .catch((error) => {
              console.error('Error:', error);
            })

    }
}

export const removeCard = (id) => ({
    type: types.REMOVE_CARD, id
})

// Not Used
export const requestCard = (title) => ({
    type: types.REQUEST_CARD, title
})
// Not Used
export const receiveCard = (title, resp) => ({
    type: types.RECEIVE_CARD,
    receivedAt: Date.now(),
    title,
    resp
})

export const requestSearch = (term) => ({
    type: types.REQUEST_SEARCH, term
})

export const receiveSearch = (term, list) => ({
    type: types.RECEIVE_SEARCH,
    receivedAt: Date.now(),
    list
})

export function fetchCard(title){

    return function(dispatch){
        dispatch(requestCard(title))

        return fetch('http://mtgapi.chriswevans.com/card/'+ title)
            .then(resp => resp.json())
            .then(json => dispatch(receiveCard(title, json)))
            .catch((error) => {
              console.error('Error:', error);
            })
    }
}

export function fetchSearch(term){
    return function(dispatch){
        dispatch(requestSearch(term))

        return fetch('http://mtgapi.chriswevans.com/search/cards/' + term)
            .then(resp=>resp.json())
            .then(json=> dispatch(receiveSearch(term, json)))
            .catch((error) => {
              console.error('Error:', error);
            })
    }
}

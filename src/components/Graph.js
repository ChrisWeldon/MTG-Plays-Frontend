import React from 'react'
import {Bar, Line} from 'react-chartjs-2';
import * as moment from 'moment';
import { COLORS } from '../constants/Colors'

function mergeArrays(arrays) {
    let jointArray = []
    console.log(arrays)
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
    return uniqueArray
}

//.map(key => moment.unix(key/1000).format("MM/DD/YYYY"))
export default function Graph({byId, allIds, cards}){

    let numTrack = 0
    const state = {
      labels: mergeArrays( allIds.map(id=> byId[id].loading ? [] : Object.keys(byId[id]['norm_occ'])))
                .map(key => moment.unix(key/1000).format("MM/DD/YYYY")),
      datasets: cards.map(card => (!byId.loading && byId[card.id]['norm_occ'] ?
          {
              label: card.title,
              backgroundColor: 'rgba(0,0,0,0)',
              borderColor: COLORS[cards.indexOf(card)],
              borderWidth: 2,
              data: Object.values(byId[card.id]['norm_occ'])
          } :
          {
              label: card.title,
              backgroundColor: 'rgba(0,0,0,0)',
              borderColor: COLORS[cards.indexOf(card)],
              borderWidth: 2,
              data: []
          })
      )
    };

    return(
        <Line
            data={state}
            height={250}
            options={{
              title:{
                display:true,
                text:'Plays Per Day Per Deck',
                fontSize:20
              },
              legend:{
                display:true,
                position:'top'
              }
            }}
          />
    )

}

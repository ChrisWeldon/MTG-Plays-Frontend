import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, GridList, Button, CircularProgress } from '@material-ui/core/';

import Graph from '../containers/Graph'
import CardDetail from './CardDetail'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));


let cardID = 0;

export default function Body({ Cards, fetchCard, removeCard}){
    const classes = useStyles();

    return(
        <Grid
          container
          direction="row-reverse"
          justify="center"
          alignItems="str"
          >
          <Grid item xs={12} md={6}>
            <Graph />
          </Grid>


          <Grid item xs={12} md={6}>
            { Cards.map(card => card.loaded ?
                <CardDetail {...card} removeCard = { (id=>removeCard(id)) } / > :
                <CircularProgress color="inherit" size={60} />
            ) }
          </Grid>

        </Grid>
    )
}

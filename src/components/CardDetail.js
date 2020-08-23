import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, GridList, Typography, Card, CardContent, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { COLORS } from '../constants/Rarities'

//linear-gradient(45deg, #A23013 20%, #D87E04 90%)
const useStyles = makeStyles((theme) => ({
  root: {
  },
  fancyorange:{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 120,
      padding: '0 30px',
      margin: '10px 10px 10px 10px',
      flexGrow:1
  },
  mythic:{
      display: 'flex',
      justifyContent: 'space-between',
      background: 'linear-gradient(0.13turn, #A23013, #D87E04, #A23013)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 120,
      padding: '5px 5px',
      margin: '10px 10px 10px 10px',
      flexGrow:1
  },
  rare:{
      display: 'flex',
      justifyContent: 'space-between',
      background: 'linear-gradient(0.13turn, #D87E04, #CAB57B, #D87E04)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 120,
      padding: '5px 5px',
      margin: '10px 10px 10px 10px',
      flexGrow:1
  },
  set: {
    fontSize: 14,
    marginBottom:0
  },
  title: {
    marginTop: 0,
  },
  controls: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
  },
  deletebutton:{

  }
}));


export default function CardDetail({...props}){
    const classes = useStyles()

    return (
        <Card item className={props.rarity==='mythic-rare' ? classes.mythic : classes.rare}>
            <CardContent>
                <Typography variant="subtitle" className={classes.set} gutterBottom>{props.rarity==='mythic-rare' ? "Mythic-Rare" : "Rare"} : {props.set}</Typography>
                <Typography variant="h4" className={classes.title} gutterBottom>{props.title}</Typography>
            </CardContent>
            <div className={classes.controls}>
                <IconButton className={classes.deletebutton} onClick={()=>props.removeCard(props.id)} aria-label="delete">
                    <DeleteIcon fontSize='large'/>
                </IconButton>
            </div>
        </Card>
    )
}

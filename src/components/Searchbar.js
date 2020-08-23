import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {  Container, TextField } from '@material-ui/core/';
import { Autocomplete } from '@material-ui/lab';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 12
  }
}));


let options = []

export default function Searchbar({fetchSearch, addCard ,fetchCardPlays, results}){
    const classes = useStyles();
    return(
        <Container>
            <Autocomplete
              id="combo-box-demo"
              onInputChange = {(event, newValue) => {
                  fetchSearch(newValue)
              }}
              freeSolo
              className={classes.root}
              onChange = {(event, newValue) => {
                  if(newValue && newValue.title.length > 0){
                      fetchCardPlays(newValue)
                  }
              }}
              getOptionSelected={(option, value)=> console.log(option)}
              options={results}
              getOptionLabel={(option) => option.title}
              renderInput={(params) =>
              <TextField {...params} id="outlined-basic" fullWidth label="Standard Cards" variant="outlined" />}
              />
            <Alert severity="info"> If no data appears on graph, then the given card has never been played.</Alert>
        </Container>
    )

}

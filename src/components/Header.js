import React from 'react'
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:60
  },
  fancy:{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 100,
      padding: '0 30px',
      margin: '10px 10px 10px 10px',
      flexGrow:1
  }
}));

export default function Header(props){
    const classes = useStyles()

    return (
        <AppBar position="sticky" className={classes.root}>
          <Toolbar>
              <Container maxWidth='md'>
                  <Typography variant="h3">MTG Pro Plays Terminal</Typography>
              </Container>
          </Toolbar>
        </AppBar>
    )

}

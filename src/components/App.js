import React from 'react';
import {  } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header'
import Searchbar from '../containers/Searchbar'
import Body from '../containers/Body'
import Footer from './Footer'

import '../App.css';


const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

function App() {
    const classes = useStyles();
    return (
      <>
      <Header />

      <Searchbar />

      <Body />

      <Footer />
      </>
    );
}

export default App;

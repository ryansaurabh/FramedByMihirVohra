import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './header';
import PlaceToVisit from './PlaceToVisit';
import Bglanding from "./images/bgLanding.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage:  `url(${Bglanding})`, 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  );
}
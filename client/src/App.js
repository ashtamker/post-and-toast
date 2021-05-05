import React, { useEffect } from 'react'
import useStyles from './AppStyle';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';


import homeImg from './img/home.jpg';

function App() {
const dispatch = useDispatch();
const classes = useStyles();

useEffect(() =>  {
  dispatch(getPosts());
}, [dispatch]);

  return (
    <Container maxWidth="lg">
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">Post&Toast</Typography>
      <img className={classes.image} src={homeImg} alt="icon" height="60"/>
    </AppBar>
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
  );
}

export default App;

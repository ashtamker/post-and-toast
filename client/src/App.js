import React, { useEffect, useState } from 'react'
import useStyles from './AppStyle';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import './app.css';



function App() {
const [currentId, setCurrentId] = useState(null);
const [loading, setLoading] = useState(false);  
const dispatch = useDispatch();
const classes = useStyles();


useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 5000)
},[])

useEffect(() =>  {
  dispatch(getPosts());
}, [currentId ,dispatch]);

  return (
    <Container maxWidth="lg">
    
    {/* <div className="container">
      <div className="mug">
       <div className="beer"></div>
      </div>
      <div className="bubble"></div>
      <div className="small-bubbles"></div>
      <div className="drip"></div>
    </div>     */}
  
        <Navbar />
        <Grow in>
          <Container>
            <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
   
   
     </Container>
    );
}

export default App;

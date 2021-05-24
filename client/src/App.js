import React, { useEffect, useState } from 'react'
import useStyles from './AppStyle';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Loading from './components/Loading/Loading';
import Home from './components/Home/Home';
import PostDetails from './components/postDetails/PostDetails';
import Auth from './components/Auth/Auth';



function App() {

const [loading, setLoading] = useState(true);  
const user = JSON.parse(localStorage.getItem('profile'));

useEffect(() => {
  setTimeout(() => {
    setLoading(false)
  }, 5000)
},[])


  return (
  
    <div>
    {loading === true?
      <Loading />: 
      
      <BrowserRouter>
          <Container maxWidth="xl">
              <Navbar />
              <Switch>
                <Route path="/" exact component={() => <Redirect to="/posts" />} />
                <Route path="/posts" exact component={Home} />
                <Route path="/posts/search" exact component={Home} />
                <Route path="/posts/:id" component={PostDetails} />
                <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
              </Switch>
          </Container>
      </BrowserRouter>
   
}
      </div>
    );
}

export default App;

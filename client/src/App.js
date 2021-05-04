import React, { useEffect } from 'react'
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

function App() {
const dispatch = useDispatch();

useEffect(() =>  {
  dispatch(getPosts());
}, [dispatch]);

  return (
    <div>
      {/* <BrowserRouter>
        <Route exact path='/' component={Form} />
      </BrowserRouter> */}
      
      <Form />
      <Posts />
    </div>
  );
}

export default App;

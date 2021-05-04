import React from 'react'
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

function App() {

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

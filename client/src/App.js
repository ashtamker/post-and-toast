import React from 'react'
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Form from './components/Form/Form';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Form} />
      </BrowserRouter>

    </div>
  );
}

export default App;

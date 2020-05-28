import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component ={HomeLayout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

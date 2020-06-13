import React from 'react';
import './sass/index.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import PdfViewer from './component/profile/PdfViewer';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path ="/demo" component={PdfViewer} />
        <Route exact path ="/" component ={HomeLayout} />
      </Switch>
    </HashRouter>
  );
}

export default App;

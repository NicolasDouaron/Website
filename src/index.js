import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotFound from './components/NotFound'
import Projet from './components/projet'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/home' component={App}/> 
      <Route path='/#home' component={App}/>
      <Route path='/home#portfolio'/>
      <Route path='/projet' component={Projet}/>
      <Route path='/home#cv'/>
      <Route path='/home#contact'/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();

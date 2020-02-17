import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotFound from './components/NotFound'
import Projet from './components/projet'
import PagePortfolio from './components/PagePortfolio'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/home' component={App}/> 
      <Route path='/#home' component={App}/>
      <Route path='/#portfolio'/>
      <Route path='/projet' component={Projet}/>
      <Route path='/portfolio' component={PagePortfolio}/>
      <Route path='/#cv'/>
      <Route path='/#contact'/>
      <Route path='*' component={NotFound}/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();

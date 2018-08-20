import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';




ReactDOM.render(

<BrowserRouter>
<div>
 <App />
 <Switch>
   <Route path="/" component={Home} exact={true} />
   <Route path="/home" component={Home} exact={true} />
   <Route path="/about" component={About}/>
   <Route path="/contact" component={Contact}/>
   <Route component={NotFound}/>
 </Switch>
 </div>
</BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();

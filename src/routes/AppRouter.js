import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';
import App from '../App'




const AppRouter = () => (
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
        </BrowserRouter>
);


export default AppRouter;
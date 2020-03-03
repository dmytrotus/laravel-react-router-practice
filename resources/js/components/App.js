import React from 'react';
import ReactDOM from 'react-dom';
import Links from './Links';

import Main from './pages/Main';
import Docs from './pages/Docs';
import Laracasts from './pages/Laracasts';
import News from './pages/News';
import Blog from './pages/Blog';
import Nova from './pages/Nova';
import Forge from './pages/Forge';
import Vapor from './pages/Vapor';
import Github from './pages/Github';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(){
	return(
		    <div className="content">
         <Router>
          <Switch>

            <Route path="/">
              <Main /> 
            </Route>

            <Route path="/docs">
              <Docs /> 
            </Route>

            <Route path="/laracasts">
              <Laracasts /> 
            </Route>

            <Route path="/news">
              <News /> 
            </Route>

            <Route path="/blog">
              <Blog /> 
            </Route>

            <Route path="/nova">
              <Nova /> 
            </Route>

            <Route path="/forge">
              <Forge /> 
            </Route>

            <Route path="/vapor">
              <Vapor /> 
            </Route>

            <Route path="/github">
              <Github /> 
            </Route>

          </Switch>
        </Router>
             
                <Links />
            </div>
		)
}


if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
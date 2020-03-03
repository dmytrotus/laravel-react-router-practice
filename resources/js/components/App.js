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
         
         

            <Route path="/" exact component={Main}/>
            <Route path="/docs" component={Docs}/>
            <Route path="/laracasts" component={Laracasts}/>
            <Route path="/news" component={News}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/nova" component={Nova}/>
            <Route path="/forge" component={Forge}/>
            <Route path="/vapor" component={Vapor}/>
            <Route path="/github" component={Github}/>
        

            <Links />
       
             
                
            </div>
		)
}


if (document.getElementById('root')) {
    ReactDOM.render(
      <Router>
      <App />
      </Router>, document.getElementById('root'));
}
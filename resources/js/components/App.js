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
         
         

            <Route path="/admin" exact component={Main}/>
            <Route path="/admin/docs" component={Docs}/>
            <Route path="/admin/laracasts" component={Laracasts}/>
            <Route path="/admin/news" component={News}/>
            <Route path="/admin/blog" component={Blog}/>
            <Route path="/admin/nova" component={Nova}/>
            <Route path="/admin/forge" component={Forge}/>
            <Route path="/admin/vapor" component={Vapor}/>
            <Route path="/admin/github" component={Github}/>
        
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
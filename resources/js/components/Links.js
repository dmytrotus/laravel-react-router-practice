import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Links(){
	return (
        
			<div className="links">
                <Link to="/">Main</Link>
		        <Link to="/docs">Docs</Link>
                <Link to="/laracasts">Laracasts</Link>
                <Link to="/news">News</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/nova">Nova</Link>
                <Link to="/forge">Forge</Link>
                <Link to="/vapor">Vapor</Link>
                <Link to="/github">GitHub</Link>
            </div>
       
		)
}

export default Links;
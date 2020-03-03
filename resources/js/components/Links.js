import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

function Links(){
	return (
        
			<div className="links">
                <Link to="/admin">Main</Link>
		        <Link to="/admin/docs">Docs</Link>
                <Link to="/admin/laracasts">Laracasts</Link>
                <Link to="/admin/news">News</Link>
                <Link to="/admin/blog">Blog</Link>
                <Link to="/admin/nova">Nova</Link>
                <Link to="/admin/forge">Forge</Link>
                <Link to="/admin/vapor">Vapor</Link>
                <Link to="/admin/github">GitHub</Link>
            </div>
       
		)
}

export default Links;
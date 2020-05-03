import React from 'react';

import Blog1 from './Blog/Blog1';
import Blog2 from './Blog/Blog2';
import Blog3 from './Blog/Blog3';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Blog(){
	return(
		 <div>

		 <div className="title m-b-md">
                    Blog
            </div>
            
		 <Route path="/admin/blog/1" component={Blog1}/>
		 <Route path="/admin/blog/2" component={Blog2}/>
		 <Route path="/admin/blog/3" component={Blog3}/>

				<Link to="/admin/blog/1">Blog-1</Link><br/>
				<Link to="/admin/blog/2">Blog-2</Link><br/>
				<Link to="/admin/blog/3">Blog-3</Link>

            </div>
	)
}

export default Blog;
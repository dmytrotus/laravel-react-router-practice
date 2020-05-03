import React from 'react';
import { Link } from "react-router-dom";

function Blog1(){
	return(
		 <div >
		    <div className="title m-b-md">
                    Blog1
            </div>

				<Link to="/admin/blog">Back</Link>
            </div>
	)
}

export default Blog1;
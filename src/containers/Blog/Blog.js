import React, { Component } from 'react';

import './Blog.css';
import { Route, NavLink } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';


class Blog extends Component {

    render () {
       
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink exact to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/new-post">New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                    <Route exact path="/" component={Posts} />
                    <Route exact path="/new-post" component={NewPost} />
               
            </div>
        );
    }

   
}

export default Blog;
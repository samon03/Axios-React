import React, { Component } from 'react';

import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';

import asyncComponent from './../../hoc/asyncComponent';

const AsynNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});


class Blog extends Component {

    render () {
       
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink exact to="/posts/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/new-post">New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={AsynNewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
               
            </div>
        );
    }

   
}

export default Blog;
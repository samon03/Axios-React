import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

import FullPost from './../FullPost/FullPost'


class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatePost = posts.map(post => {
                return {
                    ...post,
                    author: 'Samon'
                }
            })
            this.setState({posts: updatePost});

            console.log(posts);
        });
    }

    postSelectHandler = (id) => {
        this.props.history.push('/posts/' + id);
    }

    render() {
        let posts = this.state.posts.map(post => {
            return (
                // <Link to={'/' + post.id} key={post.id}>
                    <Post key={post.id} 
                    title={post.title} 
                    author={post.author} 
                    clicked={() => this.postSelectHandler(post.id)}/>
                // </Link>
            );
        });

        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                
                <Route exact path={this.props.match.url + '/:id'} component={FullPost} />
            </div>
        );
    }
}

export default Posts;
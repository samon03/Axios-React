import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../../components/Post/Post';
import './Posts.css';
// import { Link } from 'react-router-dom';


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
        this.props.history.push('/' + id);
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
            <section className="Posts">
                   {posts}
            </section>
        );
    }
}

export default Posts;
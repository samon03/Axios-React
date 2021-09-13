import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedId: null
    }

    componentDidMount() {
        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0, 3);
            const updatePost = posts.map(post => {
                return {
                    ...post,
                    author: 'Samon'
                }
            })
            this.setState({posts: updatePost});
        });
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} 
            title={post.title} 
            author={post.author} 
            clicked={() => this.postSelectHandler(post.id)}/>
        });
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }

    postSelectHandler = (id) => {
        this.setState({selectedId: id});
    }
}

export default Blog;
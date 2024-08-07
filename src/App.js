// src/App.js
import React, { useState, useEffect } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
    }, []);

    const addPost = (post) => {
        const newPost = { ...post, likes: 0 };
        const newPosts = [newPost, ...posts];
        setPosts(newPosts);
        localStorage.setItem('posts', JSON.stringify(newPosts));
    };

    const likePost = (index) => {
        const newPosts = [...posts];
        newPosts[index].likes = (newPosts[index].likes || 0) + 1;
        setPosts(newPosts);
        localStorage.setItem('posts', JSON.stringify(newPosts));
    };

    const deletePost = (index) => {
        const newPosts = posts.filter((_, i) => i !== index);
        setPosts(newPosts);
        localStorage.setItem('posts', JSON.stringify(newPosts));
    };

    return (
        <div className="App">
            <h1 className="text-center my-4">Instagram Clone</h1>
            <PostForm addPost={addPost} />
            <PostList posts={posts} likePost={likePost} deletePost={deletePost} />
        </div>
    );
};

export default App;

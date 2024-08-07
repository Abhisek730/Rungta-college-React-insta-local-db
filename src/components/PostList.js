// src/components/PostList.js
import React from 'react';

const PostList = ({ posts, likePost, deletePost }) => {
    return (
        <div className="post-list">
            {posts.map((post, index) => (
                <div key={index} className="card mb-3">
                    <img src={post.imageUrl} className="card-img-top" alt="Post" />
                    <div className="card-body">
                        <p className="card-text">{post.caption}</p>
                        <div className="buttons">
                            <button
                                className="btn btn-primary"
                                onClick={() => likePost(index)}
                            >
                                Like
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => deletePost(index)}
                            >
                                Delete
                            </button>
                            <span className="ml-2">{post.likes} {post.likes === 1 ? 'like' : 'likes'}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostList;

// src/components/PostForm.js
import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
    const [caption, setCaption] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (caption && imageUrl) {
            addPost({ caption, imageUrl });
            setCaption('');
            setImageUrl('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                    type="text"
                    id="imageUrl"
                    className="form-control"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="caption">Caption</label>
                <input
                    type="text"
                    id="caption"
                    className="form-control"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Post</button>
        </form>
    );
};

export default PostForm;

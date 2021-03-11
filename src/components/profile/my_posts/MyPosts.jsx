import React from "react";
import PropTypes from 'prop-types';
import './MyPosts.css'
import Post from "./post/Post";

const MyPosts = ({posts, newPostText, updateText, onClick, updateLikesCount}) => {

    const postsElements = posts.map(post => <Post key={post.id} {...post} updateLikesCount={updateLikesCount}/>);

    const handleOnChange = (e => {
        updateText(e.target.value);
    });

    const handleOnClick = (e) => {
        onClick(newPostText, e.target.name);
    }

    return (
        <div className={'posts_block'}>
            My posts
            <div>
                <textarea value={newPostText} onChange={handleOnChange} />
                <br/>
                <button name={'add_post'} onClick={handleOnClick}>Add post</button>
                <button name={'remove_text'} onClick={handleOnClick}>Remove</button>
            </div>
            <div className={'posts'}>{postsElements}</div>
        </div>
    );
};

MyPosts.propTypes = {
    posts: PropTypes.array.isRequired,
    newPostText: PropTypes.string.isRequired,
    updateText: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    updateLikesCount: PropTypes.func.isRequired
}

export default MyPosts;
import React from "react";
import PropTypes from 'prop-types';
import './MyPosts.css'
import Post from "./post/Post";

const MyPosts = ({posts, newPostText, dispatch, updateText, onClick}) => {
    const postsElements = posts.map(post => <Post key={post.id} {...post} dispatch={dispatch}/>);

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
    posts: PropTypes.array.isRequired
}

export default MyPosts;
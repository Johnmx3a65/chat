import React from "react";
import PropTypes from 'prop-types';
import './MyPosts.css'
import Post from "./post/Post";

const MyPosts = ({posts, newPostText, dispatch}) => {
    const postsElements = posts.map(post => <Post key={post.id} {...post} dispatch={dispatch}/>);

    const handleOnChange = (e => {
        dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.target.value});
    });


    const handleOnClick = (e) => {
        if (newPostText) {
            switch (e.target.name) {
                case 'add_post' :
                    dispatch({type: 'ADD-POST'});
                    break;
                case 'remove_text' :
                    dispatch({type: 'DELETE-TEXTAREA-TEXT'});
                    break;
                default :
                    dispatch({type: 'error'});
            }
        } else {
            //showModal
        }
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
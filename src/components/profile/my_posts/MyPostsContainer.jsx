import React from "react";
import './MyPosts.css'
import MyPosts from "./MyPosts";

const MyPostsContainer = ({posts, newPostText, dispatch}) => {

    const updateText = (text) => {
        dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    };

    const onClick = (text, event) => {
        if (text) {
            switch (event.target.name) {
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
    };

    return (
        <MyPosts updateText={updateText} posts={posts} newPostText={newPostText} onClick={onClick} dispatch={dispatch}/>
    );
}

export default MyPostsContainer;
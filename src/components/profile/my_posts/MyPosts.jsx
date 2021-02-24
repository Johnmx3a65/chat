import React from "react";
import MyPostsCss from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = (props) => {
    return (
        <div className={MyPostsCss.posts_block}>
            My posts
            <div>
                <textarea/>
                <br/>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={MyPostsCss.posts}>
                <Post message={props.message}/>
            </div>
        </div>
    );
}

export default MyPosts;
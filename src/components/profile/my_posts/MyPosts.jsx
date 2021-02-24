import React from "react";
import my_posts from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={my_posts.posts}>
                <Post message={props.message}/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;
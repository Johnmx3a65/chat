import React from "react";
import MyPostsCss from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = (props) => {
    const posts = [
        {message : "It's amazing!"},
        {message :  "You're so cool!"}
    ]

    const postsElements = posts.map(post => <Post message={post.message}/>);

    return (
        <div className={MyPostsCss.posts_block}>
            My posts
            <div>
                <textarea/>
                <br/>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={MyPostsCss.posts}>{postsElements}</div>
        </div>
    );
}

export default MyPosts;
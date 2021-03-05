import React, {useState} from "react";
import MyPostsCss from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = (props) => {

    const [text, setText] = useState('');
    const [posts, setPosts] = useState(props.posts);

    const postsElements = posts.map(post => <Post key={post.id} message={post.message}/>);

    const handleOnChange = (e => {
        setText(e.target.value);
    });

    const handleOnClick = () => {
        const newPost = {id: new Date().getTime(), message: text};
        setPosts(() => {
            return [...posts, newPost];
        });
        setText('');
    }

    return (
        <div className={MyPostsCss.posts_block}>
            My posts
            <div>
                <textarea value={text} onChange={e => handleOnChange(e)}/>
                <br/>
                <button onClick={handleOnClick}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={MyPostsCss.posts}>{postsElements}</div>
        </div>
    );
}

export default MyPosts;
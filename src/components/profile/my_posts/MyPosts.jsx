import React, {useState, useReducer, useEffect} from "react";
import PropTypes from 'prop-types';
import './MyPosts.css'
import Post from "./post/Post";

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_post' : {
            return {...state, posts: [...state.posts, action.newItem]};
        }
        case 'props_changed' : {
            return {...state, posts: action.posts};
        }
        default :
            throw new Error('no matching action type');
    }
}

const MyPosts = ({posts}) => {

    const defaultState = {
        posts: posts,
    }

    const [state, dispatch] = useReducer(reducer, defaultState);

    const [message, setMessage] = useState('');

    useEffect(()=>{

        dispatch({type: 'props_changed', posts});
    }, [posts]);

    const postsElements = state.posts.map(post => <Post key={post.id} {...post}/>);

    const handleOnChange = (e => {
        setMessage(e.target.value);
    });

    const handleOnClick = (e) => {
        if (message) {
            switch (e.target.name) {
                case 'add_post' :
                    const newItem = {id: new Date().getTime().toString(), message, likes:0}
                    dispatch({type: 'add_post', newItem});
                    setMessage('');
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
                <textarea value={message} onChange={handleOnChange}/>
                <br/>
                <button name={'add_post'} onClick={handleOnClick}>Add post</button>
                <button name={'remove_text'} onClick={() => setMessage('')}>Remove</button>
            </div>
            <div className={'posts'}>{postsElements}</div>
        </div>
    );
};

MyPosts.propTypes = {
    posts: PropTypes.array.isRequired
}

export default MyPosts;
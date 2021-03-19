import React from "react";
import PropTypes from 'prop-types'
import AvatarLogo from './../../../../assets/images/avatar_logo.png';
import './Post.css';

const Post = ({likes, message, id, updateLikesCount}) => {

    const handleOnClick = () => {
        updateLikesCount(id);
    }

    return (
        <div className={'post-item'}>
            <img src={AvatarLogo} alt={"avatar_icon"}/>
            {message}
            <div className={'btn-likes'}>
                <button name={'like'} onClick={handleOnClick}>like</button>
                <span>{likes}</span>
            </div>
        </div>
    );
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    likes : PropTypes.number.isRequired,
    message : PropTypes.string.isRequired,
    updateLikesCount : PropTypes.func.isRequired
}

export default Post;
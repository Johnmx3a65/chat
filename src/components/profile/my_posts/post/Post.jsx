import React from "react";
import PropTypes from 'prop-types'
import './Post.css';

const Post = ({likes, message, id, updateLikesCount}) => {

    const handleOnClick = () => {
        updateLikesCount(id);
    }

    return (
        <div className={'post-item'}>
            <img src={'data:image/png;base64,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'} alt={"avatar_icon"}/>
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
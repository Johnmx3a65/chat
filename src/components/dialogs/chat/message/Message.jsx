import React from "react";
import './Message.css';

const Message = ({message}) => {

    return (
        <div className={'messageItem'}>
            <div className={(message.mine)? 'myMessageItem' : 'otherMessageItem'}>
                <p>
                    <span>
                        {message.text}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Message;
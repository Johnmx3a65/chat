import React, {useState} from "react";
import './Message.css';

const Message = ({message}) => {

    const [mine, setMine] = useState(message.mine);
    const [text, setText] = useState(message.text);

    return (
        <div className={'messageItem'}>
            <div className={(mine)? 'myMessageItem' : 'otherMessageItem'}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Message;
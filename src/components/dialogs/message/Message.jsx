import React, {useState, useEffect} from "react";
import './Message.css';

const Message = (props) => {

    const [message, setMessage] = useState(props.message);

    useEffect(()=>{
        setMessage(props.message);
    }, [props.message]);

    return (
        <div className={'messageItem'}>
            <div className={(message.mine)? 'myMessageItem' : 'otherMessageItem'}>
                <p>
                    {message.text}
                </p>
            </div>
        </div>
    )
}

export default Message;
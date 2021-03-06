import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Message from "../message/Message";
import "./Chat.css";

const Chat = (props) => {

    const {username, messages} = props;
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState(messages);

    const messagesElements = messageList.map(message => <Message key={message.id} message={message}/>);

    useEffect(() => {
        setMessageList(props.messages);
        setMessage('');
    }, [props.username, props.messages]);


    const handleOnChange = e => {
        setMessage(e.target.value);
    }

    const handleOnClick = () => {
        const newMessage = {id: new Date().getTime().toString(), mine: true, text: message};
        setMessageList(prev => [...prev, newMessage]);
        setMessage('');
    }

    return (
        <div className={'container'}>

            <div className={'username'}>
                {username}
            </div>

            <div className={'messageList'}>
                <div className={'fix'}/>
                {messagesElements}
            </div>

            <div className={'text_area'}>
                <textarea value={message} name={'text'} placeholder={'Enter message...'}
                          onChange={e => handleOnChange(e)}/>
                <button onClick={handleOnClick}>Send</button>
            </div>

        </div>
    );
}

export const RouteChat = ({dialogs}) => {

    const {id} = useParams();
    const [dialog, setDialog] = useState(dialogs.find(d => d.id === Number.parseInt(id)));

    useEffect(() => {
        const initDialog = dialogs.find(d => d.id === Number.parseInt(id));
        setDialog(initDialog);
    }, [id])

    return <Chat messages={dialog.messages} username={dialog.username}/>;
}
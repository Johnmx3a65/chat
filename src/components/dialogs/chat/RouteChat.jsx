import React from "react";
import {useParams} from "react-router-dom";
import Message from "./message/Message";
import "./Chat.css";

const Chat = ({id, username, messages, newMessageText, updateText, addMessage}) => {

    const messagesElements = messages.map(message => <Message key={message.id} message={message}/>);

    const handleOnChange = e => {
        updateText(e.target.value);
    };

    const handleOnClick = () => {
        addMessage(id)
    };

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
                <textarea value={newMessageText} name={'text'} placeholder={'Enter message...'}
                          onChange={e => handleOnChange(e)}/>
                <button onClick={handleOnClick}>Send</button>
            </div>
        </div>
    );
}

export const RouteChat = ({dialogs, newMessageText, updateText, addMessage}) => {

    const {id} = useParams();
    const dialog = dialogs.find(d => d.id === Number.parseInt(id));


    return <Chat {...dialog} newMessageText={newMessageText} updateText={updateText} addMessage={addMessage}/>;
}
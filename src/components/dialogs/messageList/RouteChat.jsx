import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Message from "../message/Message";
import DialogsCss from "../Dialogs.module.css";

const Chat = (props) => {

    const {username, messages} = props;
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState(messages);

    const messagesElements = messageList.map(message => <Message key={message.id} message={message}/>);

    useEffect(() => {
        setMessageList(messages);
        setMessage('');
    }, [username]);




    const handleOnChange = e => {
        setMessage(e.target.value);
    }

    const handleOnClick = () => {
        const newMessage = {id: new Date().getTime().toString(), mine: true, text: message};
        setMessageList(prev => [...prev, newMessage]);
        setMessage('');
    }

    return (
        <div className={DialogsCss.messageList}>

            <div className={DialogsCss.collocutor}>
                {username}
            </div>

            <div className={DialogsCss.messages}>
                {messagesElements}
            </div>

            <div className={DialogsCss.messageArea}>
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
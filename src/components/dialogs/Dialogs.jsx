import React from "react";
import DialogsCss from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={DialogsCss.dialog + ' ' + DialogsCss.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.username}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={DialogsCss.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    const dialogsData = [
        {id:1, username: 'Ivan'},
        {id:2, username: 'Alex'}
    ];

    const messagesData = [
        {message : 'Hi'},
        {message : 'How are you?'},
        {message : 'Yo'}
    ];


    const dialogsElements = dialogsData.map(dialog => <DialogItem id={dialog.id} username={dialog.username}/>);

    const messagesElements = messagesData.map(text => <Message message={text.message}/>);

    return (
        <div className={DialogsCss.dialogs}>
            <div className={DialogsCss.dialogs_items}>{dialogsElements}</div>
            <div className={DialogsCss.messages}>{messagesElements}</div>
        </div>
    );
}

export default Dialogs;
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
    return (
        <div className={DialogsCss.dialogs}>
            <div className={DialogsCss.dialogs_items}>
                <DialogItem id={1} username={"Ivan"}/>
                <DialogItem id={2} username={"Alex"}/>
            </div>
            <div className={DialogsCss.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
}

export default Dialogs;
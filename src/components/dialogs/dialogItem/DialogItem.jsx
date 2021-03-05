import React from "react";
import DialogsCss from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = ({dialog}) => {
    const {username, id} = dialog;
    return (
        <div className={DialogsCss.dialog + ' ' + DialogsCss.active}>
            <NavLink to={'/dialogs/' + id}>{username}</NavLink>
        </div>
    );
}

export default DialogItem;
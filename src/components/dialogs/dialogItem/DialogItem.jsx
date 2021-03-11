import React from "react";
import './DialogItem.css'
import {NavLink} from "react-router-dom";

const DialogItem = ({username, id}) => {

    return (
        <div className={'dialog-item'}>
            <div className={'link'}>
                <NavLink to={'/dialogs/' + id} activeClassName={'item-active'}>{username}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;
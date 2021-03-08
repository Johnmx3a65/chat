import React, {useState, useEffect} from "react";
import './DialogItem.css'
import {NavLink} from "react-router-dom";

const DialogItem = ({dialog}) => {

    const [username, setUsername] = useState(dialog.username);
    const [id, setId] = useState(dialog.id);

    useEffect(()=>{
        setUsername(dialog.username);
    }, [dialog.username]);

    useEffect(()=>{
        setId(dialog.id);
    }, [dialog.id]);

    return (
        <div className={'dialog-item'}>
            <div className={'link'}>
                <NavLink to={'/dialogs/' + id} activeClassName={'item-active'}>{username}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;
import React from "react";
import DialogsCss from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import {Route} from "react-router-dom";
import {RouteChat} from './messageList/RouteChat'

const Dialogs = ({dialogsData}) => {

    const {dialogs} = dialogsData;

    const dialogsElements = dialogs.map(dialog => <DialogItem key={dialog.id} dialog={dialog}/>);

    return (
        <div className={DialogsCss.dialogs}>
            <div className={DialogsCss.dialogs_items}>{dialogsElements}</div>
            <Route path={'/dialogs/:id'}>
                <RouteChat dialogs={dialogs}/>
            </Route>
        </div>
    );
}

export default Dialogs;
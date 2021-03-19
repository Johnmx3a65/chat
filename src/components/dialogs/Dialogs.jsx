import React from "react";
import './Dialogs.css'
import DialogItem from "./dialogItem/DialogItem";
import {Route} from "react-router-dom";
import {RouteChat} from "./chat/RouteChat";

const Dialogs = ({dialogs, newMessageText, addMessage, updateText}) => {

    const dialogItemsElements = dialogs.map(d => <DialogItem key={d.id} id={d.id} username={d.username}/>);

    return (
        <div className={'dialogs'}>

            <div className={'dialogItems'}>
                {dialogItemsElements}
            </div>

            <div className={'chat'}>
                <Route path={'/dialogs/:id'}>
                    <RouteChat newMessageText={newMessageText} dialogs={dialogs} addMessage={addMessage} updateText={updateText}/>
                </Route>
            </div>
        </div>
    );
}

export default Dialogs;
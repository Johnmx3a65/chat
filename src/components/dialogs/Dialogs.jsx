import React from "react";
import './Dialogs.css'
import DialogItem from "./dialogItem/DialogItem";
import {Route} from "react-router-dom";
import ChatContainer from "./chat/ChatContainer";

const Dialogs = ({dialogsData}) => {

    const dialogItemsElements = dialogsData.dialogs.map(dialog => <DialogItem key={dialog.id} {...dialog}/>);

    return (
        <div className={'dialogs'}>

            <div className={'dialogItems'}>
                {dialogItemsElements}
            </div>

            <div className={'chat'}>
                <Route path={'/dialogs/:id'}>
                    <ChatContainer/>
                </Route>
            </div>
        </div>
    );
}

export default Dialogs;
import React, {useState, useEffect} from "react";
import './Dialogs.css'
import DialogItem from "./dialogItem/DialogItem";
import {Route} from "react-router-dom";
import {RouteChat} from './chat/RouteChat'

const Dialogs = ({dialogsData}) => {

    const [dialogs, setDialogs] = useState(dialogsData.dialogs);

    useEffect(()=>{
        setDialogs(dialogsData.dialogs);
    }, [dialogsData.dialogs]);

    const dialogsElements = dialogs.map(dialog => <DialogItem key={dialog.id} dialog={dialog}/>);

    return (
        <div className={'dialogs'}>

            <div className={'dialogItems'}>
                {dialogsElements}
            </div>

            <div className={'chat'}>
                <Route path={'/dialogs/:id'}>
                    <RouteChat dialogs={dialogs}/>
                </Route>
            </div>
        </div>
    );
}

export default Dialogs;
import React from "react";
import DialogsCss from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={DialogsCss.dialogs}>
            <div className={DialogsCss.dialogs_items}>
                <div className={DialogsCss.dialog + ' ' + DialogsCss.active}>
                    Ivan
                </div>
                <div className={DialogsCss.dialog}>
                    Alex
                </div>
            </div>
            <div className={DialogsCss.messages}>
                <div className={DialogsCss.message}>Hi</div>
                <div className={DialogsCss.message}>How are you?</div>
                <div className={DialogsCss.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;
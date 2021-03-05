import React from "react";
import DialogsCss from './../Dialogs.module.css'

const Message = ({message}) => {
    const {mine, text} = message;
    return (
        <div >
            <div className={(mine)? DialogsCss.messageMine : DialogsCss.messageOther}>
                <span>
                    {text}
                </span>
            </div>
        </div>
    )
}

export default Message;
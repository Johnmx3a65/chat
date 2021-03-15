import {connect} from 'react-redux';
import Dialogs from "./Dialogs";
import {ADD_MESSAGE_CREATOR, UPDATE_NEW_MESSAGE_TEXT_CREATOR} from "../../redux/dialogs-reducer";

const mapStateToProps = (state) => {
    return {
        dialogs : state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateText: (text) => {dispatch(UPDATE_NEW_MESSAGE_TEXT_CREATOR(text))},
        addMessage: (id) => {dispatch(ADD_MESSAGE_CREATOR(id))},
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
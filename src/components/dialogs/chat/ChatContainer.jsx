import {connect} from 'react-redux';
import {RouteChat} from "./RouteChat";

const mapStateToProps = (state) => {
    return {
        dialogs : state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateText: (text) => {dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text})},
        addMessage: (id) => {dispatch({type: 'ADD-MESSAGE', dialogId: id})},
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(RouteChat);

export default ChatContainer;
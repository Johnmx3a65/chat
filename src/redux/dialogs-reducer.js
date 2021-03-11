const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {id: 1, username: 'Ivan', messages: [
                {id: 1, mine : true, text: 'Hi'},
                {id: 2, mine : true, text: 'How are you?'},
                {id: 3, mine : false, text: 'Yo'},
                {id: 4, mine : true, text: 'Hi'},
                {id: 5, mine : true, text: 'How are you?'},
                {id: 6, mine : false, text: 'Yo'},
                {id: 7, mine : true, text: 'Hi'},
                {id: 8, mine : true, text: 'How are you?'},
                {id: 9, mine : false, text: 'Yo'},
                {id: 10, mine : true, text: 'Hi'},
                {id: 11, mine : true, text: 'How are you?'},
                {id: 12, mine : false, text: 'Yo'},
                {id: 13, mine : true, text: 'Hi'},
                {id: 14, mine : true, text: 'How are you?'},
                {id: 15, mine : false, text: 'Yo'}]},

        {id: 2, username: 'Alex', messages: [
                {id: 1, mine : true, text: 'Hi, Fred!'},
                {id: 2, mine : false, text: 'Hi, Alex'}]},

        {id: 3, username: 'Lora', messages: [
                {id: 1, mine : true, text: 'Hi, Marko!'},
                {id: 2, mine : false, text: 'Hi, Lora!'}]},
    ],
    newMessageText: ''
}

const dialogsPage = (state = initialState, action) => {
    const stateCopy = {...state};

    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                id : new Date().getTime(),
                mine : true,
                text : stateCopy.newMessageText
            }
            stateCopy.dialogs.find((d) => d.id === action.dialogId).messages
                = [...state.dialogs.find(d => d.id === action.dialogId).messages];
            stateCopy.dialogs.find((d) => d.id === action.dialogId).messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:{
            return state;
        }
    }
}

export default dialogsPage;
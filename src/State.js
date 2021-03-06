export const appData = {

    posts: [
        {id: 1, message: "It's amazing!"},
        {id: 2, message: "You're so cool!"}
    ],

    dialogsData: {

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

            {id: 0, username: 'Lora', messages: [
                    {id: 1, mine : true, text: 'Hi, Fred!'},
                    {id: 2, mine : false, text: 'Hi, Alex'}]}
        ],
    }

}
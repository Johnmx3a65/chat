const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_LIKES_COUNT = 'UPDATE-LIKES-COUNT';
const DELETE_TEXTAREA_TEXT = 'DELETE-TEXTAREA-TEXT';

const initialState = {
    posts: [{id: 1, message: "It's amazing!", likes: 12}, {id: 2, message: "You're so cool!", likes: 7},],
    newPostText: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            const newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case DELETE_TEXTAREA_TEXT:
            state.newPostText = '';
            return state;
        case UPDATE_LIKES_COUNT:
            state.posts.find(p => p.id === action.id).likes += 1;
            return state;
        default:
            return state;
    }
}

export default profileReducer;
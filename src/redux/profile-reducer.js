const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_LIKES_COUNT = 'UPDATE-LIKES-COUNT';
const DELETE_TEXTAREA_TEXT = 'DELETE-TEXTAREA-TEXT';

const initialState = {
    posts: [{id: 1, message: "It's amazing!", likes: 12}, {id: 2, message: "You're so cool!", likes: 7},],
    newPostText: "",
};

const profileReducer = (state = initialState, action) => {
    const stateCopy = {...state};
    switch (action.type) {
        case ADD_POST :
            const newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likes: 0
            }
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;
        case DELETE_TEXTAREA_TEXT:
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_LIKES_COUNT:
            stateCopy.posts = [...state.posts];
            stateCopy.posts.find(p => p.id === action.id).likes += 1;
            return stateCopy;
        default:
            return state;
    }
}

export default profileReducer;
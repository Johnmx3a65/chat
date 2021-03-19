import AvatarLogo from '../assets/images/avatar_logo.png';
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_LIKES_COUNT = 'UPDATE-LIKES-COUNT';
const DELETE_TEXTAREA_TEXT = 'DELETE-TEXTAREA-TEXT';
const SET_BIO = 'SET-BIO';
const SET_FULL_NAME = 'SET-FULL-NAME';
const SET_AVATAR = 'SET-AVATAR';
const SET_IS_LOADING = 'SET-IS-LOADING';

const initialState = {
    posts: [{id: 1, message: "It's amazing!", likes: 12}, {id: 2, message: "You're so cool!", likes: 7},],
    newPostText: "",
    avatar : AvatarLogo,
    bio : "",
    fullName: "",
    isLoading: true,
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
        case SET_BIO:{
            return {...state, bio: action.bio};
        }
        case SET_FULL_NAME:{
            return {...state, fullName: action.fullName};
        }
        case SET_AVATAR:{
            return {...state, avatar: action.avatar};
        }
        case SET_IS_LOADING:{
            return {...state, isLoading: action.isLoading};
        }
        default:
            return state;
    }
}

const setBio = bio => ({type: SET_BIO, bio});
const setFullName = fullName => ({type: SET_FULL_NAME, fullName});
const setAvatar = avatar => ({type: SET_AVATAR, avatar});
const setIsLoading = isLoading => ({type: SET_IS_LOADING, isLoading});

export const getProfile = (id) => dispatch => {
    dispatch(setIsLoading(true));

    usersAPI.getProfile(id).then(data => {
        dispatch(setAvatar(data.photos.small));
        dispatch(setBio(data.aboutMe));
        dispatch(setFullName(data.fullName));
        dispatch(setIsLoading(false));
    }).catch(() => {console.log('error fetch data'); dispatch(setIsLoading(false));});
}

export default profileReducer;

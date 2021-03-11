import {combineReducers, createStore} from "redux";
import profilePage from "./profile-reducer";
import dialogsPage from "./dialogs-reducer";

let reducers = combineReducers({profilePage, dialogsPage});

let store =  createStore(reducers);

window.store = store;

export default store;
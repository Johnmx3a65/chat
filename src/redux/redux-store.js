import {combineReducers, createStore} from "redux";
import profilePage from "./profile-reducer";

let reducers = combineReducers({profilePage});

let store =  createStore(reducers);

window.store = store;

export default store;
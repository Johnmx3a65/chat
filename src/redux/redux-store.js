import {combineReducers, createStore} from "redux";
import profilePage from "./profile-reducer";

let reducers = combineReducers({profilePage});

let store =  createStore(reducers);

export default store;
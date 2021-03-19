import React from 'react'
import {Route} from "react-router-dom";
import './App.css'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

const App = () => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'}>
                        <DialogsContainer/>
                    </Route>
                    <Route path={'/profile/:id?'}>
                        <ProfileContainer/>
                    </Route>
                    <Route path={'/users'}>
                        <UsersContainer/>
                    </Route>
                </div>
            </div>
    );
}

export default App;

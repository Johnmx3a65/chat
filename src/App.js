import React from 'react'
import {Route} from "react-router-dom";
import './App.css'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";


const App = () => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'}>
                        <DialogsContainer/>
                    </Route>
                    <Route path={'/profile'}>
                        <Profile/>
                    </Route>
                    <Route path={'/users'}>
                        <UsersContainer/>
                    </Route>
                </div>
            </div>
    );
}

export default App;

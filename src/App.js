import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import './App.css'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";


const App = ({data}) => {
    const {posts, dialogsData} = data;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'}>
                        <Dialogs dialogsData={dialogsData}/>
                    </Route>
                    <Route path={'/profile'}>
                        <Profile posts={posts}/>
                    </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

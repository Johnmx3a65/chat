import React, {useEffect, useState} from 'react'
import {Route} from "react-router-dom";
import './App.css'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {appData} from "./State";

const App = () => {
    const [data, setData] = useState(appData);

    useEffect(() => {
        setData(appData);
    }, []);

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'}>
                        <Dialogs dialogsData={data.dialogsData}/>
                    </Route>
                    <Route path={'/profile'}>
                        <Profile/>
                    </Route>
                </div>
            </div>
    );
}

export default App;

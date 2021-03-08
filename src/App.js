import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import './App.css'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {appData} from "./State";

const App = (props) => {
    const [data, setData] = useState(appData);

    /*useEffect(()=>{
        setData(appData);
    }, [appData]);*/

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'}>
                        <Dialogs dialogsData={data.dialogsData}/>
                    </Route>
                    <Route path={'/profile'}>
                        <Profile posts={data.posts}/>
                    </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

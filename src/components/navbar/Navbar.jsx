import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={'nav'}>
            <div className={'nav-item'}>
                <NavLink to={"/profile"} activeClassName={'active'} >Profile</NavLink>
            </div>
            <div className={'nav-item'}>
                <NavLink to={"/dialogs"} activeClassName={'active'}>Dialogs</NavLink>
            </div>
            <div className={'nav-item'}>
                <NavLink to={"/news"} activeClassName={'active'}>News</NavLink>
            </div>
            <div className={'nav-item'}>
                <NavLink to={"/music"} activeClassName={'active'}>Music</NavLink>
            </div>
            <div className={'nav-item'}>
                <br/>
                <NavLink to={"/users"} activeClassName={'active'}>All Users</NavLink>
            </div>
            <div className={'nav-item'}>
                <br/>
                <NavLink to={"/settings"} activeClassName={'active'}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
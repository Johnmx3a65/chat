import React from "react";
import navbar_css from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={navbar_css.nav}>
            <div className={navbar_css.item}>
                <NavLink to={"/profile"} activeClassName={navbar_css.active} >Profile</NavLink>
            </div>
            <div className={navbar_css.item}>
                <NavLink to={"/dialogs"} activeClassName={navbar_css.active}>Dialogs</NavLink>
            </div>
            <div className={navbar_css.item}>
                <NavLink to={"/news"} activeClassName={navbar_css.active}>News</NavLink>
            </div>
            <div className={navbar_css.item}>
                <NavLink to={"/music"} activeClassName={navbar_css.active}>Music</NavLink>
            </div>
            <div className={navbar_css.item}>
                <br/>
                <NavLink to={"/settings"} activeClassName={navbar_css.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
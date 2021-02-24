import React from "react";
import navbar_css from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navbar_css.nav}>
            <div className={navbar_css.item}>
                <a href={"/profile"}>Profile</a>
            </div>
            <div className={navbar_css.item}>
                <a href={"/dialogs"}>Dialogs</a>
            </div>
            <div className={navbar_css.item}>
                <a href={"/news"}>News</a>
            </div>
            <div className={navbar_css.item}>
                <a href={"/music"}>Music</a>
            </div>
            <div className={navbar_css.item}>
                <br/>
                <a href={"/settings"}>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
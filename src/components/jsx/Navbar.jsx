import React from "react";
import navbar_css from '../css/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navbar_css.nav}>
            <div className={navbar_css.item}>
                <a href={"/index.html"}>Profile</a>
            </div>
            <div className={navbar_css.item}>
                <a href={"/index.html"}>Messages</a>
            </div>
            <div className={navbar_css.item}>
                <a href={"/index.html"}>News</a>
            </div>
            <div className={navbar_css.item}>
                <a href={"/index.html"}>Music</a>
            </div>
            <div className={navbar_css.item}>
                <a href={"/index.html"}>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
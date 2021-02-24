import React from "react";

const Navbar = () => {
    return (
        <nav className={'nav'}>
            <div>
                <a href={"/index.html"}>Profile</a>
            </div>
            <div>
                <a href={"/index.html"}>Messages</a>
            </div>
            <div>
                <a href={"/index.html"}>News</a>
            </div>
            <div>
                <a href={"/index.html"}>Music</a>
            </div>
            <div>
                <a href={"/index.html"}>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
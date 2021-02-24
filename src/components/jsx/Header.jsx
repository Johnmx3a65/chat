import React from "react";
import header_css from '../css/Header.module.css';

const Header = () => {
    return (
        <header className={header_css.header}>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png'} alt={"logo"}/>
        </header>
    );
}

export default Header;
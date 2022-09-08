import React from 'react';
import {ReactComponent as Logo} from "../logo.svg";

const Header = () => {
    return (
        <header className="App-header">
            <Logo style={{height: 200}}/>
            <h1>Hi, I'm Morgan!</h1>
        </header>
    );
}

export default Header;

// import React from 'react' and useEffect and useState and Fragment;
import React, { useEffect, useState, Fragment } from 'react';
import logo from './logo.svg';
import './css/Header.css';
import Switch from './Switch';

function Header() {
    return (
        <header className="App-header">
            <div className="left-logo">
                <a href="">
                    <figure>
                        <img src={logo} className="App-logo" alt="logo" />
                        <span>Cartitas</span>
                    </figure>
                </a>
                <Switch />
            </div>
            <ul>
                <li><a href="">How to play</a></li>
                <li><a href="">About me</a></li>
                <li><a href="">Repository</a></li>
            </ul>
        </header>
    );
}

export default Header;
// import React from 'react' and useEffect and useState and Fragment;
import React, { useEffect, useState, Fragment } from 'react';
import logo from './logo.svg';
import './css/Header.css';

function Header() {
    return (
        <header className="App-header">
            <a href="#">
                <figure>
                    <img src={logo} className="App-logo" alt="logo" />
                    <span>Cartitas</span>
                </figure>
            </a>
            <ul>
                <li><a href="">How to play</a></li>
                <li><a href="">About me</a></li>
                <li><a href="">Repo</a></li>
            </ul>
        </header>
    );
}

export default Header;
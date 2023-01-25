import logo from "../../assets/Images/logo.png";
import {NavLink} from "react-router-dom";
import "../../styles/navStyle.css";
import React from 'react';

const Nav = () => {
    return (
        <div className={"navParent"}>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="navigate">
                <ul id="href">
                    <li>
                        <NavLink to={"/"}> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact-us"}>Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/add-post"}>Add A New Post</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
import React from "react";
import {Link} from "react-router-dom";

import "./nav.css"

function Navbar (){
    return(
        <nav className="nav-center" role="navigation">
            <div className="nav-wrapper ">
            <ul id="nav-mobile" className="navbar">
                <li ><Link to = {(process.env.PUBLIC_URL || "/")+"/"}><i className = "material-icons">home</i></Link></li>
                <li ><Link to = {(process.env.PUBLIC_URL || "/")+ "/work"}> <i className = "material-icons">folder_open</i></Link></li>
                <li ><a href = {(process.env.PUBLIC_URL || "/")+ "/Honda-Resume.pdf"}><i  className = "material-icons large">insert_drive_file</i></a></li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;
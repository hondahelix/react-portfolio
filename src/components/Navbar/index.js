import React from "react";

import "./nav.css"

function Navbar (){
    return(
        <nav className="nav-center" role="navigation">
            <div className="nav-wrapper ">
            <ul id="nav-mobile" className="navbar">
                <li><a href="/"><i className = "material-icons">home</i></a></li>
                <li><a href="/work"> <i className = "material-icons">folder_open</i></a></li>
                <li><a href="/resume"><i  className = "material-icons large">insert_drive_file</i></a></li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;
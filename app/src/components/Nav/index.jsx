import React from "react";
import {Link} from "react-router-dom";

import logo from "../../images/logo.svg";

const Nav = (props) => {
    return (
        <nav>
            <Link to="/" className="logo">
                <img width="45" src={logo}/>
                <div> <span>Gaijin</span> Goods</div>
            </Link>
            <div className="links">

            </div>
        </nav>
    )
}

export default Nav;
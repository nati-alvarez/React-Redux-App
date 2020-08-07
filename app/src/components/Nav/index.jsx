import React from "react";

import logo from "../../images/logo.svg";

const Nav = (props) => {
    return (
        <nav>
            <div className="logo">
                <img width="45" src={logo}/>
                <div> <span>Gaijin</span> Goods</div>
            </div>
            <div className="links">

            </div>
        </nav>
    )
}

export default Nav;
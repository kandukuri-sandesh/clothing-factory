import React from "react";
import "./header.styles.scss"
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assests/crown.svg"

const Header = () => (
    <div className="header" >
    <div className="logo" >
    <Link to="/" className = "logo-container" ><Logo className="logo" /></Link>
    </div>

    <div className="options" >
     <Link to="/shop" className = "option"> HOME</Link>
    
    
     <Link to="/shop"className = "option"> CONTACT US  </Link>
  
    
     <Link to="/signIn"className = "option"> SIGN IN  </Link>
    </div>
    </div>
)


export default Header;
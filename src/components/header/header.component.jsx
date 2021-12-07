import React from "react";
import "./header.styles.scss"
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assests/crown.svg"
import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => (
    <div className="header" >
    <div className="logo" >
    <Link to="/" className = "logo-container" ><Logo className="logo" /></Link>
    </div>

    <div className="options" >
     <Link to="/shop" className = "option"> HOME</Link>

     <Link to="/shop" className = "option">CONTACT US</Link>
    
     { currentUser ?
        <div className = "option" onClick = {() => auth.signOut()} >SIGN OUT</div> :
     <Link to="/signIn"className = "option"> SIGN IN  </Link>
     }
    
     </div>
    </div>
)


export default Header;
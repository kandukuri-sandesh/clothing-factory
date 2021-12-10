import React from "react";
import "./header.styles.scss"
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assests/crown.svg"
import { auth } from "../../firebase/firebase.utils";
import {connect} from "react-redux";

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
const mapStateToProps = (state) => ({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header);
import React from "react";
import "./header.styles.scss"
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assests/crown.svg"
import { auth } from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import selectCartHidden from "../../redux/cart/cart.selectors"
import { selectCurrentUser } from "../../redux/user/user.selector";


const Header = ({currentUser,hidden}) => (
    <div className="header" >
    <div className="logo" >
    <Link to="/" className = "logo-container" ><Logo className="logo" /></Link>
    </div>

    <div className="options" >
     <Link to="/" className = "option"> HOME</Link>

     <Link to="/shop" className = "option">SHOP</Link>

     <Link to="/ownerpage" className = "option">CONTACT US</Link>
    
     { currentUser ?
        <div className = "option" onClick = {() => auth.signOut()} >SIGN OUT</div> :
     <Link to="/signIn"className = "option"> SIGN IN  </Link>
     }
     <CartIcon />
     </div>
     {hidden?null:<CartDropdown/>}
    </div>
)
const mapStateToProps = (state) => ({
    currentUser:selectCurrentUser(state),
    hidden:selectCartHidden(state)
})

export default connect(mapStateToProps)(Header);
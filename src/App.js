import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/HomePage/homepage.components.jsx"
import {Router,Route,Routes,Link,useParams} from "react-router-dom";
import Shop from "./Pages/Shop/shoppage.component.jsx"
import Header from './components/header/header.component';
import SignInAndSignOutPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.action.jsx";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {userActionTypes} from "./redux/user/user.types";
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './Pages/CheckoutPage/checkoutPage.component';



class App extends Component{
 

 unSubscribeFromAuth = null
  
  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      
       userRef.onSnapshot(Snapshot => {
        const {displayName,email} = Snapshot.data();
        
        setCurrentUser({
          id:Snapshot.id,
          displayName,
          email
        } )
      })
      
      } 
        setCurrentUser(userAuth);
  });
  }

  
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }


  render(){
    return(
    <div>
    <nav>
    <Header  />
    </nav>
    
    <Routes>
    <Route path ="/" element = {<HomePage/>} />
    <Route path ="/shop" element = {<Shop/>} />
    <Route exact path = "/signIn" element = {this.props.currentUser? (<Navigate to="/" />) : <SignInAndSignOutPage/>} />
    <Route path ="/checkoutpage" element = {<CheckoutPage/>} />
    </Routes>
    </div>
  
  )
    }
 
}

const mapPropsToState = (state) => ({
  currentUser : selectCurrentUser(state)
})

const mapDispatchToState = (dispatch) => ({
 setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect( mapPropsToState,mapDispatchToState) (App);

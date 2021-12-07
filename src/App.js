import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/HomePage/homepage.components.jsx"
import {Router,Route,Routes,Link,useParams} from "react-router-dom";
import Shop from "./Pages/Shop/shoppage.component.jsx"
import Header from './components/header/header.component';
import SignInAndSignOutPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from "./firebase/firebase.utils";



class App extends Component{
  constructor(){
   super()

   this.state = {currentUser:null}

  }

 unSubscribeFromAuth = null
  
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(Snapshot => {
        const {displayName,email} = Snapshot.data();

        this.setState({currentUser:{
          id:Snapshot.id,
          displayName,
          email
        }} )
      })
      
      } 
      this.setState({currentUser:userAuth})
  });
  }

  
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }


  render(){
    return(
    <div>
    <nav>
    <Header currentUser = {this.state.currentUser} />
    </nav>
    
    <Routes>
    <Route path ="/" element = {<HomePage/>} />
    <Route path ="/shop" element = {<Shop/>} />
    <Route path = "/signIn" element = {<SignInAndSignOutPage/>}     />
    </Routes>
    </div>
  
  )
    }
 
}
export default App;

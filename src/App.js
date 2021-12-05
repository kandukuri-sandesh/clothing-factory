import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/HomePage/homepage.components.jsx"
import {Router,Route,Routes,Link,useParams} from "react-router-dom";
import Shop from "./Pages/Shop/shoppage.component.jsx"
import Header from './components/header/header.component';
import SignInAndSignOutPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';



function App(){
  return(
    <div>
    <nav>
    <Header/>
    </nav>
    
    <Routes>
    <Route path ="/" element = {<HomePage/>} />
    <Route path ="/shop" element = {<Shop/>} />
    <Route path = "/signIn" element = {<SignInAndSignOutPage/>}     />
    </Routes>
    </div>
  
  )

}
export default App;

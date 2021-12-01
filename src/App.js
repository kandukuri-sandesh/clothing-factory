import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/HomePage/homepage.components.jsx"
import {Router,Route,Routes,Link,useParams} from "react-router-dom";
import Shop from "./Pages/Shop/shoppage.component.jsx"




function App(){
  return(
    <div>
    <nav>
    
    </nav>
    
    <Routes>
    <Route path ="/" element = {<HomePage/>} />
    <Route path ="/shop" element = {<Shop/>} />
    </Routes>
    </div>
  
  )

}
export default App;

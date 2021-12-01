import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/HomePage/homepage.components.jsx"
import {Router,Route,Routes,Link,useParams} from "react-router-dom";

const HatsPage = ()=>{
  const {hats} = useParams();
  return(
  <div>
  <Link to= "/sneakers" > Sneakers </Link>
    <Link to= "/shoes" > Shoes</Link>
    <Link to= "/watches" > Watches </Link>
  <h1>HatsPage is about {hats}  </h1>
  </div>)
}


function App(){
  return(
    <div>
    <nav>
    
    </nav>
    
    <Routes>
    <Route path ="/" element = {<HomePage/>} />
    <Route path ="/:hats" element = {<HatsPage/>} />
    </Routes>
    </div>
  
  )

}
export default App;

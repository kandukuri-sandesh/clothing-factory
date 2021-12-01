import React from "react";
import "./menu-list.styles.scss";
import {useNavigate,useLocation} from "react-router-dom";


export const MenuList = ({title,imageUrl,id,size,linkUrl,match}) => {
     const Navigate = useNavigate();
     const Location = useLocation();
     return (
    <div  className = {`${size} menu-item`} onClick = {()=> Navigate(`${Location.pathname}${linkUrl}`) } >
      <div style = {{backgroundImage:`url(${imageUrl})` }} className = "background-image" />
       <div className="content" >
        <h1 className="title" >{title}</h1>
        <span className = "subtitle"> SHOP NOW </span>
       </div>
      </div>
)}

export default MenuList;

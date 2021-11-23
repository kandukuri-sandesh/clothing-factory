import React from "react";
import "./menu-list.styles.scss"

export const MenuList = ({title,imageUrl,id,size}) => (
    <div  className = {`${size} menu-item`}>
      <div style = {{backgroundImage:`url(${imageUrl})` }} className = "background-image" />
       <div className="content" >
        <h1 className="title" >{title}</h1>
        <span className = "subtitle"> SHOP NOW </span>
       </div>
      </div>
)

export default MenuList;

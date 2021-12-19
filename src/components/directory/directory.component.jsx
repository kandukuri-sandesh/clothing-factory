import React from "react";
import MenuList from "../menu-list/menu-list.components"
import "./directory.styles.scss"
import { connect } from "react-redux";
import {selectDirectorySection} from "../../redux/directory/directory.selector.jsx"

const Directory = ({section})=> (
        <div className="directory-menu">     
          {section.map(({id, ...othersectionprops /*title,imageUrl,size,linkUrl*/}) => <MenuList key = {id} {...othersectionprops} /*title = {title} imageUrl ={imageUrl} size = {size} linkUrl = {linkUrl}*/ />  )}

        </div>
        )




  

const mapStateToProps = (state)=>({
  section:selectDirectorySection(state)
})



export default connect(mapStateToProps,null)(Directory);    
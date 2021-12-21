import { React } from "react";
import CollectionItem from "../collection-items/collection-items.component";
import { useNavigate } from "react-router-dom";
import "./collection-preview.styles.scss"
const CollectionPreview = ({title,items}) => {
   const taketo = useNavigate();
    return(
    <div className="collection-preview" >
    <h1 className="title" >{title.toUpperCase()}</h1>
    <div className = "preview" >
    {items.filter((item,index) => index < 4 ).map((item) => <CollectionItem key = {item.id} item = {item} />  )}
    </div>
    <div className="view-more">
    <h1 className="button" onClick={()=> taketo(`${title.toLowerCase()}`) } > VIEW MORE</h1>
    </div>
    </div>)
}
export default CollectionPreview;
import { React } from "react";


const CollectionPreview = ({title,items}) => (
    <div className="collection-preview" >
    <h1 className="title" >{title}</h1>
    <div className = "preview" >
    {items.filter((itms,index) => index < 4 ).map(items => <div  key = {items.id} >{items.name}</div>) }
    </div>
    </div>
)

export default CollectionPreview;
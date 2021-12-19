import React from "react";
import { useParams } from "react-router";
import CollectionSet from "../../components/collection-set/collectionSet.component";
const CollectionPage = () =>{

const {item} = useParams();
return(
    <div>
    <CollectionSet item = {item} />
    
    </div>
)}

export default CollectionPage;
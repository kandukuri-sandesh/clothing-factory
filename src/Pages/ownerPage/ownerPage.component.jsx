import React from "react";
import "./ownerPage.styles.scss"

const OwnerPage = () => {
   const HandleSubmit = (e) => {
       
       const value = document.getElementById("input")
       const values = document.getElementById("text-area")
       console.log(values.value)
       console.log(value.value)
       if( values.value === ""  ){
          alert("Text field cannot be empty")
          return
       }
       else if(Number.isInteger(value.value)){
          alert("Contact Details cannot be empty")
          return
       }
       alert("Your Query is submitted,we will contact you in 24 hours")
       value.value =""
       values.value =""
       

   }

  


   return(

    <div className="box" >
    <div className = "contact-box" >
     <div className="contact-us-box" >
     <h1 className="contact-us" >CONTACT US</h1>
     </div>
     <div className="text-area" >
     <textarea id = "text-area" cols = "100"  autoFocus rows={10} required placeholder="Please specify your concern here..." maxLength={200} />
     </div>
     <input id = "input" type={"number"}   placeholder={"Contact Number"} className="input" />
     <button className="button"   onClick={HandleSubmit}>Submit</button>
     <div className="address-email">
     <div className="address-box" >
     <h2>Address</h2>
     <span>Krishna Sapphire</span><br></br>
     <span>6th Floor</span><br></br>
     <span>Madhapur</span><br></br>
     <span>Hyderabad</span><br></br>
     <span>500084</span>
     </div>
     
     <div className="email-box" >
     <div>
     <h2>Email</h2>
     <span>contact@crwnclothing.in</span>
     </div>
     <div className="phone" >
     <h2>Phone</h2>
     <span>+91-8008205553</span><br></br>
     <span>+91-9676969276</span>
     </div>
     </div>
     </div>
     
     </div>
     </div>
    
    
)
   }

export default OwnerPage;
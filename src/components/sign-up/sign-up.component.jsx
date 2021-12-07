import React,{Component} from "react";

import { auth,createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";



class SignUp extends Component{
    constructor(){
        super();

      this.state = {
          displayName:"",
          email:"",
          password:"",
          confirmPassword:""
        }  
    }

 handleChange = (event) => {
   const {name,value} = event.target;
   this.setState({[name]:value});
 }

 handleSubmit = async (event) =>{
     event.preventDefault();
     const {displayName,email,password,confirmPassword} = this.state

     if(password !== confirmPassword){
         alert("Password Mismatch")
         return
     }
     try{
        const {user} = await auth.createUserWithEmailAndPassword(email,password);
        await createUserProfileDocument(user,{displayName})
        
        this.state = {
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
      }  
     } catch(error){
      console.log(error);
     }
 }
 

 render(){
     const {displayName,email,password,confirmPassword} = this.state
     return(
         <div className="sign-up">
         <h1>If you dont have an Account</h1>
         <span>Sign-up with Email and Password</span>
         <form className="sign-up-form" onSubmit={this.handleSubmit} >
         <FormInput
         type = "text"
         value = {displayName}
         name = "displayName"
         onChange = {this.handleChange}
         label = "Display Name"
         />
         <FormInput
         type = "email"
         value = {email}
         name = "email"
         onChange = {this.handleChange}
         label = "Email"
         />
         <FormInput
         type = "password"
         value = {password}
         name = "password"
         onChange = {this.handleChange}
         label = "Password"
         />
         <FormInput
         type = "password"
         value = {confirmPassword}
         name = "confirmPassword"
         onChange = {this.handleChange}
         label = "Confirm Password"
         />
         <CustomButton> SIGN UP </CustomButton>
         </form>
         </div>
     )
 }   
}



export default SignUp;
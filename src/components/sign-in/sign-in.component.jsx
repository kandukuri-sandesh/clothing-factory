import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignInAndSignOut extends React.Component{
    constructor(){
            super()
      
         this.state ={
             email:"",
             password:""
         }
        }
    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({email:"",password:""})
    }
    handleChange = (event) => {
    const {name,value} = event.target;
    this.setState({[name]:value})
        
    }    
     
    
    render(){
      return(
        <div className="sign-in" >
         <h1>If Already Have an Account?</h1>
         <span>Sign in with your email and password</span>

         <form onSubmit = {this.handleSubmit} >
         <FormInput type = "email" name ="email" value = {this.state.email} label ="Email" handleChange = {this.handleChange} required  />
         
         <FormInput type = "password" name = "password" label = "Password" value = {this.state.password} handleChange = {this.handleChange} required />
         <div className = "button" >
         <CustomButton type = "submit"  >sign in</CustomButton>
         <CustomButton  onClick = {signInWithGoogle} isGoogleSignIn   >Sign In With Google</CustomButton>
         </div>
         </form>
        </div>
      )}
    
    }
    
    
    export default SignInAndSignOut;
import React, {useState} from 'react';
import  '../style.css';

class Login extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        fields: {},
        errors: {}
      }
    }
  
    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      //First Name
      if(!fields["fname"]){
        formIsValid = false;
        errors["fname"] = "  Please fill in";
      }
  
      if(typeof fields["fname"] !== "undefined"){
        if(!fields["fname"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["fname"] = "  Only letters";
        }      	
      }

      //Last Name
      if(!fields["lname"]){
        formIsValid = false;
        errors["lname"] = "  Please fill in";
      }
  
      if(typeof fields["lname"] !== "undefined"){
        if(!fields["lname"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["lname"] = "  Only letters";
        }      	
      }
  
      //Email
      if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "    Email Required.";
      }
  
      if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');
  
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2) || fields["email"].replace(/[^@]/g, "").length !== 1) {
          formIsValid = false;
          errors["email"] = "    Invalid email address.";
        }
        else{
            errors["email"] = "    Email successfully recorded!"
        }
      }

      //Phone
      if(!fields["phone"]){
        formIsValid = false;
        errors["phone"] = "    Phone Number Required";
      }
  
      if(typeof fields["phone"] !== "undefined"){
        if(!(fields["phone"].match(/^[0-9]+$/))){
          formIsValid = false;
          errors["phone"] = "    Invalid phone number.";
        }
        else{
            errors["phone"] = "    Number successfully recorded!"
        }      	
      }
  
  
  
      this.setState({errors: errors});
    }
  
    contactSubmit(e){
      e.preventDefault();
      this.handleValidation();
    }
  
    handleChange(field, e){    		
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
    }
  
    render(){
      return (
        <div>       
            <body>
                <h2>Log in with email</h2>
                <hr></hr> 	

                <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                        <label>&ensp;First Name:&emsp;</label><br/>
                        <input ref="fname" type="text" placeholder="John" onChange={this.handleChange.bind(this, "fname")} value={this.state.fields["fname"]}/>
                        <span className="error">{this.state.errors["fname"]}</span>
                        
                        <br/>
                        
                        <label>&ensp;Last Name:&emsp;</label><br/>
                        <input ref="lname" type="text" placeholder="Doe" onChange={this.handleChange.bind(this, "lname")} value={this.state.fields["lname"]}/>
                        <span className="error">{this.state.errors["lname"]}</span>
                        <br/>
                    

                        <br/>
                        <label for="nemail">&ensp;Email:&nbsp;&emsp;</label>
                        <input refs="email" type="text" size="30" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                        <span className="error">{this.state.errors["email"]}</span>

                        <br/>
                        <label for="phone">&ensp;Phone:&emsp;</label>
                        <input refs="phone" type="text" size="15" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                        <span className="error">{this.state.errors["phone"]}</span>
                        <br/>
                        
                        <br/>
                        <button className="loginbtn" id="submit" value="Submit">Log In</button>
                </form>
          </body>
        </div>
      )
    }
  }
  
export default Login
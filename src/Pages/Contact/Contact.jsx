import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div>
      <h1 className='text-center mt-5 mb-5' style={{fontSize:"50px"}}>Sign Up</h1>
<form class="form container mb-5" style={{height:"600px", width:"1000px"}}>
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input class="input " type="text" placeholder="" required="" style={{width:"110%"}} />
            <span>Firstname</span>
        </label>

        <label>
            <input class="input ms-3" type="text" placeholder="" required="" style={{width:"110%"}}/>
            <span className='ms-3'>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input class="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
    </div>
  )
}

export default Contact

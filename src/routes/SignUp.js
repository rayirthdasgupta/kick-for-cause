import React, { useState } from 'react';
import '../components/SignUp.css';
import Navbar from '../components/Navbar.js';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const form = e.target;
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        alert("Thanks for signing up!");
        form.reset();
      })
      .catch((error) => alert(error));
  };
  

  return <div>
    <Navbar/>
    <div className="signup-container">
      <h1 className='signup-title'>Camp Interest Form</h1>
      <form
      name = "camp-signup"
      method = "POST"
      data-netlify = "true" 
      onSubmit={handleSubmit}
      className='signup-form'
      >
        <input type = "hidden" name = "form-name" value = "camp-signup" />
        <input name="parent-name" type="text" placeholder="Guardian's Name" className='form-input' required />
        <input name="camper-name" type="text" placeholder="Camper's Name" className='form-input' required />
        <input name="email" type="email" placeholder="Guardian's Email" className='form-input' required />
        <input name="age" type="number" placeholder="Camper's Age" className='form-input' required />
        <textarea name="message" placeholder="Anything we should know?" className='form-textarea'/>
        <button type="submit" className='form-button'>Sign Up For More Info</button>
      </form>
    </div>

  </div>
    
    
  
};

export default SignUp;

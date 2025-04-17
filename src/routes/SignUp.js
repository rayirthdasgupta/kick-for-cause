import React from 'react';
import '../components/SignUp.css'
import Navbar from '../components/Navbar.js';
import CampForm from '../components/CampForm.js';

const SignUp = () => {
  /*const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    message: '',
  });*/




  return <div>
    <Navbar/>

    <div className="signup-container">
      <h1 className='signup-title'>Camp Interest Form</h1>
      <CampForm/>
    </div>

  </div>
    
    
  
};

export default SignUp;

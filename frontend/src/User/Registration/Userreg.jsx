import React, { useState } from 'react';
import Userreg1 from '../../components/Images/homecover2.jpeg';
import './Userreg.css'; 
import axios from 'axios';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import Success from '../../components/Success';
import { Link, useNavigate } from 'react-router-dom';

function Userreg  ()  {
  const [name ,setName] =useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  
  async function register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      try {
        setLoading(true);
        console.log("Registering user:", user); 
        await axios.post('http://localhost:3500/user/register', user);
        setLoading(false);
        setSuccess('Registered Successfully');
  
        setName('');
        setEmail('');
        setPassword('');
        setCpassword('');
        console.log("Registration successful");
        navigate('/scans');

      } catch (error) {
        setLoading(false);
        setError('Registration Failed');
        console.error("Error during registration:", error); 
      }
    } else {
      alert('Passwords do not Match');
    }
  }  
  return (
    <div className="userreg-container">
      {loading && <Loader />}
      {error && <Error />}
      {success && <Success />}
      <div className='userreg-image-container'>
        <div className='userreg-text-container'>
          <h1 className='userreg-title'>Drink 3L Water Every Day</h1>
          <p className='userreg-description'>If the disease is precisely identified, a good resolution is far more likely.</p>
        </div>
        <img src={Userreg1} className='userreg-image' alt="User Login" />
      </div>
      <div className='userreg-form-container'>
        <h1 className='userreg-app-title'>PrivateScanningCentre</h1>
        <div className='userreg-form'>
          <div className='userreg-form-section'>
            <h3 className='userreg-form-heading'>Register</h3>
            <p className='userreg-form-text'>Please Enter The Details.</p>
          </div>

          <div className='userreg-form-section'>
            <input
              placeholder='Name'
              className='userreg-input'
              name='name' 
              value={name}
               onChange={(e) => setName(e.target.value)} />

            <input
              type='Email'
              placeholder='Email'
              className='userreg-input'
              name='email' 
              value={email}
               onChange={(e) => setEmail(e.target.value)} />

            <input
              type='password'
              placeholder='Password'
              className='userreg-input' 
              name='password' 
              value={password}
               onChange={(e) => setPassword(e.target.value)}/>

            <input
              type='password'
              placeholder='Confirm Password'
              className='userreg-input'
              name='cpassword' 
              value={cpassword}
               onChange={(e) => setCpassword(e.target.value)} />
          </div>

          <div className='userreg-form-section userreg-checkbox-section'>
            <div className='userreg-checkbox'>
              <input type='checkbox' className='userreg-checkbox-input' />
              <p className='userreg-checkbox-label'>Remember me</p>
            </div>
            <p className='userreg-forgot-password'>Forgot Password?</p>
          </div>

          <div className='userreg-form-section'>
            <button className='userreg-button userreg-register-button' onClick={register}>
              Register Now
            </button>
            <button className='userreg-button userreg-signin-button' onClick={()=>{navigate('/userlog')}}>
              Sign In
            </button>
          </div>
        </div>

        <div className='userreg-footer'>
          <p className='userreg-footer-text'>Admin? <Link className='userreg-footer-link' to={'/login'}>Click here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Userreg;

import React, { useState } from 'react'
import Userlogin1 from '../../components/Images/homecover1.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../components/Loader';
import Success from '../../components/Success';
import Error from '../../components/Error';

function Userlogin () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [success, setSuccess] = useState(false);


const navigate = useNavigate();

async function Login() {
  const user = {
    email,
    password,
  };

  try {
    setLoading(true);
    const response = await axios.post('http://localhost:3500/user/login', user);
    const result = response.data;
    setLoading(false);
    localStorage.setItem('currentuser', JSON.stringify(result));

    
    navigate('/home');
  } catch (err) {
    console.error(err);
    setLoading(false);
    setError("Login Failed");
    setSuccess(false);
    localStorage.removeItem('currentuser');
  }
}

  return (
    <div className="userreg-container">
      {loading && <Loader/>}
      {success && <Success message={"Login Successfull"} />}
      {error && <Error />}
      <div className='userreg-image-container'>
        <div className='userreg-text-container'>
          <h1 className='userreg-title'>Drink 3L Water Every Day</h1>
          <p className='userreg-description'>If the disease is precisely identified, a good resolution is far more likely.</p>
        </div>
        <img src={Userlogin1} className='userreg-image' alt="User Login" />
      </div>
      <div className='userreg-form-container'>
        <h1 className='userreg-app-title'>PrivateScanningCentre</h1>
        <div className='userreg-form'>
          <div className='userreg-form-section'>
            <h3 className='userreg-form-heading'>Login</h3>
            <p className='userreg-form-text'>Welcome Back</p>
          </div>

          <div className='userreg-form-section'>
            <input
              type='Email'
              placeholder='Email'
              className='userreg-input'
              name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <input
              type='password'
              placeholder='Password'
              className='userreg-input' 
              name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className='userreg-form-section userreg-checkbox-section'>
            <div className='userreg-checkbox'>
              <input type='checkbox' className='userreg-checkbox-input' />
              <p className='userreg-checkbox-label'>Remember me</p>
            </div>
            <p className='userreg-forgot-password'>Forgot Password?</p>
          </div>

          <div className='userreg-form-section'>
            <button className='userreg-button userreg-register-button' onClick={Login}> 
              Login 
            </button>
            
            <button className='userreg-button userreg-signin-button' onClick={()=>{navigate('/userreg')}}>
              Register Now
            </button>
          </div>
        </div>

        <div className='userreg-footer'>
          <p className='userreg-footer-text'>Admin? <Link className='userreg-footer-link' to={'/login'}>Click here</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Userlogin
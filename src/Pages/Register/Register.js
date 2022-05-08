import React from 'react';
import { Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login')
    } 

    if (user){
        navigate('/home');
    }
    const handleRegister = event =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email =  event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-form'>
            <h2 className='text-center text-danger'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your email' required />
                <input type="password" name="password" id="" placeholder='Your password' required />
                <input className='register-btn w-50 mx-auto d-block bg-success' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
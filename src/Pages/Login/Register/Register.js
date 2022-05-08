import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName : name});
          console.log('Updated profile');
          navigate('/login');
    }

    const navigateLogin = event => {
        navigate('/login');
    }
    return (
        <section className='register-container'>
            <div className='container'>
                <h1 className='text-center text-primary pt-3'>Please Register</h1>
                <div className='register-form-container'>
                    <form onSubmit={handleRegisterSubmit}>
                        <input ref={nameRef} type="text" name="name" id="name" placeholder='Your Name' required />
                        <input ref={emailRef} type="email" name="email" id="email" placeholder='Your Email' required />
                        <input ref={passwordRef} type="password" name="password" id="password" placeholder='Your Password' required />
                        <p>
                            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" /> <span className='px-1'>Accept terms and condition</span>
                        </p>
                        <input
                            disabled={!agree}
                            className='w-50 mx-auto d-block rounded-3 register-btn' type="submit" value="Register" />
                    </form>
                    <p>Already have an Account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </section>
    );
};

export default Register;
import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleLoginSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('Please enter your valid email address')
        }
    }

    const navigateRegiter = event => {
        navigate('/register');
    }

    return (
        <section className='login-container'>
            <div className='container'>
                <h1 className='text-center text-primary pt-3'>Login</h1>
                <div className='form-container'>
                    <form onSubmit={handleLoginSubmit}>
                        <input ref={emailRef} type="email" name="email" id="email" placeholder='Your Email' required />
                        <input ref={passwordRef} type="password" name="password" id="password" placeholder='Your Password' required />
                        <input className='w-50 mx-auto d-block rounded-3 bg-info' type="submit" value="Login" />
                    </form>
                    {errorElement}
                    <p>New to E-Tutor? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegiter}>Please Register</Link></p>
                    <p>Forget password? <button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </div>
            </div>
        </section>
    );
};

export default Login;
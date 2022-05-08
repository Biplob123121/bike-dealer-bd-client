import React from 'react';
import google from '../../../images/Social/google.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const navigate = useNavigate();


    let errorElement;
    if (error || errorGit) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {errorGit?.message}</p>
        </div>

    }
    if (user || userGit) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex'>
                <div style={{ height: '1px' }} className='w-50 mt-2'><hr /></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '1px' }} className='w-50 mt-2'><hr /></div>
            </div>
            {errorElement}
            <div className='row'>
                <div className='col-sm-12 col-lg-6 mx-auto'>
                    <button onClick={() => signInWithGoogle()} className=' rounded border-0 google-btn mb-3'>
                        <img style={{ width: '30px' }} src={google} alt="" />
                        <span className='px-2'>Google Sign In</span>
                    </button>
                </div>
               
            </div>
        </div>
    );
};

export default SocialLogin;
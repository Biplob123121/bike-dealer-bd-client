import React from 'react';
import google from '../../../images/Social/google.png';
import github from '../../../images/Social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

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
                <div className='col-sm-12 col-lg-6'>
                    <button onClick={() => signInWithGoogle()} className='bg-info rounded border-0 py-2 px-3 mb-3'>
                        <img style={{ width: '30px' }} src={google} alt="" />
                        <span className='px-2'>Google Sign In</span>
                    </button>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <button onClick={() => signInWithGithub()} className='bg-info rounded border-0 py-2 px-3 '>
                        <img style={{ width: '30px' }} src={github} alt="" />
                        <span className='px-2'>Github Sign In</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;
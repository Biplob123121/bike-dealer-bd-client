import React from 'react';
import gmail from '../../../images/contact/gmail.png';
import facebook from '../../../images/contact/facebook.png';
import linkedin from '../../../images/contact/linkedin.png';

const Footer = () => {
    return (
        <footer style={{ height: '300px' }} className='bg-secondary text-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6 d-flex align-items-center justify-content-center mt-5'>
                        <div>
                            <h4>Quick Contact:</h4>
                            <p> <img src={gmail} alt="" /> Email</p>
                            <p> <img src={facebook} alt="" /> Facebok</p>
                            <p> <img src={linkedin} alt="" /> Linkedin</p>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex align-items-center justify-content-center'>
                        <h5>Copyright &copy; {new Date().getFullYear()} </h5>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
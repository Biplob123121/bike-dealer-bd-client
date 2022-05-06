import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section className='blogs pb-3'>
            <div className="container">
                <h1 className='text-center text-primary p-4'>Question & Answer</h1>
                <div className='blogs-container'>
                    <article className='blog'>
                        <h5>What is the difference between authentication and authorization?</h5>
                        <p>Authentication is the process to verify anyone who is user or not. Here, challenges the user to validate credential and authentication naturally happend before the authorization.</p>
                        <br />
                        <p>Authorization is the process to verify anyone what he has access to.Naturally, it happens after successful authentication.</p>
                        <p>In example, When we create a email account, we give our information it is authentication and When we access any website with the email account it is authorization.</p>
                    </article>
                    <article className='blog'>
                        <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                        <p>Firebase is a Backend-as-a-Service. It provides devlopers many tools and services to help them devlop various apps and grow their user base.Firebase manages all data real-time in the database and helps us to manage data. For this reason we use Firebase.</p>
                        <p>Except the Firebase, we can use our own local storage to manage our data. There are some also companies to manage our data like Parse, Back4app, Kinvey etc.</p>
                    </article>
                    <article className='blog'>
                        <h5>What other services does firebase provide other than authentication</h5>
                        <p>Firebase is the most popular for Backend services. It provides various authentication system. Except the authentication, it also provides some services. Some service of firebase are given below:</p>
                        <ol>
                            <li>Hosting</li>
                            <li>Cloud Storage</li>
                            <li>Cloud Messaging</li>
                            <li>Google Analytics</li>
                            <li>Cloud Firebase</li>
                            <li>Cloud Function</li>
                        </ol>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
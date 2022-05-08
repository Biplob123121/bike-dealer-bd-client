import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section className='blogs pb-3'>
            <div className="container">
                <h1 className='text-center text-primary p-4'>Question & Answer</h1>
                <div className='blogs-container'>
                    <article className='blog'>
                        <h5>What is the difference between javascript and nodejs?</h5>
                        <p>Javascript is a programming language that is used for writing scripts on the website. Javascript can be run only browser and basically used on client side. It is used for front-end development.</p>
                        <br />
                        <p>On the other hand, Nodejs is a javascript run time environment. Javascript can run outside the browser with the help of nodejs and it is mostly used server side. Nodjs is written in C, C++ and javascript. Nodejs is used in server side development.</p>
                    </article>
                    <article className='blog'>
                        <h5>When should you use nodejs and when should you use mongodb?</h5>
                        <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature.When we used to real life massaging or chatting we can use nodejs. To handle the big data, we can use it becasue it's performance is very high.</p>
                        <p> MongoDB is ideal for cloud computing and NOSQL database. Cloud-based storage needs to easily distribute data across multiple servers, which suits MongoDB's nature perfectly. Here, we can easily access data.</p>
                    </article>
                    <article className='blog'>
                        <h5>What is the differences between sql and nosql databases?</h5>
                        <p>SQL database is table based database and relational database management system. It is fixed or static or predefined database. It is suitable for complex queries. Ex, MySQL, Oracle etc.</p>
                        <p>NoSQL database is document, key-value or graph based.It is a dynamic database mangement system and distributed database system. This database is not suitable for complex queries.</p>
                    </article>
                    <article className='blog'>
                        <h5>What is the purpose of jwt and how does it work?</h5>
                        <p>JWT or JSON Web Token is is an open standard used to share security information between a client and a server. The main purpose of JWT is providing security with a special algorithm . </p>
                        <p>It works for encryption. When server send a massage then jwt encrypts the massage and sends to the client. So that, third party can not access the massage. Only server and client can access the masssage with encryption and decryption.</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
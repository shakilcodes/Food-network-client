import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import pdf from './../../../public/Blogs.pdf'

const Blog = () => {
        const handleDownload = () => {
          window.open(`${pdf}`);
        }
      
    return (
        <div className='mx-32'>
            <h1 className='text-center text-7xl font-bold my-5'>Blogs</h1>
            <div className='text-center mb-5'>
            <button className='btn ' onClick={handleDownload}>Download PDF</button>
            </div>
            <div className='flex items-center gap-10'>
                <img className='h-64 w-72 rounded-lg' src="https://i.postimg.cc/dtnYcf4h/1.png" alt="" />
                <div>
                    <h1 className='text-2xl font-bold mb-3'>1. Tell us the differences between uncontrolled and controlled components.</h1>
                    <div className='flex gap-5 font-bold my-3'>
                    <p>Author: Jacks</p>
                    <p>Read Time: 5min</p>
                    <p>Likes: 2.3k</p>
                    </div>

                    <p>Uncontrolled and controlled components are two ways of handling form input elements in web development.

                        Uncontrolled components are simpler and require less code to set up, but they have less control over the form data and can be harder to validate and manipulate before submitting.

                        Controlled components, on the other hand, are more powerful and flexible but require more code to set up and manage. They provide greater control over the form data and make it easier to validate, manipulate, and submit the data as needed.

                        In summary, the main difference between uncontrolled and controlled components is the level of control over the form data. Uncontrolled components are easier to work with but have less control, while controlled components provide more control but are more complex to manage.</p>
                </div>
            </div>
            <div className='my-10 flex gap-10 items-center'>
                <img className='h-64 w-72 rounded-lg' src="https://i.postimg.cc/Hkh1VyGH/2.jpg" alt="" />
                <div>
                    <h1 className='font-bold text-2xl'>2. How to validate React props using PropTypes</h1>
                    <div className='flex gap-5 font-bold my-3'>
                    <p>Author: Norche </p>
                    <p>Read Time: 7min</p>
                    <p>Likes: 5.3k</p>
                    </div>
                    <p>
                        PropTypes is a library in React that provides a set of validators to check the type and shape of props being passed to a component. To use PropTypes, it must be installed separately from the core React library. Once installed, PropTypes can be imported into the component, and the PropTypes for each prop that is being passed to the component can be defined using the PropTypes object. By defining PropTypes for the props, we can ensure that the props being passed to the component are of the correct type and shape, which helps to avoid runtime errors and improve the reliability of the code. Defining PropTypes is a simple and effective way to validate props in React.</p>
                </div>
            </div>
            <div className='flex gap-10 items-center'>
                <img className='h-64 w-72 rounded-lg' src="https://i.postimg.cc/HxGGt1sh/3.png" alt="" />
                <div>
                <h1 className='font-bold text-2xl'>3. Tell us the difference between nodejs and express js.</h1>
                <div className='flex gap-5 font-bold my-3'>
                    <p>Author: Jhon</p>
                    <p>Read Time: 9min</p>
                    <p>Likes: 8.3k</p>
                    </div>
                <p>Node.js and Express.js are two popular technologies used in web development, particularly for building server-side applications. While they are often used together, they are not the same thing.

                    Node.js is a server-side JavaScript runtime environment that allows developers to run JavaScript code on the server. It provides a non-blocking I/O model and an event-driven architecture, which makes it well-suited for building scalable and high-performance server-side applications. With Node.js, developers can write server-side code in JavaScript, which allows for greater consistency and easier code sharing between the client and server.

                    Express.js, on the other hand, is a popular web application framework built on top of Node.js. It provides a set of features and tools for building web applications and APIs, such as routing, middleware, and HTTP request handling. Express.js is designed to be simple, flexible, and lightweight, which makes it easy to get started</p>
                </div>
            </div>
            <div className='mt-10 flex gap-10 items-center'>
                <img className='h-64 w-72 rounded-lg' src="https://i.postimg.cc/G3q7L1nn/4.png" alt="" />
               <div>
               <h1 className='font-bold text-2xl'>4. What is a custom hook, and why will you create a custom hook?</h1>
               <div className='flex gap-5 font-bold my-3'>
                    <p>Author: Cathleen</p>
                    <p>Read Time: 10min</p>
                    <p>Likes: 1.3k</p>
                    </div>
                <p>In React, a custom hook is a JavaScript function that starts with the use keyword and allows you to reuse stateful logic across different components. Custom hooks are a way to abstract away complex logic and make it easy to reuse code in multiple places.

                    Custom hooks can be created to encapsulate logic related to things like data fetching, form validation, or even simple animations. By creating a custom hook, you can separate concerns and keep your code modular and easy to maintain.

                    There are several reasons why you might want to create a custom hook in your React application. For example, you might find yourself writing the same code multiple times across different components, or you might have complex logic that is hard to manage and debug when it is scattered throughout your codebase. By creating a custom hook, you can abstract away this logic and reuse it wherever it is needed, which can save you time and make your code more readable and maintainable. Additionally, custom hooks can be shared across projects or with the wider React community, which can help to improve the quality and usability of your code.</p>
               </div>
            </div>
        </div>
    );
};

export default Blog;
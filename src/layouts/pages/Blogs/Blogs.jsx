import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blogs = () => {


    return (
        <div>
            
            <div className='w-10/12 mx-auto' ref={ref}>
                <div className='rounded-md my-3 bg-indigo-200  p-3'>
                    <h1 className='text-xl font-semibold mb-4'><span className='text-3xl font-bold'>Q1:-</span>Tell us the differences between uncontrolled and controlled components.</h1>
                    <p className='font-semibold'><span className='text-md font-bold'>Ans:- </span>
                        <span className='text-md font-bold'>Uncontrolled components-- </span>
                        Uncontrolled components refer to form elements whose state is managed by the DOM rather than by React. This means that their values are not stored in state, and are instead accessed directly from the DOM when needed. Uncontrolled components are useful for simple forms where you don't need to perform any validation or complex operations on the input data.
                        <p className='mt-4'>
                            <span className='text-md font-bold'>Controlled components-- </span>Controlled components, on the other hand, refer to form elements whose state is managed by React. This means that their values are stored in state, and are updated via callbacks or event handlers. Controlled components are useful for more complex forms where you need to perform validation or manipulate the input data in some way.
                        </p>
                    </p>
                </div>
                <div className='rounded-md my-3 bg-indigo-200  p-3'>
                    <h1 className='text-xl font-semibold  mb-4'><span className='text-3xl font-bold'>Q2:-</span>How to validate React props using PropTypes?</h1>
                    <p className='font-semibold'><span className='text-md font-bold'>Ans:-

                        <li>The prop can be of any data type</li>
                        <li>The prop should be a Boolean.</li>
                        <li>The prop should be a number.</li>
                        <li> The prop should be a string</li>
                        <li>The prop should be a function.</li>
                        <li> The prop should be an array.</li>

                    </span>

                    </p>
                </div>
                <div className='rounded-md my-3 bg-indigo-200  p-3'>
                    <h1 className='text-xl font-semibold  mb-4'><span className='text-3xl font-bold'>Q3:-</span>Tell me the difference between nodejs and express js?</h1>
                    <p className='font-semibold'><span className='text-md font-bold'>Ans:-</span>
                        <span className='text-md font-bold'>Node Js-- </span>
                        Node.js is a JavaScript runtime built on the Chrome V8 JavaScript engine. It allows developers to run JavaScript on the server-side, enabling them to build fast and scalable network applications. Node.js provides a powerful set of APIs for building web servers, handling network requests, and accessing the file system and other resources on the server.
                        <p className='mt-4'>
                            <span className='text-md font-bold'>Express Js--</span>  On the other hand, is a popular web application framework built on top of Node.js. It provides a set of middleware functions and APIs that simplify the process of building web applications with Node.js. Express.js provides features such as routing, handling HTTP requests and responses, handling middleware, and more.
                        </p>

                    </p>
                </div>
                <div className='rounded-md my-3 bg-indigo-200  p-3'>
                    <h1 className='text-xl font-semibold  mb-4'><span className='text-3xl font-bold'>Q4:-</span>What is a custom hook, and why will I create a custom hook? </h1>
                    <p className='font-semibold'><span className='text-md font-bold'>Ans:-</span>Custom hooks are useful for abstracting away stateful logic that would otherwise be duplicated across multiple components. For example, if you have two components that need to fetch data from an API, you could create a custom hook that encapsulates the fetch logic and returns the data to the components. This way, you can reuse the fetch logic across multiple components without having to repeat it in each one.

                    </p>
                </div>

            </div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className=' bg-red-700 text-white absolute top-1 right-2 rounded p-2  ' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
        </div>

    );
};

export default Blogs;
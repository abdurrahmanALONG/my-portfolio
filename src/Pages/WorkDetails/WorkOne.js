import React from 'react';
import project1_1 from '../../logos/pro-1-1.jpg';
import project1_2 from '../../logos/pro-1-2.jpg';
import project1_3 from '../../logos/pro-1-3.jpg';


const WorkOne = () => {

    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        MERN stack Project
                    </p>
                    <p className='py-6'> Check out of my MERN stake recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${project1_1})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Live Site
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://astounding-frangipane-9456f9.netlify.app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${project1_2})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Client Side Github
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/abdurrahmanALONG/manufacturer-website-client-side-12'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${project1_3})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Server Side Github
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/abdurrahmanALONG/manufacturer-website-server-side-12'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <p>// This is a manufacturer's website page. On the Home page, users can see tools, business summaries, etc. </p>
                    <p className='py-3'>// The user must need a verified email address for login. Without login or registration, the user cannot enter some pages. Here users can navigate from one page to another page easily.</p>
                    <p className='py-3'>//  I Implement the Admin role in my project so that when an admin enters the Dashboard page he/she will see the “Make Admin” route, My profile, Add a product, Manage products route.</p>
                    <p className='py-3 font-bold'>//  The technology I used :  React.js, JavaScript, Firebase, React Router, React-firebase-hooks, Bootstrap, Stripe, JWT, etc.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkOne;

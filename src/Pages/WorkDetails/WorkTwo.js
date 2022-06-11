import React from 'react';
import project2_1 from '../../logos/pro-2-1.jpg';
import project2_2 from '../../logos/pro-2-2.jpg';
import project2_3 from '../../logos/pro-2-3.jpg';


const WorkTwo = () => {

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
                        style={{ backgroundImage: `url(${project2_1})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Live Site
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://neon-souffle-f86425.netlify.app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${project2_2})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                 Client Side Github
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/abdurrahmanALONG/warehouse-management-client-side'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${project2_3})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Server Side Github
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/abdurrahmanALONG/warehouse-management-server-side'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <p>// This is a warehouse-related management website. Sellers can add products to the managed items page. </p>
                    <p className='py-3'>// The user must need a verified email address for login. Without login or registration, the user cannot enter some pages. Here users can navigate from one page to another page easily.</p>
                    <p className='py-3'>//  Sellers can add products to the managed items page. Also, sellers can delete products. On the “My Items” page sellers can see their added products.</p>
                    <p className='py-3 font-bold'>//  The technology I used :  React.js, Javascript, Firebase, React Router, React-firebase-hooks, Bootstrap, JWT, etc.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkTwo;

import React from 'react';
import project3_1 from '../../logos/pro-3-1.jpg';
import project3_2 from '../../logos/pro-3-2.jpg';
import project3_3 from '../../logos/pro-3-3.jpg';


const WorkThree = () => {

    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        React JS Project
                    </p>
                    <p className='py-6'> Check out of my React JS recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${project3_1})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Live Site
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://benevolent-puppy-2cf4fb.netlify.app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${project3_2})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Github
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/abdurrahmanALONG/independentService'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${project3_3})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Github
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/abdurrahmanALONG/independentService'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <p>// This is a private consultancy farm website page. Fully responsive website. </p>
                    <p className='py-3'>// I implemented firebase authentication in this project. Here users can navigate from one page to another page easily.</p>
                    <p className='py-3 font-bold'>//  The technology I used :  React.js, Javascript, Firebase, React Router, React-firebase-hooks, Bootstrap, etc.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkThree;

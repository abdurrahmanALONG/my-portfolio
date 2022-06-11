import React from 'react';
import project4_1 from '../../logos/pro-4-1.jpg';
import project4_2 from '../../logos/pro-4-2.jpg';
import project4_3 from '../../logos/pro-4-3.jpg';


const WorkFour = () => {

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
                        style={{ backgroundImage: `url(${project4_1})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Live Site
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://luminous-stardust-68775b.netlify.app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${project4_2})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Github
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/abdurrahmanALONG/productAnalysis'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${project4_3})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Github
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/abdurrahmanALONG/productAnalysis'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <p>//  This is a product-analysis website. Fully responsive website. </p>
                    <p className='py-3'>//  Here I am trying to show something details about Canon Camera. You can see some analysis results here. On the home page, I add one canon camera picture with some text and three reviews. you can easily navigate by using the navbar. here you can see all reviews on the reviews page, and also I am trying to show some statistics on the dashboard page.</p>
                    <p className='py-3 font-bold'>//  The technology I used :  React.js, Javascript, React Router, react-scripts, recharts, Bootstrap, etc.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkFour;

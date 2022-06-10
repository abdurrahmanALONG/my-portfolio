import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Abdur, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am a Front End developer. I have experience working with MERN stack, HTML5, CSS3, Bootstrap, Tailwind-CSS, ES6, etc. I also have experience working with many tools like Git, GitHub, VS Code, Figma, Firebase, Netlify, Heroku, Chrome Dev Tools, etc. Take a look at my work or get in touch! </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
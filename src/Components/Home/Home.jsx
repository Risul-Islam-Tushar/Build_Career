import React from 'react';

const Home = () => {
    return (
        <div className='ms-28 mr-20 mt-8 mb-20'>
            <div className='flex justify-between mb-12'>
                <div className='pt-28'>
                    <h1 className='text-6xl font-bold'>One Step <br /> Closer To Your <br />
                        <span className='text-purple-500'>Dream Job</span> </h1>
                    <br />
                    <p>Explore thousands of job opportunities with all the
                        <br /> information you need. Its your future. Come find it. Manage all
                        <br /> your job application from start to finish.
                    </p>
                    <button className='mt-8 w-48 h-12 bg-purple-500 text-center rounded-lg text-gray-100'>
                        Get Started
                    </button>
                </div>
                <div>
                    <img src="../../../All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold text-center'>Job Category List</h1>
                <p className='text-center mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

        </div>
    );
};

export default Home;
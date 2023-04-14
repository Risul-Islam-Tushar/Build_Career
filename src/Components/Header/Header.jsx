import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between align-middle ms-28 mr-28 mt-4 '>
            <div className='pt-1'>
                <h1 className='text-2xl font-bold'>BUILD_CAREER</h1>
            </div>
            <div className='p-2'>
                <Link className='p-2' to="/">Home</Link>
                <Link className='p-2' to="/applied-job">Applied_Jobs</Link>
                <Link className='p-2' to="/statistics">Statistics</Link>
                <Link className='p-2' to="/blog">Blog</Link>
            </div>
            <div className='w-48 h-12 bg-purple-500 text-center  rounded-lg text-gray-100 pt-2'>
                <button>Star Applying</button>
            </div>


        </div>
    );
};

export default Header;
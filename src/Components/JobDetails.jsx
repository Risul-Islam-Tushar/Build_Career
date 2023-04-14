import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='ms-28 mr-20 mt-8 mb-20'>
            <div className='text-center mt-10 mb-10 text-4xl' >
                <h1>Job Details </h1>
            </div>

            <div className='flex justify-around'>
                <div>
                    <h3 className='text-2xl'>Job Description:</h3>
                    <h3 className='text-2xl'>Job Responsibility:</h3>
                    <h3 className='text-2xl'>Educational Requirement:</h3>
                    <h3 className='text-2xl'>Experiances:</h3>
                </div>
                <div className='border-spacing-1'>
                    <div className="card w-96 bg-slate-500">
                        <div className="card-body">
                            <h2 className="card-title">Job Details</h2><hr className='mt-2 mb-2' />
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default JobDetails;
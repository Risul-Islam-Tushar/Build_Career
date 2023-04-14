
import React from 'react';

const SingleJob = ({ job }) => {
    const { id, name, jobtitle, images, jobStructure1, jobStructure2, place, salary } = job
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-10">

            <img className='ms-8 h-14 w-28 mb-0' src={images} alt="jobs" />
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <h2>{jobtitle}</h2>

                <div className="card-actions justify-start">
                    <div className="badge badge-outline text-sky-700">{jobStructure1}</div>
                    <div className="badge badge-outline  text-sky-700">{jobStructure2}</div>
                </div>
                <div className='flex gap-4'>
                    <h6 className='text-sm'>{place}</h6>
                    <h6 className='text-sm'>${salary}</h6>
                </div>
            </div>
            <div>
            <button className='btn btn-secondary ms-3 mb-3 '> Show Details</button>
            </div>
            
        </div>
    );
};

export default SingleJob;
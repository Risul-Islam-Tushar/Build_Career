import React from 'react';
import { json, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    const { id, description, responsibility, edecation, experiance, salary, jobtitle, phone, place, email } = job

 const handlejob = () =>{
    const storedData = JSON.parse(localStorage.getItem("orders"));
    if(storedData){
        localStorage.setItem("orders",JSON.stringify([...storedData,job]))
    }else{  localStorage.setItem("orders",JSON.stringify([job]))

    }
 }

    return (
        <div className='ms-28 mr-20 mt-8 mb-20'>
            <div className='text-center mt-10 mb-10 text-4xl ' >
                <h1 className='font-bold text-sky-600'>Job Details </h1>
            </div>

            <div className='flex justify-around'>
                <div className='mr-2'>
                    <h3 className='text-xl mb-2'>Job Description: <span className='text-base'>{description}</span> </h3>
                    <h3 className='text-xl  mb-2'>Job Responsibility: <span className='text-base'>{responsibility}</span></h3>
                    <h3 className='text-xl  mb-2'>Educational Requirement: <span className='text-base'>{edecation}</span></h3>
                    <h3 className='text-xl  mb-2'>Experiances: <span className='text-base'>{experiance}</span></h3>
                </div>
                <div className='border-spacing-1'>
                    <div className="card w-96 bg-slate-300">
                        <div className="card-body">
                            <h2 className="card-title">Job Details</h2><hr className='mt-2 mb-2' />
                            <h2>Salary: {salary}</h2>
                            <h2>Job Title: <span>{jobtitle}</span></h2>
                            <h2 className='mt-2 mb-2 card-title'>
                                Contact Information
                            </h2><hr className='mt-2 mb-2' />
                            <h2>Phone: {phone}</h2>
                            <h2>Email: {email}</h2>
                            <h2>Address: {place}</h2>

                        </div>
                        
                    </div>
                    <button onClick={handlejob}  className='btn btn-secondary w-full mt-4'>Apply Now
                </button>
                </div>
            </div>
           
        </div>

    );
};

export default JobDetails;
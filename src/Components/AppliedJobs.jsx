import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';

const AppliedJobs = () => {

    const [values, setValues] = useState([])
    const [filterValue, setFilterValue] = useState([])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("orders"));
        if (storedData) {
            setValues(storedData)
            setFilterValue(storedData)
        }
    }, [])

    return (
        <div className='ms-28 mr-20 mt-8 mb-20 '>
            <h1 className='text-center text-4xl font-bold mt-20 mb-16 '>Applied Job</h1>
            {
                filterValue.length > 0 ?
                    filterValue?.map((job) => <div className='ms-96'><SingleJob job={job}></SingleJob></div>) :
                    <h1>No job Found</h1>
            }

        </div>
    );
};

export default AppliedJobs;
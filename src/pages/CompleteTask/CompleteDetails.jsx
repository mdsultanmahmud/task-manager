import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CompleteDetails = () => {
    const task = useLoaderData()
    const {taskName, imgURL, taskDescription, endingDate,startingDate    } = task
    console.log(task)
    return (
        <div className='min-h-screen bg-gray-100 dark:bg-gray-800'>
            <h1 className='py-4 text-black dark:text-white text-2xl font-bold text-center capitalize'>Details About {taskName}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-4'>
                <div>
                <img className='w-full min-h-[300px]' src={imgURL} alt="" />
                </div>
                <div>
                    <p className='text-gray-800 text-sm font-bold dark:text-gray-50'><strong>Starting Time: </strong>{startingDate}</p>
                    <p className='text-gray-800 text-sm font-bold dark:text-gray-50'><strong>Ending Time: </strong>{endingDate}</p>
                    <p className='text-gray-800 text-sm font-bold dark:text-gray-50'><strong>Description: </strong>{taskDescription}</p>
                    <h1 className='text-gray-800 text-lg font-bold dark:text-gray-50 my-4'>All comments about this task</h1>
                    <hr />
                </div>
            </div>
            <div>
                {/* comments section  */}
            </div>
        </div>
    );
};

export default CompleteDetails;
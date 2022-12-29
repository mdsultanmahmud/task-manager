
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Comment from './Comment';

const CompleteDetails = () => {
    const task = useLoaderData()
    const {taskName, imgURL, taskDescription, endingDate,startingDate, _id} = task
    const {data: comments = []} = useQuery({
        queryKey:['comments'],
        queryFn: async() =>{
            const res = await fetch(`https://task-manager-server-plum.vercel.app/comments/${_id}`)
            const data = res.json()
            return data
        }
    })
    return (
        <div className='min-h-screen bg-gray-100 dark:bg-gray-800 p-4'>
            <h1 className='py-4 text-black dark:text-white text-2xl font-bold text-center capitalize'>Details About {taskName}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-4'>
                <div>
                <img className='w-full min-h-[300px]' src={imgURL} alt="" />
                </div>
                <div className='flex items-center justify-center'>
                    <div>
                    <p className='text-gray-400 text-sm font-bold'><strong>Starting Time: </strong>{startingDate}</p>
                    <p className='text-gray-400 text-sm font-bold'><strong>Ending Time: </strong>{endingDate}</p>
                    <p className='text-gray-400 text-sm font-bold'><strong>Description: </strong>{taskDescription}</p>
                    </div>
                    
                </div>
                <div>
                    
                </div>
            </div>
            {
                comments.length >0 ?
                <h1 className='text-gray-800 text-lg font-bold dark:text-gray-50 my-4'>All comments about this task</h1>
                :
                <h1 className='text-gray-800 text-lg font-bold dark:text-gray-50 my-4'>There is no comment about this task.</h1>
            }
                    <hr />
                    {
                        comments.map(comment => <Comment 
                            key={comment._id}
                            taskComment = {comment}
                        ></Comment>)
                    }
        </div>
    );
};

export default CompleteDetails;
import React from 'react';

const Comment = ({taskComment}) => {
    const {comment,commentedDate
,commentedTime,name    } = taskComment
    console.log(taskComment)
    return (
        <div className='bg-gray-100 dark:bg-gray-900 shadow-2xl border m-4 p-4'>
            <h5 className='text-gray-800 text-sm dark:text-gray-50'>Author: {name}</h5>
            <p className='text-gray-800 text-sm dark:text-gray-50'><strong>Comment: </strong>{comment}</p>
            <p className='text-gray-800 text-sm dark:text-gray-50'>Date: {commentedDate}</p>
            <p className='text-gray-800 text-sm dark:text-gray-50'>Time: {commentedTime}</p>
        </div>  
    );
};

export default Comment;
import React from 'react';
import { toast } from 'react-hot-toast';
const CompleteCard = ({ task, refetch }) => {
    const handleDelete = id => {
        fetch(`http://localhost:5000/alltask/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Task Deleted Successfully!!')
                    refetch()
                }
            })
    }

    const handleNotComplete = id => {
        fetch(`http://localhost:5000/complete/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Task Goes to My Task Route!')
                    refetch()
                }
            })
    }

    const handleComment = (commentedTask) => {
        console.log(commentedTask)

    }

    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={task.imgURL} alt="" />
            <div className="p-5">
                <h5 className="capitalize mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task.taskName}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Description:</strong> {task.taskDescription}</p>
                <button onClick={() => handleNotComplete(task._id)} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Not Complete</button>
                <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Details</button>
                <button onClick={() => handleDelete(task._id)} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write Comment</label>
                <textarea name='comment' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your comments here..."></textarea>
                <button type="submit" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4">Comment</button>
            </div>
        </div>

    );
};

export default CompleteCard;
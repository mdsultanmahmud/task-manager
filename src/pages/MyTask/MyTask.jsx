import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyTask = () => {
    const { user } = useContext(AuthContext)
    const [mytask, setMytask] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/alltask?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMytask(data)
            })
    }, [user?.email])
    return (

        <div className="overflow-x-auto relative shadow-md bg-white dark:bg-gray-800 min-h-screen">
            {
                mytask.length > 0 ?
                <h1 className='my-6 text-center text-green-400 dark:text-white font-bold text-2xl'>Your All Task</h1>
                :
                <h1 className='my-6 text-center text-green-400 dark:text-white font-bold text-2xl'>You have no task addeded</h1>
            }
           {
            mytask.length>0 &&
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">
                        Task Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Starting Date
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Ending Date
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Description
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    mytask.map(task => <tr key={task._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {task.taskName}
                        </th>
                        <td className="py-4 px-6">
                            {task.startingDate}
                        </td>
                        <td className="py-4 px-6">
                            {task.endingDate}
                        </td>
                        <td className="py-4 px-6">
                            {task.taskDescription.slice(0, 50)}...
                        </td>
                        <td className="py-4 px-6 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>)
                }

            </tbody>
        </table>
           }
        </div>

    );
};

export default MyTask;
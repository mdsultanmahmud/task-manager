import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Dna } from 'react-loader-spinner'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyTask = () => {
    const { user } = useContext(AuthContext)
    const [mytask, setMytask] = useState({})
    const [loading, setLoading] = useState(true)
    const [dataState, setDataState] = useState(false)
    // data load 
    useEffect(() => {
        setLoading(true)
        fetch(`https://task-manager-server-plum.vercel.app/alltask?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMytask(data)
                setLoading(false)
            })
    }, [user?.email, dataState])

    // delete data 
    const handleDelete = id =>{
        fetch(`https://task-manager-server-plum.vercel.app/alltask/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount>0){
                toast.success('Task Deleted Successfully!!')
                setDataState(!dataState)
            }
        })
    }

    // handle complete task 
    const handleCompleteTask = id =>{
        fetch(`https://task-manager-server-plum.vercel.app/alltask/${id}`, {
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                toast.success('Task Completed!')
                setDataState(!dataState)
            }
        })
    }

    const handleEdit = (editTask) =>{
        console.log(editTask)
    }

    if (loading) {
        return <div className='min-h-screen w-full flex justify-center items-center'>
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperclassName="dna-wrapper"
            />
        </div>
    }
    return (

        <div className="overflow-x-auto relative shadow-md bg-white dark:bg-gray-800 min-h-screen">
            {
                mytask.length > 0 ?
                    <h1 className='my-6 text-center text-green-400 dark:text-white font-bold text-2xl'>Your All Task</h1>
                    :
                    <h1 className='my-6 text-center text-green-400 dark:text-white font-bold text-2xl'>You have no task addeded</h1>
            }
            {
                mytask.length > 0 &&
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
                                Completed
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
                                <button onClick={() => handleCompleteTask(task._id)} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Complete</button>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <div className='flex'>
                                        <Link to={`/mytask/${task._id}`}><button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button></Link>
                                        <button onClick={() => handleDelete(task._id)} type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                                    </div>
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
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { json, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './AddTask.scss'
const AddTask = () => {
    const {user} = useContext(AuthContext)
    const handleAddTask = (event) =>{
        event.preventDefault()
        const form = event.target 
        const taskName = form.taskname.value
        const endingDate = form.date.value
        const taskDescription = form.description.value
        const imgURL = form.image.value
        const date = new Date()
        const startingDate = date.toLocaleDateString()
        const time = date.getTime()
        const task = {
            taskName,
            endingDate,
            taskDescription,
            startingDate,
            imgURL,
            time,
            email: user?.email,
            completeStatus: false

        }
        fetch('https://task-manager-server-plum.vercel.app/alltask', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                toast.success('Your Task Added!')
                form.reset()
            }
        })
    }
    return (
        <div id='addtask-container' className='bg-gray-100 dark:bg-gray-800'>
            <div className="child-container bg-gray-800 border relative">
                <form onSubmit={handleAddTask}>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Task Name</label>
                    <input name='taskname' type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Task Name" required />
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">End Date</label>
                    <input name='date' type="date" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select End Date" required />
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Image URL</label>
                    <input name='image' type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Set an Image URL" required />
                </div>
                <div>

                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Task Description</label>
                    <textarea name='description' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" placeholder="Write your task description..." required></textarea>
                </div>
                {
                    !user?.email ?
                    <span className='text-white font-bold capitalize'>Please <Link to={'/login'} className='text-green-500 underline'>login</Link> for add any task</span>
                    :
                    <button type="submit" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium absolute bottom-0 left-0 w-full text-sm px-5 py-2.5 text-center">Add Task</button>
                }
                </form>
            </div>
        </div>
    );
};

export default AddTask;
import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const EditTask = () => {
    const task = useLoaderData()
    const {endingDate, taskDescription,taskName, imgURL, _id} = task
    const handleEdit = (event) =>{
        event.preventDefault()
        const form = event.target 
        const EditedTaskName = form.taskname.value
        const EditedEndingDate = form.date.value
        const EditedTaskDescription = form.description.value
        const EditedImgURL = form.image.value
        const date = new Date()
        const EditedTime = date.getTime()
        const EditedTask = {
            EditedTaskName,
            EditedEndingDate,
            EditedTaskDescription,
            EditedImgURL,
            EditedTime,
        }
        fetch(`http://localhost:5000/editedTask/${_id}`, {
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(EditedTask)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                toast.success('Your Task Modified!')
                form.reset()
            }
        })
    }
    return (
        <div id='addtask-container' className='bg-gray-100 dark:bg-gray-800'>
            <h1 className='text-2xl text-black dark:text-white font-bold text-center py-4'>Edit Your task({taskName})</h1>
            <div className="child-container bg-gray-800 border relative">
                <form onSubmit={handleEdit}>
                <div>
                    <label htmlhtmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Edit Task Name</label>
                    <input defaultValue={taskName} name='taskname' type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Edit Your Task Name" required />
                </div>
                <div>
                    <label htmlhtmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Re-set End Date</label>
                    <input defaultValue={endingDate} name='date' type="date" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Edit End Date" required />
                </div>
                <div>
                    <label htmlhtmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Re-set Image URL</label>
                    <input defaultValue={imgURL} name='image' type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Edit Image URL" required />
                </div>
                <div>
                    <label htmlhtmlFor="message" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Edit Task Description</label>
                    <textarea defaultValue={taskDescription} name='description' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" placeholder="Edit your task description..." required></textarea>
                </div>
                    <button type="submit" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium absolute bottom-0 left-0 w-full text-sm px-5 py-2.5 text-center">Edit Task</button>
                </form>
            </div>
        </div>
    );
};

export default EditTask;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import CompleteCard from './CompleteCard';
import { Dna } from 'react-loader-spinner'
const CompleteTask = () => {
    const {user} = useContext(AuthContext)
    const {data: completedTasks = [], loading, refetch} = useQuery({
        queryKey:['email', 'user?.email'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/completed?email=${user?.email}`)
            const data = res.json()
            return data
        }
    })
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
        <div className='bg-gray-100 dark:bg-gray-800 min-h-screen'>
            {
                completedTasks.length > 0 ?
                <h1 className='text-black dark:text-white py-4 font-bold text-2xl text-center capitalize'>Your All Completed Task</h1>
                :
                <h1 className='text-black dark:text-white py-4 font-bold text-2xl text-center capitalize'>Your have no completed task</h1>
            }
            
                <div className='my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                   { completedTasks.map(task => <CompleteCard 
                    key={task._id}
                    task = {task}
                    refetch = {refetch}
                    ></CompleteCard>)}
                </div>
            
        </div>
    );
};

export default CompleteTask;
import React from 'react';
import { useState, useEffect } from 'react'
import '../style.scss'
const Theme = () => {
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <div>
            <div className="box-container bg-white dark:bg-black relative">
                <button onClick={handleTheme} className='p-4 bg-red-500 absolute  top-4 right-6'>toggle</button>
                <div className="child-container bg-gray-700 dark:bg-gray-200">
                    <h1 className='text-blue-500 dark:text-black text-2xl font-bold'>Dark/Light Mode Toggle</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aut adipisci in voluptatem quidem nobis expedita totam! Eum odio praesentium facilis voluptates voluptatem, neque quasi unde laudantium saepe, culpa porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, maiores.</p>
                    <button className='btn-learn'>Learn more</button>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Theme;
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import './register.scss'
const Register = () => {
    const { user, RegisterUser, updateUserPro, loginGoogle } = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const firstname = form.firstname.value
        const lastname = form.lastname.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        const name = firstname + ' ' + lastname
        const profile = {
            displayName: name
        }
        if (password !== confirmPassword) {
            toast.error('Password is not matching')
        } else {
            RegisterUser(email, password)
                .then(userCredential => {
                    const crrUser = userCredential.user
                    console.log(crrUser)
                    if (crrUser.uid) {
                        updateUserPro(profile)
                            .then(() => {
                                toast.success('You have created account successfully!')
                                form.reset()
                            })
                            .catch(err => {
                                console.log(err)
                                toast.error(err.message)
                            })
                    }
                })
                .catch(err => {
                    console.log(err)
                    toast.error(err.message)
                })
        }


    }

    const handleGoogleLogin = () => {
        loginGoogle()
            .then(crrUser => {
                console.log(crrUser)
                toast.success('Login successfull!!')
            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
            })
    }

    return (
        <div id='reg-container' className='bg-pink-300 dark:bg-black'>
            <div className='w-3/4 mx-auto bg-pink-300 dark:bg-gray-800 p-4 form-container'>
                <form onSubmit={handleRegister} className=''>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlhtmlhtmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlhtmlhtmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="password" name="confirmPassword" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlhtmlhtmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="firstname" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlhtmlhtmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="lastname" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlhtmlhtmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>
                    <button type='submit' className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Sign Up
                        </span>
                    </button>

                </form>

                <div className="inline-flex justify-center items-center w-full">
                    <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    <span className="absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">or</span>
                </div>
                <button onClick={handleGoogleLogin} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Sign in With Google
                    </span>
                </button>
            </div>

        </div>

    );
};

export default Register;
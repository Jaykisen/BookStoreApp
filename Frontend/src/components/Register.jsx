import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Register() {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  // Define the onSubmit function without assigning SubmitHandler
  const onSubmit = (data) => {
    console.log(data);
  };

 

  return (
    <>
      <div className='mt-24'>
        <div className="bg-white flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="bg-red-300 shadow-md rounded-md p-6">
              <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="User" />
              <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign up for an account
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" method="POST">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                  <div className="mt-1">
                    <input name="username" type="text" required
                        {...register("username", { required: true })}
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                      {errors.username && <p className="text-red-600">Name is required</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1">
                    <input name="email" type="email" required
                     {...register("email", { required: true })}
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                       {errors.email && <p className="text-red-600">Email is required</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="mt-1">
                    <input name="password" type="password" required
                     {...register("password", { required: true })}
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                     {errors.password && <p className="text-red-600">Password is required</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <div className="mt-1">
                    <input name="confirm_password" type="password" required
                       {...register("confirm_password", { required: true })}
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                      {errors.confirm_password && <p className="text-red-600">CPassword is required</p>}
                  </div>
                </div>

                <div>
                  <button type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                    Register Account
                  </button>
                </div>

                <div className="mt-4 text-sm flex justify-between items-center container-mr">
                  <p className="mr-3 md:mr-0">If you have an account..</p>
                 
                    <button
                     onClick={()=>document.getElementById('my_modal_3').showModal()}
                      className="w-full hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
                    >
                      Login
                    </button>
                  
                </div>
                <div>
                  <button type="button" onClick={() => navigate('/')}>Back To Home Page</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;

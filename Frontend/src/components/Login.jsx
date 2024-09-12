import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dialogRef = useRef(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Define the onSubmit function without assigning SubmitHandler
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("example")); // Watch input value by passing the name of it

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close(); // Close the dialog
    }
    navigate('/'); // Navigate to the home page
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal" ref={dialogRef}>
        <div className="modal-box w-full max-w-5xl">
          <button
            onClick={handleClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-950 border-t-neutral-50"
          >
            ✕
          </button>

          <section className="bg-gray-100 min-h-screen flex box-border justify-center items-center">
            <div className="bg-[#dfa674] rounded-2xl flex w-full p-5 items-center">
              <div className="md:w-1/2 px-8">
                <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
                <p className="text-sm mt-4 text-[#002D74]">
                  If you already a member, easily log in now.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <input
                    {...register("email", { required: true })}
                    className="p-2 mt-8 rounded-xl border"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  {errors.email && <p className="text-red-600">Email is required</p>}
                  
                  <div className="relative">
                    <input
                      {...register("password", { required: true })}
                      className="p-2 rounded-xl border w-full"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                    {errors.password && <p className="text-red-600">Password is required</p>}
                    
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="gray"
                      id="togglePassword"
                      className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                      viewBox="0 0 16 16"
                    >
                      {/* SVG Path */}
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                      id="mama"
                      viewBox="0 0 16 16"
                    >
                      {/* SVG Path */}
                    </svg>
                  </div>
                  <button
                    className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
                <div className="mt-6 items-center text-gray-100">
                  <hr className="border-gray-300" />
                  <p className="text-center text-sm">OR</p>
                  <hr className="border-gray-300" />
                </div>
                <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
                  {/* Google Login SVG */}
                  Login with Google
                </button>
                <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
                  Forget password?
                </div>

                <div className="mt-4 text-sm flex justify-between items-center container-mr">
                  <p className="mr-3 md:mr-0">If you don't have an account..</p>
                  <a href="/register" className="w-full">
                    <button
                      className="w-full hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
                    >
                      Register
                    </button>
                  </a>
                </div>
              </div>
              <div className="md:block hidden w-1/2">
                <img
                  className="rounded-2xl max-h-[1600px] w-full"
                  src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="login form image"
                />
              </div>
            </div>
          </section>
        </div>
      </dialog>
    </div>
  );
}

export default Login;

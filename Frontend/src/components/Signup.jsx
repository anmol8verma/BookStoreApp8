import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
  return (
    <div className='flex h-screen items-center justify-center'>
    <div  className="w-[600px]">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* links help in defining routes */}
          <Link to="/" className="text-black bg-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </Link>
        {/* email */}
        <h3 className="text-black bg-white font-bold text-lg">Signup</h3>
        <br />
        <div className="mt-4 space-y-2">
              <span className="text-black">Email</span>
              <br />
              {/* border shud not appear on the click so outline shud be none */}
              <input
                type="email"
                placeholder="Enter your E mail Id"
                className="w-80 px-3 border rounded-md outline-none py-1 text-black"
                {...register("email", { required: true })}
              />
            <br/>
              {errors.email && (<span className="text-sm text-red-500">This field is required</span>)}
            </div>
            <br/>
        <div className="mt-4 space-y-2">
          <span className="text-black">Name</span>
          <br />
          {/* border shud not appear on the click so outline shud be none */}
          <input
            type="name"
            placeholder="Enter your full name"
            className="w-80 px-3 border rounded-md outline-none py-1 text-black"
            {...register("name", { required: true })}
          />
          <br/>
              {errors.name && (<span className="text-sm text-red-500">This field is required</span>)}
        </div>
        {/* password */}
        <div className="mt-4 space-y-1">
          <span className="text-black">Password</span>
          <br />
          {/* border shud not appear on the click so outline shud be none */}
          <input
            type="password"
            placeholder="Enter your password"
            className="w-80 px-3 border rounded-md outline-none py-1 text-black"
            {...register("password", { required: true })}
          />
          <br/>
              {errors.password && (<span className="text-sm text-red-500">This field is required</span>)}
        </div>
        <div className=" flex justify-around mt-4">
          {/* seperate div for the login button and forgot password title , so they both will be inline and thus use flex  */}
          <div>
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 ">
              <span className="" /> Signup <t />{" "}
            </button>
          </div>
          <div>
            <span className="text-black">
              {/* routing to signup page should be there and defined in the App.jsx */}
              Have account?{" "}
              <button className=" underline text-blue-500 cursor-pointer" onClick={()=>{document.getElementById("my_modal_3").showModal()}}>
                Login
              </button>
              <Login/>
            </span>
          </div>
        </div>

        <p className="text-black bg-white py-4">
          Press ESC key or click on ✕ button to close
        </p>
  </form>
      </div>
    </div>
  </div>

  )
}

export default Signup
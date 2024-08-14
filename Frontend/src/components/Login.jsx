import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      {/* modal will be used for the login functionality */}
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method and this login button will be in the navbar and we have to open this modal on click in the navbar */}
        <dialog id="my_modal_3" className="modal">
          {/* my_modal_3 this unique id is used in the navbar */}
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="text-black bg-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={()=>{document.getElementById("my_modal_3").close()}}
              >
                X
              </Link>
            {/* email */}
            <h3 className="text-black bg-white font-bold text-lg">Login</h3>
            <br />
            <div className="mt-4 space-y-2">
              <span className="text-black">Email</span>
              <br />
              {/* border shud not appear on the click so outline shud be none */}
              <input
                type="email"
                placeholder="Enter your E mail Id"
                className="w-80 px-3 border rounded-md outline-none py-1 text-black"
                // required: true , means mandatory to give email
                {...register("email", { required: true })}
                />
                <br/>
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
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
                // required: true , means mandatory to give password
                {...register("password", { required: true })}
              /><br/>
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            <div className="flex justify-around mt-4">
              {/* seperate div for the login button and forgot password title , so they both will be inline and thus use flex  */}
              <div>
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  <span className="" /> Login <t />{" "}
                </button>
              </div>
              <div>
                <span className="text-black">
                  {/* routing to signup page should be there and defined in the App.jsx */}
                  Not registered?{" "}
                  <span className="underline text-blue-500 cursor-pointer">
                    <Link to="/signup">Signup</Link>
                  </span>
                </span>
              </div>
            </div>

            <p className="text-black bg-white py-4">
              Press ESC key or click on ✕ button to close
            </p>
          </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;

// values entered in the login frontend will reach the backend and then user will be authenticated , and throw error when field is empty or irrelevant , install react hook form , then it will be available in package.json

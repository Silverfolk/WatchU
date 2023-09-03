import { useState } from "react"
import Header from "./Header"


const Login = () => {
  const [isLogin,SetisLogin] =useState(true);
  
  function HandleIsLogin(){
    SetisLogin(!isLogin);
  }

  return (
    <div className="relative"> {/* Use relative positioning on the parent container */}
    <Header />
    <div className="absolute "> {/* Use "inset-0" to cover the entire parent */}
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" className="w-full h-full object-cover" />
    </div>
    <form className="w-3/12 p-8 bg-black my-36 mx-auto absolute top-0 left-0 right-0 font-sans bg-opacity-80"> {/* Adjust form width and positioning */}
       {isLogin? <h1 className="text-white py-3">Sign In</h1>:<h1 className="text-white py-3">Sign Up</h1>} 
        {!isLogin && <input type="text" placeholder="Name" className="w-full p-4 m-4 bg-gray-800 text-white border border-gray-600 rounded-lg text-lg" />}
        <input type="text" placeholder="Email Address" className="w-full p-4 m-4 bg-gray-800 text-white border border-gray-600 rounded-lg text-lg" />
        <input type="password" placeholder="Password" className="w-full p-4 m-4 bg-gray-800 text-white  border-gray-600 rounded-lg text-lg" />
       {isLogin?<button className="w-full p-2 m-2 bg-red-500 text-white  hover:bg-blue-600 rounded-lg text-lg">Sign In</button>:<button className="w-full p-2 m-2 bg-red-500 text-white  hover:bg-blue-600 rounded-lg text-lg">Sign Up</button>} 
       {isLogin?<p className="text-lg py-4 text-white cursor-pointer" onClick={HandleIsLogin}>New to Netflix? Sign Up Now </p>:<p className="text-lg py-4 text-white cursor-pointer" onClick={HandleIsLogin}>Already Registered? Sign In</p>} 
    </form>
</div>
  )
}

export default Login

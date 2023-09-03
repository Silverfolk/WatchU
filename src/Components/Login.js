import { useRef, useState } from "react"
import Header from "./Header"
import {ValidateState} from "../utils/Validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";

const Login = () => {
  const [isLogin,SetisLogin] =useState(true);
  const [ValidateMessage,SetValidateMessage] = useState(null);

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  function HandleIsLogin(){
    SetisLogin(!isLogin);
  }

  function HandleformValidation(){
   const message=ValidateState(email.current.value,password.current.value);
   
   console.log(message);
  //  console.log(email);
  //  console.log(password);

  if(message!=null){//validation of email and password is not done correctly 
    SetValidateMessage(message);
  }
  else{
    if(!isLogin){//register
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        SetValidateMessage(errorMessage);
      });
    }
    else{ //login

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        SetValidateMessage(errorMessage);
      });
 

  }

  }
}

  return (
    <div className="relative"> {/* Use relative positioning on the parent container */}
    <Header />
    <div className="absolute "> {/* Use "inset-0" to cover the entire parent */}
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" className="w-full h-full object-cover" />
    </div>
    <form onSubmit={function(event){event.preventDefault();}} className="w-3/12 p-8 bg-black my-36 mx-auto absolute top-0 left-0 right-0 font-sans bg-opacity-80"> {/* Adjust form width and positioning */}
    <h1 className="text-white py-3">{isLogin?"Sign In" :"Sign Up"}</h1>
        {!isLogin && <input ref={name} type="text" placeholder="Name" className="w-full p-4 m-4 bg-gray-800 text-white border border-gray-600 rounded-lg text-lg" />}
        <input ref={email} type="text" placeholder="Email Address" className="w-full p-4 m-4 bg-gray-800 text-white border border-gray-600 rounded-lg text-lg" />
        <input ref={password} type="password" placeholder="Password" className="w-full p-4 m-4 bg-gray-800 text-white  border-gray-600 rounded-lg text-lg" />
        <p className="text-red-500 text-sm">{ValidateMessage}</p>
        <button  onClick={HandleformValidation} className="w-full p-2 m-2 bg-red-500 text-white  hover:bg-blue-600 rounded-lg text-lg">
          {isLogin?"Sign In" :"Sign Up"}
          </button>
       <p className="text-lg py-4 text-white cursor-pointer" onClick={HandleIsLogin}>{isLogin?"New to Netflix? Sign Up Now" :"Already Registered? Sign In"} </p>
    </form>
</div>
  )
}

export default Login;

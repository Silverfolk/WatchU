import { useRef, useState } from "react"
import Header from "./Header"
import {ValidateState} from "../utils/Validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_photoURL } from "../utils/constants";
const Login = () => {
  const [isLogin,SetisLogin] =useState(true);
  const [ValidateMessage,SetValidateMessage] = useState(null);
  
  // const navigate=useNavigate();
  const dispatch=useDispatch();

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
        const user = userCredential.user;//once the user is being created we will update it's profile with it's name and photo url
        updateProfile(user, {
          displayName: name.current.value, photoURL: USER_photoURL
        }).then(() => {
          // Profile updated!
          console.log(auth.currentUser);
          const {uid,email,displayName,accessToken,photoURL}=auth.currentUser;//we are fetching updated value from firebase to our redux store as agr 'user' use karenge toh wo updated wala nhi hoga  
         
          dispatch(addUser({uid:uid, email:email, displayName:displayName, accessToken:accessToken,photoURL:photoURL }));
          
          // ...then navigate
          // navigate('/browse'); here we dont need to use this anymore as we have write user Authenticate logic in header and header is common in all compoenets of our app i.e agar user sign in hoga toh wo information authchange(firebase funtion) hume aise hi bata dega 
        }).catch((error) => {
          SetValidateMessage(error.message);
        });
        console.log(user);
       
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        SetValidateMessage(errorCode+"-"+errorMessage);
        // navigate('/'); here we dont need to use this anymore as we have write user Authenticate logic in header and header is common in all compoenets of our app i.e agar user sign in hoga toh wo information authchange(firebase funtion) hume aise hi bata dega 
      });

      
    }
    else{ //login

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // navigate('/browse');here we dont need to use this anymore as we have write user Authenticate logic in header and header is common in all compoenets of our app i.e agar user sign in hoga toh wo information authchange(firebase funtion) hume aise hi bata dega 
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        SetValidateMessage(errorCode+"-"+errorMessage);
        // navigate('/');here we dont need to use this anymore as we have write user Authenticate logic in header and header is common in all compoenets of our app i.e agar user sign in hoga toh wo information authchange(firebase funtion) hume aise hi bata dega 
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

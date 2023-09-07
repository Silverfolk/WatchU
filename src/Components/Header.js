import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { useNavigate } from "react-router-dom";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)//getching the data from redux store 
  const LogoutHandler=() => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
   navigate('/');
  }

  useEffect(()=>{
    // isske logic ke according firebase "onAuthStateChanged" se dekhega ki user SignedIn hai ya logout hai agar signedin hoga toh wo direct login page pe nhi jaa payega
    // agar signedIN nhi hua toh Browse page access nhi kar payega , hencce making this as protected route
    // we put useEffect here as Header is common component in our application 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const email = user.email;
        const displayName = user.displayName;
        const accessToken = user.accessToken;
        const photoURL=user.photoURL;
        console.log(user)
        dispatch(addUser({uid, email, displayName, accessToken,photoURL }));
        navigate("/browse");
        // console.log(uid);
      } else {
        // User is signed out
        
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
  },[]);
  return (
    <div className="flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black-400 z-20 bg-opacity-50">
     <img className="w-40"
      src={NETFLIX_LOGO} alt="logo" /> 
    
   {user && ( <div className="flex p-2 text-white font-sans text-sm">
    <img className="w-11 h-11 " alt="img logo"  src={user.photoURL}/>
   <button onClick={LogoutHandler}>Sign Out</button>
    </div>)
    }
    
    </div>
  )
}

export default Header

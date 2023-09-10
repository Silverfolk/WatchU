import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { useNavigate } from "react-router-dom";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { ChangeGPTButtonState } from "../utils/GPTReducer";
import { lang } from "../utils/constants";
import { changeLanguage } from "../utils/appconfigSlice";

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)//getching the data from redux store 
  const gptButton=useSelector(store=>store.GPT?.GPTSearchButton)
  const LogoutHandler=() => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
   navigate('/');
  }
  const HandleGPTClick= () => {
    dispatch(ChangeGPTButtonState());
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

  const handleLanguageChange= (event) =>{
    dispatch(changeLanguage(event.target.value));
  }

 
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
     <img className="w-40  mx-auto md:mx-0"
      src={NETFLIX_LOGO} alt="logo" /> 
    
   {user && ( <div className="flex p-2 justify-between text-white font-sans text-sm">
    { gptButton && (<select className="text-white bg-purple-700 py-2 px-4 mx-3 rounded-lg hover:opacity-75 " onChange={handleLanguageChange}> 
     {/* Adding options using map */}
      {lang.map(object=><option key={object.identifier} value={object.identifier}>{object.name}</option>)}
    </select>)}
    <button className="text-white bg-purple-700 py-2 px-4 mx-3 rounded-lg hover:opacity-75 " onClick={HandleGPTClick}>{gptButton?"Homepage":"GPT Search"}</button>
    <img className="hidden md:block w-12 h-12" alt="img logo"  src={user.photoURL}/>
   <button onClick={LogoutHandler}>Sign Out</button>
    </div>)
    }
    
    </div>
  )
}

export default Header

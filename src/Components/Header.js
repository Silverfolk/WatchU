import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../utils/userSlice"
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
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
  return (
    <div className="flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-20">
     <img className="w-40"
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" /> 
    
   {user && ( <div className="flex p-2">
    <img className="w-11 h-11 " alt="img logo"  src={user.photoURL}/>
   <button onClick={LogoutHandler}>Sign Out</button>
    </div>)
    }
    
    </div>
  )
}

export default Header

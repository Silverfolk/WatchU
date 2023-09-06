import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { useEffect } from "react";
import {auth} from '../utils/firebase';
import {onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch=useDispatch();
    const approuter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ]);

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          const email = user.email;
          const displayName = user.displayName;
          const accessToken = user.accessToken;
          const photoURL="https://assets.leetcode.com/users/avatars/avatar_1645288161.png";
          console.log(user)
          dispatch(addUser({uid, email, displayName, accessToken,photoURL }));
          // console.log(uid);
        } else {
          // User is signed out
          
          dispatch(removeUser());
          // ...
        }
      });
    },[]);
  return (
    <div>
     <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body

import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTailer } from "../utils/movieSlice";

const useVideoBackground = (movieId) =>{
    const dispatch=useDispatch();
    const videoTrailer= async () =>{
    
        const data=await  fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
        const json=await data.json();
        
    const Moviedata=json.results;
    console.log(Moviedata);
 const  filterdata=Moviedata.filter((val)=>val.type==="Trailer");
 const trailer=filterdata.length?filterdata[0]:Moviedata[0];
        //  we will put movie data into our redux store 
        dispatch(addTailer(trailer));

    }
    useEffect(()=>{
     videoTrailer();
    },[]);
}

export default useVideoBackground;
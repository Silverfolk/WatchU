import { useDispatch } from "react-redux";
import { addUpcomingMovieList } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useUpcomingMovieslist = () => {
    const dispatch=useDispatch();

    const getMoviesList = async () =>{
      const data= await  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options) 
      const json= await data.json();
      console.log(json.results);
      dispatch(addUpcomingMovieList(json.results));
    }
  
    useEffect(() =>{
     getMoviesList();
    },[]);
};
export default useUpcomingMovieslist;
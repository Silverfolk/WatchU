import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useGetMoviesList = () => {
    const dispatch=useDispatch();

    const getMoviesList = async () =>{
      const data= await  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options) 
      const json= await data.json();
      console.log(json.results);
      dispatch(addMovies(json.results));
    }
  
    useEffect(() =>{
     getMoviesList();
    },[]);
};
export default useGetMoviesList;
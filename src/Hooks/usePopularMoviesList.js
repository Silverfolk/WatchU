import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/constants";
import { addPopularMovieList } from "../utils/movieSlice";
const usePopularMoviesList = () => {
    const dispatch=useDispatch();

    const getMoviesList = async () =>{
      const data= await  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options) 
      const json= await data.json();
      console.log(json.results,"Popular");
      dispatch(addPopularMovieList(json.results));
    }
  
    useEffect(() =>{
     getMoviesList();
    },[]);
};
export default usePopularMoviesList;
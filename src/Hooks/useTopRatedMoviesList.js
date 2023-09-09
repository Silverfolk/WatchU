import { useDispatch } from "react-redux";
import { addTopRatedMovieList} from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useTopRatedMoviesList = () => {
    const dispatch=useDispatch();

    const getMoviesList = async () =>{
      const data= await  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options) 
      const json= await data.json();
      console.log(json.results,"toprated list ");
      dispatch(addTopRatedMovieList(json.results));
    }
  
    useEffect(() =>{
     getMoviesList();
    },[]);
};
export default useTopRatedMoviesList;
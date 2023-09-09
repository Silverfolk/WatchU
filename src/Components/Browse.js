import Header from "./Header"
import useGetMoviesList from "../Hooks/useGetMoviesList"
import UpperContainer from "./UpperContainer"
import LowerCotainer from "./LowerCotainer"
import usePopularMoviesList from '../Hooks/usePopularMoviesList';
import useTopRatedMoviesList from '../Hooks/useTopRatedMoviesList'; 
import useUpcomingMovieslist from "../Hooks/useUpcomingMovieslist";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";
const Browse = () => {
   useGetMoviesList();
   usePopularMoviesList();
   useTopRatedMoviesList();
   useUpcomingMovieslist();
   const gptButtonstate=useSelector(store=>store.GPT?.GPTSearchButton);
  return (
    <>
    <Header/>
    {gptButtonstate?(<GPTSearch/>):
    (<>
       <UpperContainer/>
       <LowerCotainer/>
       </>)
    }
 
    </>
  )
}

export default Browse

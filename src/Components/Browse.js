import Header from "./Header"
import useGetMoviesList from "../Hooks/useGetMoviesList"
import UpperContainer from "./UpperContainer"
import LowerCotainer from "./LowerCotainer"

const Browse = () => {
   useGetMoviesList();
  return (
    <>
    <Header/>
    <UpperContainer/>
    <LowerCotainer/>
    </>
  )
}

export default Browse

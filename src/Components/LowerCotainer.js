import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const LowerCotainer = () => {
  const NowPlayingmovies=useSelector(store=>store.movies?.MovieList);
  const PopularMovieList = useSelector(store=>store.movies?.PopularMovieList);
  const UpcomingMovieList=useSelector(store=>store.movies?.UpcomingMovieList);
  const TopMovieList = useSelector(store=>store.movies?.TopRatedMovieList);
  /* MovieList - Popular 
      Moviecard *n
      Movielist-Now playing
      MovieList-Trending 
      Movielist-Horror 
      */
  return (
      
    NowPlayingmovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={NowPlayingmovies} />
          <MovieList title={"Top Rated"} movies={TopMovieList} />
          <MovieList title={"Popular"} movies={PopularMovieList} />
          <MovieList
            title={"Upcoming Movies"}
       movies={UpcomingMovieList} 
          />
           <MovieList title={"Trending"} movies={NowPlayingmovies} />
        </div>
      </div>
    )
  )
}

export default LowerCotainer

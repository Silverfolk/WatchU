import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const UpperContainer = () => {

    const movies=useSelector(store=>store.movies?.MovieList);

    if(!movies){
        return ;
    }
    const mainmovie=movies[2];
    console.log(mainmovie);
    const overview=mainmovie?.overview;
    const title =mainmovie?.title;
    const movieId=mainmovie?.id;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      
      <VideoTitle overview={overview} title={title}/>
      <VideoBackground movieId={movieId}/>
    </div>
  )
}

export default UpperContainer

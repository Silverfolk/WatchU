import {IMG_BACKGROUND_URL} from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchbar from "./GPTSearchbar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="w-screen h-screen object-cover" src={IMG_BACKGROUND_URL} alt="logo" />
      </div>
      <div className="">
        <GPTSearchbar />
        <GPTMovieSuggestions />
      </div>
    </>
  )
}

export default GPTSearch

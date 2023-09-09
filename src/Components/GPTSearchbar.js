import { useSelector } from "react-redux";
import { language } from "../utils/Language";

const GPTSearchbar = () => {
   const lang=useSelector(store=>store.appConfig?.lang);
  
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center  ">
        <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={language[lang].SearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          
        >{language[lang].search}</button>
         
      </form>
    </div>
  )
}

export default GPTSearchbar;

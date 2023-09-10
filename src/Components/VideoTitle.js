

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute w-screen aspect-video pt-[20%] px-6 md:px-24 text-white bg-gradient-to-r from-black ">
      <h3 className="text-2xl md:text-6xl font-bold">{title}</h3>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>

      <div className="my-3 md:m-0">
        <button className="bg-gray-500 text-white p-3 md:py-4 md:px-12 text-xl  rounded-lg hover:bg-opacity-75">  ▶️ Play</button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hidden md:inline-block">More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle

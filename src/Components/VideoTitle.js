

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute w-screen aspect-video pt-[20%] px-24 text-white bg-gradient-to-r from-black ">
      <h3 className="text-6xl font-bold">{title}</h3>
      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl  rounded-lg hover:bg-opacity-75"> ▶ Play</button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle

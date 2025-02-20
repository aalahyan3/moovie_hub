import { FaImdb } from "react-icons/fa";
const HeaderDeatails = ({backdrop, poster, imdb, year, title}) =>
	{
		const Year = year ? year.split('-')[0] : 2025
		const rate = imdb ? imdb.toFixed(2): 0;
		return(
			<div className="header-movie-detail max-w-[1400px] mx-auto mt-4 overflow-hidden rounded relative">
				<div className="backdrop  overflow-hidden relative">
				{backdrop && <img src={backdrop} alt="backdrop" className="object-cover max-sm:scale-150" />}
				</div>
				<div className="data absolute bottom-1 left-1 z-10 flex items-end gap-10">
					<div className="poster w-2/12 max-sm:w-1/4 border border-[#2d2d2d87] 
					rounded overflow-hidden shadow-2xl">
						<img src={poster} alt="" className="object-cover brightness-75"/>
					</div>
					<div className="name mb-4 flex items-end gap-2 w-9/12">
					<span className="text-4xl max-md:text-2xl font-light ">{title}</span>
					<span className="text-sm md:text-lg text-gray-500">({Year})</span>
					<span></span>
					</div>
				</div>
				<div className="imdb absolute top-1 max-md:right-1 md:left-1 bg-[#0000007e] p-1 rounded flex flex-col items-center">
				<FaImdb className="max-md:text-2xl text-5xl text-yellow-300 opacity-70"/>
				<span className="max-md:text-xs text-lg font-light text-gray-300">{rate}</span>
				</div>
			</div>
		)
	}

export default HeaderDeatails
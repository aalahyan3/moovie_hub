import axios from "axios";
import { useEffect, useState } from "react";
const api_key = import.meta.env.VITE_TMDB_API_KEY;
const Trailer = ({id}) =>
	{
		const [video, setVideo] = useState([])
	
	useEffect(()=>
	{
		const fetchVedioData = async () =>
		{
			const options = {
				method: 'GET',
				url: `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
				headers: {
				  accept: 'application/json',
				  Authorization: `Bearer ${api_key}`
				}
			  };
		try{
			const res = await axios.request(options);
			if (res.status != 200)
				throw new Error("error fetching data");
			const trailer = res.data.results.find(v => v.site === "YouTube" && v.type.toLowerCase() === "trailer");
			setVideo(trailer ? trailer.key : null);
		}
		catch(err)
		{
			console.log(err)
		}
		
		}
	fetchVedioData()
}, [id]);
	return (
		<>
			<div className="trailer mt-10  mx-auto max-md:w-10/12 w-2/3 max-w-[800px]">
			<h1 className="text-center text-xl text-slate-400 mb-4 max-md:text-lg">Trailer</h1>
			{video ? (
				<iframe
					className="trailer-iframe w-full rounded-lg border border-[#ffffff56]"
					src={`https://www.youtube.com/embed/${video}`}
					title="Movie Trailer"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			) : (
				<p className="text-2xl text-gray-500 text-center py-4 px-6 bg-black rounded">No trailer available</p>
			)}
			</div>
		</>
	  );
	  
}

export default Trailer;
import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import axios from "axios";


const Recomendations = ({id}) =>
{
	const [recMovies, setRecMovies] = useState(null);
	const [loading, setLoading] = useState(true);
	const api_key = import.meta.env.VITE_TMDB_API_KEY;
	useEffect(()=>
	{
		const FetchMovies = async () =>
		{
			const options = {
				method: 'GET',
				url: `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
				headers: {
				  accept: 'application/json',
				  Authorization: `Bearer ${api_key}`
				}
			  };
			try{
				const res = await axios.request(options);
				if (res.status != 200)
				{
					throw new Error("Movie Was not found");
				}
				setRecMovies(res.data.results);
				setLoading(false)
			}
			catch(err)
			{
				console.log(err)
			}
		}
		FetchMovies();
	}, [id])
	if (recMovies && recMovies.lenght == 0)
		return null
	return(
		<div className="recomendations mt-10">
			<h1 className="text-center text-xl text-slate-400  max-md:text-lg">Recomendations</h1>
			{!loading && <div className="movies-list flex w-[90%] mx-auto mt-10 flex-wrap justify-center gap-2.5 max-w-[1400px]">
				{recMovies.map(movie => (
					<MovieCard
					 key={movie.id}
					 title={movie.title}
					 year={movie.release_date}
					 rate={movie.vote_average}
					 image={movie.poster_path ? "https://image.tmdb.org/t/p/original"+ movie.poster_path: null}
					 genre={movie.genre_ids}
					 id={movie.id}
					 />
				))}
				
			</div>}
		</div>
	)
}

export default Recomendations
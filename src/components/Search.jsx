import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "./MovieCard";
import Error from "./Error";

const Search = () =>
{
	const location = useLocation()
	const query = new URLSearchParams(location.search).get("query");
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const api_key = import.meta.env.VITE_TMDB_API_KEY;
	useEffect(()=>
	{
		if (!query) return ;
		const options = {
		method: 'GET',
		url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
		headers: {
		  accept: 'application/json',
		  Authorization: `Bearer ${api_key}`
		}
	  };
	  const FetchSearchedData = async () =>
	{
		try{
			const res = await axios.request(options);
			setMovies(res.data.results);
		}
		catch(err)
			{
				setError("something went wrong!");
			}
		finally{
			setLoading(false)
		}
	}
	FetchSearchedData()
	}, [query])
	console.log(movies)
	if(loading)
	return(
		<h1>loading...</h1>
)
else if (movies.length == 0)
{
	return(
		<Error message={`no results for: ${query}`}/>
	)
}
else if (error)
{
	return(
		<Error message={error} />
	)
}
else
{
	return(
		<div className="search pt-10">
			<div className="results mt-10 max-w-[1400px] mx-auto">
				<h2 className="text-center text-gray-500 bg-slate-800 w-1/2 mx-auto rounded">{`${movies.length} results found for: ${query}`}</h2>
				<div className="movies-list flex w-[90%] mx-auto mt-4 flex-wrap justify-center gap-2.5 max-w-[1400px]">
					{movies.map(movie => (
					<MovieCard
					key={movie.id}
					title={movie.title}
					year={movie.release_date || "100-01-10"}
					rate={movie.vote_average || 0}
					image={movie.poster_path ? "https://image.tmdb.org/t/p/original"+ movie.poster_path: null}
					genre={movie.genre_ids}
					id={movie.id}
					/>
				))}
			</div>
		</div>
		</div>
	)
}
}

export default Search;
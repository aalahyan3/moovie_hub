import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import HeaderDeatails from "./HeaderDetails";
import GenreDetails from "./GenreDetails";
import Overview from "./Overview";
import ExtraData from "./ExtraData";
import ProductionCompanies from "./ProductionCompanies";
import Loader from "./Loader";
import Trailer from "./Trailer";
import Recomendations from "./Recommendations";
import Error from "./Error";


const MovieDetails = ()=>
{
	const [movie, setMovie] = useState({});
	const [err, setErr] = useState(null)
	const [Loading, setLoading] = useState(true);
	const {id} = useParams();
	const location = useLocation()
	const api_key = import.meta.env.VITE_TMDB_API_KEY;
	useEffect(() => {
		window.scrollTo(0, 0);
		setLoading(true)
	}, [location]);
	useEffect(()=>
{
	const options = {
	method: 'GET',
	url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${api_key}`
	}
	};
	const  getMovieData = async () =>{
		setLoading(true)
		try{
			const res = await axios(options);
			setMovie(res.data)
			setLoading(false);
		}
		catch(error)
		{
			if (error.status == 404)
			{
				setErr("Movie was not found");
			}
			else{
				setErr("something went wrong, please try again later!");
			}
		}
		finally{
			setLoading(false)
		}
	}
	getMovieData()
	}, [id])

	if (Loading)
		return(
	<Loader animate={Loading}/>
	)
	else if (err)
	{
		return(
			<Error message={err}/>
		)
	}
	else{
		return(
		<>
			<div className="details">
				<HeaderDeatails 
				backdrop={movie.backdrop_path ? "https://image.tmdb.org/t/p/original" + movie.backdrop_path : null}
				imdb={movie.vote_average}
				poster={movie.poster_path ? "https://image.tmdb.org/t/p/original" + movie.poster_path : null}
				title={movie.title}
				year={movie.release_date}
				/>
				{movie.genres && <GenreDetails genres={movie.genres ?  movie.genres:[]}/>}
				{movie.overview &&  <Overview overview={movie.overview} />}
				<ExtraData 
				tagline={movie.tagline}
				original_title={movie.original_title}
				budget={movie.budget}
				country={movie.production_countries}
				language={movie.spoken_languages}
				release_date={movie.release_date}
				duration={movie.runtime}
				/>
				{movie.production_companies && movie.production_companies.lenght > 0 && <ProductionCompanies comps={movie.production_companies}/>}
				<Trailer id={id} />
				<Recomendations id={id}/>
			</div>
		</>
	)
}
}
export default MovieDetails
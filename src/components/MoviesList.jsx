import { useEffect } from "react";
import MovieCard  from "./MovieCard"
import { useState } from "react";
import axios from "axios";
import { IoMdTrendingUp } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";

const MoviesList = () =>
	{
		const [searchParams] = useSearchParams()
		const [movies, setMovies] = useState([]);
		const [loading, setLoading] = useState(true)
		const [error, setError] = useState(null)
		const [currPage, setCurrPage] = useState(1);
		const [tab, setTab] = useState("popular");
  		const [nbPages, setNbPages] = useState(1);
		const api_key = import.meta.env.VITE_TMDB_API_KEY;
		console.log(api_key);
		  useEffect(()=>
			{
				const page = parseInt(searchParams.get("page")) || 1;
				const currTab = searchParams.get("tab") || "popular";
				setTab(currTab)
				setCurrPage(page)
				setMovies([])
				setError(null)
				setLoading(true)
			const options = {
				method: 'GET',
				url: `https://api.themoviedb.org/3/movie/${currTab}?language=en-US&page=${page}`,
				headers: {
				  accept: 'application/json',
				  Authorization: `Bearer ${api_key}`
				}
			  };
			const fetchMovies = async () =>
			{
				try{
					const res = await axios(options);
						setMovies(res.data.results || []);
						setNbPages(res.data.total_pages <= 500 ? res.data.total_pages : 500)
						setError(null);
						await new Promise(resolve => setTimeout(resolve, 300));
					console.log(res.data)
				}
				catch(err)
				{
						setError("Error Loading movies, please try again later")
						console.log(err.message || err)
				}
				finally{
					setLoading(false)
				}
			}
			fetchMovies()
		}, [searchParams])
	if (error)
	{
		return(
			<Error message={error}/>
		)
	}

	else
	{
		return (
			<>
			{loading ? <Loader animate={true}/> : null}
			<div className="nav bg-slate-700 mt-10 w-[90%] md:w-1/2 mx-auto rounded-sm shadow overflow-hidden">
				<ul className="flex w-full text-center">
					<li className={`w-1/3 cursor-pointer p-2 text-xs  text-center md:text-sm ${tab == "popular" ? "bg-red-900 !important": null}`}><Link to={`/?tab=popular&page=1`}> <IoMdTrendingUp className="md:text-3xl w-full text-2xl"/>Popular</Link></li>
					<li className={`w-1/3 cursor-pointer p-2 text-xs  text-center md:text-sm ${tab == "top_rated" ? "bg-red-900": null}`}><Link to={`/?tab=top_rated&page=1`}><FaHeart className="md:text-3xl w-full text-2xl"/> Top Rated</Link></li>
					<li className={`w-1/3 cursor-pointer p-2 text-xs  text-center md:text-sm ${tab == "upcoming" ? "bg-red-900": null}`}> <Link to={`/?tab=upcoming&page=1`}><CgSandClock className="md:text-3xl w-full text-2xl"/>Upcoming</Link></li>
				</ul>
			</div>
			{!loading &&  <div className="movies-list flex w-[90%] mx-auto mt-10 flex-wrap justify-center gap-2.5 max-w-[1400px]">
				{movies.map(movie => (
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
			{error && <div className="text-2xl w-10/12 mx-auto text-center bg-gray-600 font-light border border-gray-500 shadow mt-10">
				<h1>Error Loading Movies</h1>
			</div>}
			{!loading && <div className="pages p-2 mt-4 bg-slate-950  flex justify-center gap-1 items-center">
				{ currPage != 1 && <Link to={`/?page=1&tab=${tab}`} className="border p-1 min-w-[30px] text-center rounded-xs bg-gray-700 shadow border-gray-600 text-sm">1</Link>}
				{ currPage > 2 && <div className="dots text-xl text-center font-bold">...</div>}
				{currPage > 2 && <Link className="border p-1 min-w-[30px] text-center rounded-xs bg-gray-700 shadow border-gray-600 text-sm" to={`/?page=${currPage - 1}&tab=${tab}`}>{currPage - 1}</Link>}
				<Link to={`/?page=${currPage}&tab=${tab}` }className="border p-1 min-w-[30px] text-center rounded-xs bg-gray-900 shadow border-gray-600 text-sm">{currPage}</Link>
				{currPage != nbPages && <Link to={`/?page=${currPage + 1}&tab=${tab}`} className="border p-1 min-w-[30px] text-center rounded-xs bg-gray-700 shadow border-gray-600 text-sm">{currPage + 1}</Link>}
				{ currPage < nbPages - 1 && <div className="dots text-xl text-center font-bold">...</div>}
				{ currPage < nbPages - 1 &&  <Link to={`/?page=${nbPages}&tab=${tab}`} className="border p-1 min-w-[30px] text-center rounded-xs bg-gray-700 shadow border-gray-600 text-sm">{nbPages}</Link>}
			</div>}
			</>
		)
	}
	}

export default MoviesList;
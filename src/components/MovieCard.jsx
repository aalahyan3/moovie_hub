import { FaImdb } from "react-icons/fa";
import { ActionGenre, ComedyGenre, DramaGenre, HorrorGenre, FantasyGenre, ScifiGenre, RomanceGenre, AnimationGenre } from "./Genres";
import React from "react";
import { Link } from "react-router-dom";
const renderGenreComponent = (genre) => {
    switch (genre) {
		case 14:
			return <FantasyGenre />;
		case 35:
			return <ComedyGenre />;
		case 28:
			return <ActionGenre />;
		case 18:
			return <DramaGenre />
		case 878:
			return <ScifiGenre />
		case 27:
			return < HorrorGenre />
		case 10749:
			return <RomanceGenre />
		case 10751:
			return <AnimationGenre />
    }
  };


const MovieCard = ({id, title, rate, genre, year, image}) =>
{
	const new_year = year.split("-")[0]
	const new_rate = rate.toFixed(1)
	return (
		<div className="card w-[300px] p-1 rounded overflow-hidden shadow shadow-[#ffffff32]">
			<Link  to={`/details/${id}`} className="booster relative overflow-hidden cursor-pointer">
				<img className="w-full image" 
				src={image ? image: "https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg"} alt="booster" />
			<div className="rate hidden absolute top-1 left-0 font-light text-lg  shadow bg-[#0000001d]
			flex-col  items-center"><FaImdb className=" text-yellow-500 text-4xl"/><span className="text-lg text-yellow-100">{new_rate}</span></div>
			<div className="year hidden absolute top-0 right-0 bg-sky-950 text-center w-100 rotate-45 translate-[150px] translate-y-[20px] font-semibold">{new_year}</div>
			<div className="title hidden absolute top-1/4 text-center  items-center justify-center h-1/2 w-full text-2xl">{title}</div>
			<div className="genre hidden gap-1 absolute bottom-0 items-center justify-center w-full h-1/4 p-1 flex-wrap overflow-y-hidden">
			{genre && genre.map((g, index) => 
				<React.Fragment key={index}>
					{renderGenreComponent(g)}
				</React.Fragment>
				
			)}
			</div>
			</Link>
		</div>
	)
}

export default MovieCard;
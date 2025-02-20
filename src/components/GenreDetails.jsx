
const Genre = ({name}) =>
	{
		return(
			<div className="genre max-md:text-sm 
			py-1 px-2 min-w-40 text-gray-500 shadow
			 shadow-slate-800 bg-slate-950 text-center rounded-full border">
				{name}
			</div>
		)
	}

const GenreDetails = ({genres}) =>
{
	return(
		<div className="genres mt-4 flex flex-wrap gap-4 
		justify-center rounded-sm px-2 py-4 max-w-[1400px] mx-auto
		 w-full">
			{genres.map((genre, i)=>
				<Genre key={i} name={genre.name}/>
			)}
		</div>
	)
}

export default GenreDetails;
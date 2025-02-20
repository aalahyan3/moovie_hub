const Company = ({name, logo}) => {
	return (
		<div className="prod-comp bg-[#ffffff3f] flex items-center min-w-20 p-4 rounded relative cursor-pointer border border-[#ffffff3f]">
			<div className="logo-prod-comp mx-auto">
				<img src={"https://image.tmdb.org/t/p/original" + logo} alt={`${name}'s logo`} className=" object-cover h-10 max-md:h-4 text-xs"/>
			</div>
			<div className="name-prod-company absolute p-1 text-gray-500 rounded-sm shadow text-xs max-md:text-xs">
				{name}
			</div>
		</div>
	);
  };
  
  const ProductionCompanies = ({comps}) => {
	if (!comps)
			return (null)
	return (
		<>
		<h2 className="text-center text-xl mt-6 text-slate-400 max-md:text-lg">Production Copmanies</h2>
		<div className="production-companies flex justify-center gap-6 mt-4 max-w-[1400px] mx-auto flex-wrap">
			{comps.map((comp, i) => (
			<Company key={i} name={comp.name} logo={comp.logo_path}/>
			))}
		</div>
	  </>
	);
  };
  
  export default ProductionCompanies;
  
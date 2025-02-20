const Loader = ({animate}) =>
	{
		return(
			<div className={`loader w-0 h-1 shadow bg-cyan-900 ${animate ? 'animate-loader' : null}` }>
			</div>
		)
	}

export default Loader

const Overview = ({overview}) =>
	{
		return(
			<div className="overview w-10/12 bg-[#00000064] mx-auto 
			rounded-xl p-6 border max-w-[1400px]
			 font-light mt-6 text-gray-300 max-md:text-sm  
			 shadow-lg border-[#ffffff38] relative">
				{overview}
			</div>
		)
	}

export default Overview;
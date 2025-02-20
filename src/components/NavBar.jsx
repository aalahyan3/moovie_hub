import { MdOutlineLocalMovies } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";



const NavBar = () =>
	{
		const [searchQuery, setSearchQuery] = useState("")
		const loacation = useLocation()
		useEffect(()=>{
			setSearchQuery("")
		}
		,[loacation])
		return(
			<div className="nav p-2 bg-slate-900 z-20 text-white flex sticky top-0 
			justify-around max-md:flex-col items-center max-md:gap-6 border-b border-slate-800
			shadow max-md:text-sm
			">
				<div className="logo text-white">
					<Link to={"/"} className="text-xl flex">
						<MdOutlineLocalMovies className="text-3xl
						 text-red-700"/> MoovieHub</Link>
					
				</div>
				<div className="search flex bg-slate-800 p-1 w-1/2 max-md:w-10/12 justify-between rounded-sm shadow">
					<input type="text" placeholder="Search Here..." value={searchQuery}
					 className="px-2 focus:outline-none w-full max-md:w-80" onChange={(e) =>{setSearchQuery(e.target.value)}} />
					<Link to={`search/?query=${searchQuery}`} className="text-2xl hover:cursor-pointer rounded bg-slate-600"><CiSearch /></Link>
				</div>
			</div>
		)
	}

export default NavBar
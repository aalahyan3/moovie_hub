
import { PiSubtitles } from "react-icons/pi";
import { IoLanguageOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { TfiAlarmClock } from "react-icons/tfi";
import { IoPricetagOutline } from "react-icons/io5";
import { useState } from "react";

const formatDate = (str) =>
{
	const date = new Date(str)
	return (date.toLocaleDateString('en-US',{year: "numeric", month: 'long', day: 'numeric'}));
}

const ExtraData = ({country, original_title, language, release_date, duration, budget, tagline}) =>
	{
		const pays = country.length > 0 ? country[0].name.toLowerCase() : null;
		const [flagUrl, setFlagUrl] = useState(null);
		fetch(`https://restcountries.com/v3.1/name/${pays}?fields=flags`)
		  .then(res => res.json())
		  .then(data => {
			setFlagUrl(data[0].flags.svg)
		  })
		  .catch(err => console.error(err));
		return(
			<div className="extra-data max-w-[1400px] mx-auto bg-[#0000000a] p-2 flex flex-col gap-1 mt-10 rounded">
					<div className="field flex bg-slate-950 p-2 rounded-tr rounded-tl">
						<div className="name max-md:w-1/3 w-1/5 border-r flex gap-4 items-center  max-md:text-sm text-gray-400">
						<PiSubtitles className="text-2xl max-md:hidden w-1/4"/> <span>Original Title</span>
						</div>
						<div className="value max-md:w-2/3 w-4/5 pl-4 max-md:text-sm text-gray-400">
							{original_title}
						</div>
					</div>
					<div className="field flex bg-slate-950 p-2 ">
						<div className="name max-md:w-1/3 w-1/5 border-r flex  gap-4 items-center  max-md:text-sm text-gray-400">
						<IoLanguageOutline className="text-2xl max-md:hidden w-1/4 "/> <span>Language</span>
						</div>
						<div className="value max-md:w-2/3 w-4/5 pl-4 max-md:text-sm text-gray-400">
							{language.length > 0 ?`${language[0].english_name} (${language[0].iso_639_1})`:null}
						</div>
					</div>
					<div className="field flex bg-slate-950 p-2 ">
						<div className="name max-md:w-1/3 w-1/5 border-r flex  gap-4 items-center  max-md:text-sm text-gray-400">
						<TbWorld className="text-2xl max-md:hidden w-1/4 "/> <span>Country</span>
						</div>
						<div className="value max-md:w-2/3 w-4/5 pl-4 max-md:text-sm text-gray-400">
							<div className="flag"><img src={flagUrl} alt="" className=" object-cover w-1/12 max-md:w-2/12 brightness-75"/></div>
						</div>
					</div>
					<div className="field flex bg-slate-950 p-2 ">
						<div className="name max-md:w-1/3 w-1/5 border-r flex  gap-4 items-center  max-md:text-sm text-gray-400">
						<CiCalendarDate className="text-2xl max-md:hidden w-1/4 "/> <span>Released</span>
						</div>
						<div className="value max-md:w-2/3 w-4/5 pl-4 max-md:text-sm text-gray-400">
							{formatDate(release_date)}
						</div>
					</div>
					<div className="field flex bg-slate-950 p-2 ">
						<div className="name max-md:w-1/3 w-1/5 border-r flex  gap-4 items-center  max-md:text-sm text-gray-400">
						<TfiAlarmClock className="text-2xl max-md:hidden w-1/4 "/> <span>Duration</span>
						</div>
						<div className="value max-md:w-2/3 w-4/5 pl-4 max-md:text-sm text-gray-400">
							{`${Math.floor(duration / 60)}h${duration % 60}min`}
						</div>
					</div>
					<div className="field flex bg-slate-950 p-2 ">
						<div className="name max-md:w-1/3 w-1/5 border-r flex  gap-4 items-center  max-md:text-sm text-gray-400">
						<MdAttachMoney className="text-2xl max-md:hidden w-1/4 "/> <span>Budget</span>
						</div>
						<div className="value max-md:w-2/3 w-4/5 pl-4 max-md:text-sm text-gray-400">
							{`$ ${budget.toLocaleString()}`}
						</div>
					</div>
					<div className="field flex bg-slate-950 p-2 rounded-bl rounded-br">
						<div className="name max-md:w-1/3 w-1/5 border-r flex   gap-4 items-center  max-md:text-sm text-gray-400">
						<IoPricetagOutline className="text-2xl max-md:hidden w-1/4 "/> <span>Tagline</span>
						</div>
						<div className="value max-md:w-2/3 w-4/5 pl-4 max-md:text-sm text-gray-400">
							{tagline}
						</div>
					</div>
			</div>

		)
	}
export default ExtraData
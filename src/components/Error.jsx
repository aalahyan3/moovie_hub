import { MdReportGmailerrorred } from "react-icons/md";
const Error = ({message}) =>
{
	return(
		<div className="err p-6 bg-red-900 max-w-[800px] mx-auto 
		text-center text-gray-300 mt-10 rounded flex justify-center gap-4 items-center">
			<MdReportGmailerrorred className="text-3xl"/>
			<span>{message || "Bad Request"}</span>
		</div>
	)
}
export default Error
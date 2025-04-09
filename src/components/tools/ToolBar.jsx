import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ToolBar({icon, index, func, isOpen='', isNull=''}){
	return(
		<div onClick={func} id={`bar${index}`} className={`relative w-10 bg-[#1e2227] rounded-full py-2 px-3 text-white/70 ${isOpen == 'closed' ? 'text-md hover:bg-green-700' : isNull == 'yes' ? 'text-center hover:bg-red-700' : 'text-md hover:bg-green-700' }`}>
			<FontAwesomeIcon icon={icon}/>
		</div>
	)
}
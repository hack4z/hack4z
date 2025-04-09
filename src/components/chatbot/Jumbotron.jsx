import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileLines, faFileImage } from '@fortawesome/free-regular-svg-icons';

export default function Jumbotron(){
	return(
		<div className="relative top-24">
			<h1 className="text-white/40 font-bold font-sans text-center text-4xl">What could I help you with</h1>
			{ window.innerWidth >= 800 ? (
				<div className="flex justify-center gap-2 mt-8">
					<div className="cursor-pointer hover:scale-[105%]  pt-3 w-[144px] text-center bg-purple-700/20 text-purple-700 px-6 py-2 rounded-md">
						<FontAwesomeIcon icon={faTerminal} className="border-4 border-solid border-purple-700 p-[2px] rounded-sm scale-[60%]"/>
						<span className="relative -top-[6px]">Code</span>
					</div>
					<div className="cursor-pointer hover:scale-[105%]  w-[144px] text-center bg-red-700/20 text-red-700 px-6 py-2 rounded-md">
						<span className="">Brainstorm</span>
					</div>
					<div className="cursor-pointer hover:scale-[105%]  pt-3 w-[144px] text-center bg-blue-700/20 text-blue-700 px-6 py-2 rounded-md">
						<FontAwesomeIcon icon={faFileLines} className="mr-1"/>
						<span className="">Summarize</span>
					</div>
					<div className="cursor-pointer hover:scale-[105%]  pt-3 w-[144px] text-center bg-yellow-700/20 text-yellow-700 px-6 py-2 rounded-md">
						<FontAwesomeIcon icon={faPenAlt} className="mr-1"/>
						<span className="">Write</span>
					</div>
					<div className="cursor-pointer hover:scale-[105%]  pt-3 min-w-[144px] text-center bg-violet-700/20 text-violet-700 px-6 py-2 rounded-md">
						<FontAwesomeIcon icon={faFileImage} className="mr-1"/>
						<span className="">Create image</span>
					</div>
				</div>
			) : (
				<>
					<div className="flex justify-center gap-2 mt-8 scale-75 sm:scale-100">
						<div className="cursor-pointer min-w-[144px] text-center bg-purple-700/20 text-purple-700 px-6 py-2 rounded-md">
							<FontAwesomeIcon icon={faTerminal} className="border-4 border-solid border-purple-700 p-[2px] rounded-sm scale-[60%]"/>
							<span className="relative -top-[6px]">Code</span>
						</div>
						<div className="cursor-pointer pt-3 w-[144px] text-center bg-blue-700/20 text-blue-700 px-6 py-2 rounded-md">
							<FontAwesomeIcon icon={faFileLines} className="mr-1"/>
							<span className="">Summarize</span>
						</div>
					</div>
					<div className="flex justify-center gap-2 mt-8 scale-75 sm:scale-100">
						<div className="cursor-pointer pt-3 w-[144px] text-center bg-yellow-700/20 text-yellow-700 px-6 py-2 rounded-md">
							<FontAwesomeIcon icon={faPenAlt} className="mr-1"/>
							<span className="">Write</span>
						</div>
						<div className="cursor-pointer pt-3 min-w-[144px] text-center bg-violet-700/20 text-violet-700 px-6 py-2 rounded-md">
							<FontAwesomeIcon icon={faFileImage} className="mr-1"/>
							<span className="">Create image</span>
						</div>
					</div>
				</>
			)}
		</div>
	)
}
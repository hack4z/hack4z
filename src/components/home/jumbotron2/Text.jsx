export default function Text({title, text}){
	return(
		<div className="shrink-0 w-screen p-2 pt-4 flex gap-4 overflow-x-hidden overflow-y-scroll">
			<div className="h-64 w-4 bg-yellow-800/40"></div>
			<div className="">
				<h1 className="text-5xl font-bold font-serif">{title}</h1>
				<p className="font-light font-serif pl-6 pt-2">{text}</p>
			</div>
		</div>
	)
}
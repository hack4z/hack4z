import { useState } from 'react';

export default function Quote(){
	const [currentPage, setCurrentPage] = useState('1');


	function handleNavigation(e){
		setCurrentPage(e.target.id);
	}

	return(
		<div className="w-screen border-y border-solid border-white/40 p-2 overflow-hidden">
			<img src="css.jpeg" alt="" className="mx-auto"/>
			<h1 className="font-bold font-serif text-center text-xl">{'css'}</h1>
			<nav className="px-2 pt-4 mb-6">
				<ul className="flex gap-6 text-center">
					<li id='1' onClick={handleNavigation} className={`w-1/2 text-xl cursor-pointer hover:border-b-2 hover:border-solid hover:border-red-700 ${currentPage === '1' && 'border-b-2 border-solid border-red-700'}`}>Home</li>
					<li id='2' onClick={handleNavigation} className={`w-1/2 text-xl cursor-pointer hover:border-b-2 hover:border-solid hover:border-red-700 ${currentPage === '2' && 'border-b-2 border-solid border-red-700'}`}>Resources</li>
				</ul>
			</nav>
			{currentPage == 1 ? (
				<div className="shrink-0 min-h-24 pb-1 w-screen pt-4 flex gap-4 overflow-x-hidden overflow-y-scroll">
					<div className="h-24 w-2 bg-yellow-800/40"></div>
					<p className="pl-4 pt-2 text-xl">{'css'}</p>
				</div>
			) : (
				<div className="shrink-0 w-screen pt-4 flex gap-4 overflow-x-hidden overflow-y-scroll">
					<div className="h-24 w-2 bg-yellow-800/40"></div>
					<p className="pl-4 pt-2 text-xl">{'css'}</p>
				</div>
			)}
		</div>
	)
}
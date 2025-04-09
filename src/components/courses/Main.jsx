import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Select from './Select';

export default function Main(){
	const [currentPage, setCurrentPage] = useState('1');
	const card = useLoaderData();

	function handleNavigation(e){
		setCurrentPage(e.target.id);
	}

	return(
		<div className="min-h-screen w-screen relative -top-4">
			<Link to=".." relative><div className="absolute top-2 left-4 hover:text-blue-700 text-center border border-solid border-white/40 rounded-full p-1 w-8"><FontAwesomeIcon icon={faArrowLeft}/></div></Link>
			<div className="border-b border-solid border-white/40">
				<img src={`../../${card.img}`} alt="" className="h-full sm:h-48 mx-auto"/>
			</div>
			<nav className="px-4 pt-4 mb-6">
				<ul className="flex gap-6 text-center">
					<li id='1' onClick={handleNavigation} className={`w-1/3 text-xl cursor-pointer hover:border-b-2 hover:border-solid hover:border-red-700 ${currentPage === '1' && 'border-b-2 border-solid border-red-700'}`}>Home</li>
					<li id='2' onClick={handleNavigation} className={`w-1/3 text-xl cursor-pointer hover:border-b-2 hover:border-solid hover:border-red-700 ${currentPage === '2' && 'border-b-2 border-solid border-red-700'}`}>Modules</li>
					<li id='3' onClick={handleNavigation} className={`w-1/3 text-xl cursor-pointer hover:border-b-2 hover:border-solid hover:border-red-700 ${currentPage === '3' && 'border-b-2 border-solid border-red-700'}`}>Related</li>
				</ul>
			</nav>
			<div className="">
				{ currentPage === '1' && (
					<div className="mx-4">
						<h1 className="text-2xl text-blue-700">{card.name}</h1>
						<p className="text-sm ml-4">{card.long_description}</p>
					</div>
				)}
				{ currentPage === '2' && (
					<Select card={card}/>
				)}
				{ currentPage === '3' && (
					<div className="mx-4">
						<h1 className="text-2xl text-blue-700">{card.name}</h1>
						<p className="text-sm ml-4">{card.long_description}</p>
					</div>
				)}
			</div>
		</div>
	)
}
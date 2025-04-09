import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import OffCanvas from './OffCanvas';
import ToolBox from '../tools/ToolBox';
import Footer from './Footer';

export default function Layout(){
	const [isOpen, setIsOpen] = useState(() => sessionStorage.getItem('isOpen') || 'closed');
	const location = useLocation().pathname;
	const location1 = location.split('/').slice(-1);

	useEffect(() => {
		sessionStorage.setItem('isOpen', isOpen);
	},[isOpen])

	function toggleOffCanvas(){
		setIsOpen(prevMode => prevMode === 'closed' ? 'open' : 'closed');
	}

	return(
		<div className="min-w-screen max-h-screen overflow-y-scroll bg-black text-white/80" id="main">
			<Navbar toggleOffCanvas={toggleOffCanvas}/>
			<OffCanvas isOpen={isOpen} location={location1[0]}/>
			<div className={`${location1[0] === 'editor' ? 'mt-20' :  location1[0] === 'chatbot' ? 'mt-20' : 'mt-24'}`}>
				<Outlet/>
			</div>
			{location1[0] !== 'chatbot' && <Footer/>}
			<ToolBox/>
		</div>
	)
}
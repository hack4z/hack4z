import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faBell, faGear, faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({toggleOffCanvas}){
	const [isWalletOpen, setIsWalletOpen] = useState('closed');
	const location = useLocation().pathname;
	const location1 = location.split('/').slice(-1);

	function toggleWallet(){
		setIsWalletOpen(prevMode => prevMode === 'closed' ? 'open' : 'closed');
	}

	const cards = [{ img: 'css.jpeg', total: 500 }, { img: 'css.jpeg', total: 500 }, { img: 'css.jpeg', total: 500 }, { img: 'css.jpeg', total: 500 }];

	return(
		<nav className="fixed bg-black z-20 shadow-md shadow-white/20 w-screen px-4 py-4 grid grid-cols-2">
			<button className="border-solid text-black/60 border-2 border-white/20 relative w-20 h-12 pl-[23px] rounded-md active:ring-4 active:ring-white/60" onClick={toggleOffCanvas}>
				<p className="absolute top-[-6px] text-white/20">____</p>
				<p className="absolute top-0.5 text-white/20">____</p>
				<p className="absolute top-[12px] text-white/20">____</p>
			</button>
			<div className={`absolute top-6 right-4 grid ${location1[0] === 'editor' ? 'grid-cols-4' : 'grid-cols-3'} gap-8`}>
				{ location1[0] === 'editor' && <Link to="settings"><FontAwesomeIcon icon={faGear} className="scale-150 mt-1 text-yellow-800"/></Link> }
				<Link to="user"><FontAwesomeIcon icon={faCircleUser} className="scale-150 mt-1 text-yellow-800"/></Link>
				<FontAwesomeIcon icon={faWallet} onClick={toggleWallet} className="scale-150 mt-1 text-yellow-800"/>
				{isWalletOpen === 'open' && (
					<div className="scale-90 sm:scale-100 fixed top-8 right-20 sm:right-24 z-30 bg-gray-950 min-h-36 w-36 py-2 px-1 rounded-md ring-2 ring-white/20 hover:ring-4">
						{cards.map((card, index) =>(
							<div key={index} className="cursor-no-drop flex gap-4 mb-1">
								<img src={card.img} alt="" className="h-8 w-12"/>
								<p className="mt-1">{card.total}</p>
							</div>
						))}
						<Link to='store' className="py-1 hover:text-blue-700 cursor-pointer">Buy more</Link>
					</div>
				)}
				<Link to='notifications'><FontAwesomeIcon icon={faBell} className="scale-150 text-yellow-800 mt-[3px]"/></Link>
			</div>
		</nav>
	)
}

Navbar.propTypes = {
	toggleOffCanvas: PropTypes.func.isRequired
}
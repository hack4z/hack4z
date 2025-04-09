import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart as RegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';

export default function CardLayout({cards, isDataSlotActive, name, link}){
	const [liked, setLiked] = useState(() => cards.map(card => ({id: card.id, isLiked: card.isLiked})));

	function handleLiked(e){
		const id = e.target.parentElement.id;
		setLiked(prevMode => prevMode.map(mode => {
			if(mode.id === id) return {id: id, isLiked: `${mode.isLiked === 'on' ? 'off' : 'on'}`};
			else return mode;
		}));
	}

	return (
		<div>
			<div className="w-screen pl-2 py-4 border-y border-solid border-white/20">
				<Link to={link} className="hover:text-blue-700">{name}</Link>
			</div>
			<div className="relative flex overflow-x-scroll pl-6">
				<p className={`absolute -left-12 ${isDataSlotActive === 'on' ? 'top-[175px] sm:top-[205px]' : 'top-[120px] sm:top-[125px]'} -rotate-90 text-xs shrink-0`}>Reccomended {name}</p>
				{ cards.map(card => (
					<div key={card.key} className={`relative overflow-y-scroll ${isDataSlotActive === 'off' ? 'min-h-36 sm:min-h-56' : 'min-h-[360px] sm:min-h-[380px]'} min-w-[300px] sm:min-w-[360px] rounded-lg my-6 mx-2 sm:mx-6 border border-white/20 border-solid`}>
						<img src={`${card.img}`} alt={card.name} className={`w-full ${isDataSlotActive === 'on' ? 'h-56' : 'h-full'} rounded-lg`}/>
						{isDataSlotActive === 'on' && (
							<>
								<div className="relative flex justify-between mx-4 py-2">
									<div>
										{card.stars.map(star => (
					 						<FontAwesomeIcon icon={faStar} key={card.key += '*'} className={`${star === 1 ? 'text-green-700' : 'text-red-700'}`}/>
										))}
										<span className="ml-2 italic text-xs">({card.stars.reduce((acc, num) => acc += num)}) ratings</span>
									</div>
									<div className="pt-[2px]" id={card.id} onClick={handleLiked}><FontAwesomeIcon id={card.id} icon={liked[card.id - 1].isLiked === 'on' ? SolidHeart : RegularHeart} className={`text-xl ${liked[card.id - 1].isLiked === 'on' && 'text-red-700'}`}/></div>
								</div>
								<p className="">{card.description}</p>
								<button className="absolute bottom-2 right-2 py-2 px-8 rounded-md bg-blue-700/90 hover:bg-blue-700/60 active:ring-4 active:ring-blue-700/40">Activate</button>
							</>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

CardLayout.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			key: PropTypes.string,
			img: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			created_at: PropTypes.string,
			time: PropTypes.string,
			short_description: PropTypes.string,
			views: PropTypes.number,
			likes: PropTypes.number,
			downloads: PropTypes.number,
			isLiked: PropTypes.oneOf(['on', 'off']).isRequired,
			isBookmarked: PropTypes.oneOf(['on', 'off']).isRequired,
		})
	),
	isDataSlotActive: PropTypes.string.isRequired, 
	name: PropTypes.string.isRequired, 
	link: PropTypes.string.isRequired
};
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHeart as SolidHeart, faBookmark as SolidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faEye, faHeart as RegularHeart, faBookmark as RegularBookmark} from '@fortawesome/free-regular-svg-icons';

export default function Card({card}){
	const [liked, setLiked] = useState('on');
	const [bookmark, setBookmark] = useState('on');
	const navigate = useNavigate();
	const location = useLocation().pathname;
	const location1  = location.split('/').slice(-1)

	function handleLiked(){
		setLiked(prevMode => prevMode === 'off' ? 'on' : 'off');
	}

	function handleBookmark(){
		setBookmark(prevMode => prevMode === 'on' ? 'off' : 'on');
	}

	return(
		<div className="">
			{ window.innerWidth >= '800' ? (
				<div>
					<div key={card.id} className="relative flex cursor-pointer w-[760px] h-32 2xl:w-[960px] 2xl:h-44 mx-auto my-6 border border-solid border-white/20 rounded-md">
						<img src={card.img} alt="" className="shrink-0 h-full rounded-md" onClick={() => navigate(card.path)}/>
						<div className="grid grid-col-1">
							<div className="flex">
								<Link to={card.path} className="text-2xl text-violet-700 hover:underline bold ml-2 mt-2">{card.name}</Link>
								{ location1 === 'courses' && <div className="cursor-default bg-[green]/40 text-green-700 text-xl py-2 px-4 rounded-md min-w-44 h-[38px] mt-1 text-center scale-[58%]">Estimate: {card.time}</div>}
							</div>
							<p className="relative -top-3 mx-2 overflow-hidden h-24">{card.short_description}</p>
						</div>
						<div className="absolute bg-gray-950 bottom-0 right-0 w-[654px] h-8 grid grid-cols-4 rounded-b-md">
							<div className="flex relative left-2 pt-2 pl-4 w-[150px] rounded-sm">
								<FontAwesomeIcon icon={faEye} className="hover:text-blue-700"/>
								<span className="absolute left-[37px] top-1 text-blue-700">{card.views}</span>
							</div>
							<div className="flex relative pt-2 pl-4 w-[150px]">
								<div className="relative -top-[3px] hover:text-red-700" id={card.id} onClick={handleLiked}><FontAwesomeIcon id={card.id} icon={liked === 'on' ? SolidHeart : RegularHeart} className={`text-xl ${liked === 'on' && 'text-red-700'}`}/></div>
								<span className="absolute left-[42px] top-1 text-red-700">{card.likes}</span>
							</div>
							<div className="flex relative pt-2 pl-4 w-[150px]">
								<FontAwesomeIcon icon={faDownload} className="hover:text-yellow-700"/>
								<span className="absolute left-[37px] top-1 text-yellow-700">{card.downloads}</span>
							</div>
							<div className="flex relative pt-2 pl-4 w-[150px]">
								<div className="relative -top-[3px] hover:text-purple-700" id={card.id} onClick={handleBookmark}><FontAwesomeIcon id={card.id} icon={bookmark === 'on' ? SolidBookmark : RegularBookmark} className={`text-xl ${bookmark === 'on' && 'text-purple-700'}`}/></div>
								<span className="absolute left-[37px] top-1 text-purple-700">{card.likes}</span>
							</div>
						</div>
					</div>
				</div>
			) : (		
				<div>
					<div key={card.key} className="relative mx-auto my-6 cursor-pointer w-[340px] min-h-[350px] overflow-hidden border border-solid border-white/20 rounded-md">
						<img src={card.img} alt={card.name} className="h-48 w-full mb-2 rounded-md overflow-hidden"/>
						<div className="mx-2 text-sm pb-2">{card.short_description}</div>
						<div className="grid grid-cols-2 pt-2">
							<div className="flex relative left-2">
								<FontAwesomeIcon icon={faEye} className="hover:text-blue-700"/>
								<span className="absolute left-6 -top-1">{card.views}</span>
							</div>
							<div className="flex relative left-12">
								<div className="relative -top-[3px] hover:text-red-700" id={card.id} onClick={handleLiked}><FontAwesomeIcon id={card.id} icon={liked === 'on' ? SolidHeart : RegularHeart} className={`text-xl ${liked === 'on' && 'text-red-700'}`}/></div>
								<span className="absolute left-6 -top-1">{card.likes}</span>
							</div>
						</div>
						<div className="grid grid-cols-2 pt-2">
							<div className="flex relative left-2">
								<FontAwesomeIcon icon={faDownload} className="hover:text-violet-700"/>
								<span className="absolute left-6 -top-1">{card.downloads}</span>
							</div>
							<div className="flex relative left-[51px]">
								<div className="relative -top-[3px] hover:text-purple-700" id={card.id} onClick={handleBookmark}><FontAwesomeIcon id={card.id} icon={bookmark === 'on' ? SolidBookmark : RegularBookmark} className={`text-xl ${bookmark === 'on' && 'text-purple-700'}`}/></div>
								<span className="absolute left-6 -top-1">{card.likes}</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

Card.propTypes = {
	card: PropTypes.shape({
		id: PropTypes.string.isRequired,
		path: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		created_at: PropTypes.string,
		time: PropTypes.string.isRequired,
		short_description: PropTypes.string,
		views: PropTypes.number,
		likes: PropTypes.number,
		downloads: PropTypes.number,
		comments: PropTypes.number
	}).isRequired,
};
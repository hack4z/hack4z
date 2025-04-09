import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Select({card}){
	const [mode, setMode] = useState('closed');

	return(
		<div className="bg-black pl-2 py-4 border-y border-solid border-white/20">
			<div className="flex gap-2 cursor-pointer relative" onClick={() => setMode(prevMode => prevMode === 'closed' ? 'open' : 'closed')}>
				<h1 className="text-xl">{card.name}</h1>
				<FontAwesomeIcon icon={faCaretDown} className={`relative top-2 transform-translate duration-500 delay-200 ${mode === 'open' ? '-rotate-180' : 'rotate-0'}`}/>
				{card.state === 'complete' && <FontAwesomeIcon icon={faCheck} className="border border-solid border-white/40 p-1 rounded-full absolute right-4 text-green-700 bg-green-700/40"/>}
			</div>
			<div className={`cursor-pointer relative overflow-y-scroll transform-transition duration-700 ${mode === 'open' ? `h-full` : 'h-0'}`}>
				<Link to='colors'><div className="cursor-pointer ml-2 mt-4 py-2 pl-2">Colors</div></Link>
			</div>
		</div>
	)
}

Select.propTypes = {
	card: PropTypes.shape({
		name: PropTypes.string.isRequired,
		state: PropTypes.string.isRequired
	}).isRequired,
};
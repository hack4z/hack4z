import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function OffCanvas({isOpen, setSearchMode}){
	return(
		<div id="offcanvas" className={`h-full overflow-y-scroll fixed top-20 z-20 bg-black border border-solid border-white/20 sm:w-1/3 w-1/2 px-2 py-4 ${isOpen === 'closed' ? 'left-0' : 'sm:-left-1/3 -left-1/2'} transform-transition delay-200 duration-500`}>
			<div onClick={() => setSearchMode(prevMode => prevMode === 'on' ? 'off' : 'on')}><FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-6 top-4 text-xl"/></div>
		</div>
	)
}

OffCanvas.propTypes = {
	isOpen: PropTypes.string.isRequired, 
	setSearchMode: PropTypes.func.isRequired
};
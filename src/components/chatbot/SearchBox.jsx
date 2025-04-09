import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBox({errorMessage, search, setSearchMode, windowWidth}){
	return(
		<div method='post' style={{ marginLeft: `${(windowWidth - 340) / 2}px` }} className="w-[340px] min-h-36 py-6 px-2 bg-[#1e2227] z-40 fixed top-44 mx-auto">
			<h1 className="font-bold text-center text-lg mb-2">Search for Session</h1>
			<div className="relative">
				<input type="text" name="search" id='search' className="w-[320px] outline-none bg-transparent rounded-md pl-8 pr-4 py-2 border border-solid border-white/40" onChange={search}/>
				<FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-2 top-[13px] text-white/40"/>
				{errorMessage && <small className="text-sm text-center text-red-700">{errorMessage}</small>}
			</div>
			<div className="flex justify-between w-[320px]">
				<button className="mt-4 px-6 py-2 bg-gray-400/40 rounded-md" onClick={() => setSearchMode('off')}>Cancel</button>
				<button className="mt-4 px-6 py-2 bg-green-700 rounded-md" onClick={() => errorMessage === '' && setSearchMode('off')}>Search</button>
			</div>		
		</div>
	)
}

SearchBox.propTypes = {
	errorMessage: PropTypes.string.isRequired, 
	search: PropTypes.func.isRequired, 
	setSearchMode: PropTypes.func.isRequired, 
	windowWidth: PropTypes.string.isRequired
};
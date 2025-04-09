import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

export default function CardSelection({ cards }) {
	const [currentFilters, setCurrentFilters] = useSearchParams();
	const filters = [
					{ key: 'f0', name: 'Recommended', type: 'type', value: 'recommended', styles: 'bg-blue-700/40 text-blue-700' },
					{ key: 'f1', name: 'Completed', type: 'type', value: 'completed', styles: 'bg-yellow-700/40 text-yellow-700' },
					{ key: 'f2', name: 'Not Completed', type: 'type', value: 'notcompleted', styles: 'bg-orange-700/40 text-orange-700' },
					{ key: 'f3', name: 'Beginner', type: 'level', value: 'beginner', styles: 'bg-red-700/40 text-red-700' },
					{ key: 'f4', name: 'Intermediate', type: 'level', value: 'intermediate', styles: 'bg-purple-700/40 text-purple-700' },
					{ key: 'f5', name: 'Advanced', type: 'level', value: 'advanced', styles: 'bg-violet-700/40 text-violet-700' }
	];

	// Build dynamic filter query based on current filters
	const filterParams = Array.from(currentFilters.entries()).reduce((acc, [key, value]) => {
		acc[key] = value;
		return acc;
	}, {});

	// Dynamically filter the courses based on current filters
	const displayedCards = cards.filter(card => {
		return Object.keys(filterParams).every(key => {
		// Assuming `course.level` or `course[type]` exists for other filters
			return card[key] && card[key] === filterParams[key];
		});
	});

	function handleFilters(key, value) {
		setCurrentFilters(prevFilters => {
			const newFilters = prevFilters;
				if (value === null) {
				newFilters.delete(key); // Remove filter if value is null
			} else {
			newFilters.set(key, value); // Add or update filter
		}
		return newFilters;
		});
	}

	return (
		<div>
			<div className="relative w-screen py-2 grid grid-col-1 border-b border-solid border-white/20">
				<input type="text" className="rounded-md border border-solid border-white/20 mx-auto bg-transparent py-1 px-10 outline-none"/>
				<FontAwesomeIcon icon={faMagnifyingGlass} className="relative text-white mx-auto -top-6 -left-32"/>
			</div>
			<nav className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-evenly mt-4 pb-4 border-b border-solid border-white/20">
				{ filters.map(filter => (
					<button key={filter.key} className={`text-[10px] sm:text-xs py-2 sm:py-3 px-4 ${filter.styles} rounded-md text-center mx-auto min-w-28 my-2`} onClick={() => handleFilters(filter.type, filter.value)}>{filter.name}</button>
				))}
				<button className="text-[10px] sm:text-xs py-2 sm:py-3 px-4 bg-gray-900/90 text-white/40 rounded-md text-center mx-auto w-28 my-2" onClick={() => {filters.forEach(filter => { handleFilters(filter.type, null)})}}>Clear</button>
			</nav>
			{ displayedCards.map((card, index) => <Card 
				key={`card${index}`} 
				card={card}
				/>) }
		</div>
	);
}

CardSelection.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			created_at: PropTypes.string,
			time: PropTypes.string,
			short_description: PropTypes.string,
			views: PropTypes.number,
			likes: PropTypes.number,
			downloads: PropTypes.number,
			comments: PropTypes.number
		})
	)
}

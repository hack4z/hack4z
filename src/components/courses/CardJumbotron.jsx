import PropTypes from 'prop-types';

export default function CourseJumbotron({cards}){

	return(
		<div className="mb-4 border-b border-solid border-white/20">	
			<div className="grid grid-cols-4 justify-evenly overflow-hidden py-6 px-2 border border-solid border-white/20 mx-4 my-4 rounded-md shadow-md shadow-white/20">
				{cards.map(card => (
					<div className="grid-rows-2 my-4" key={card.id}>
						<img src={card.icon} alt="" className="w-12 h-12 rounded-lg mx-auto"/>
						<p className="text-center text-xs mt-2">{card.name}</p>
					</div>
				))}
			</div>
		</div>
	)
}

CourseJumbotron.propTypes = {
	cards: PropTypes.arrayOf( 
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			icon: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
};
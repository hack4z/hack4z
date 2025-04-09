import PropTypes from 'prop-types';

export default function StoreCard({card}){

	return(
		<div className="relative bg-gray-950 rounded-md min-h-64 w-64 shrink-0 sm:scale-100 scale-90">
			<img src={card.img} alt="" className="min-h-36"/>
			<h6 className="bold text-center text-lg mt-2">{card.price}</h6>
			<button className="absolute bottom-2 left-[70px] px-6 py-2 rounded-md bg-blue-700 active:ring-4 active:ring-blue-700/40">Purchase</button>
		</div>
	)
}

StoreCard.propTypes = {
	card: PropTypes.shape({
		img: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired
	})
};
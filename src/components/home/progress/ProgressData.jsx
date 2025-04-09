import CircularBar from './CircularBar';
import PropTypes from 'prop-types';

export default function ProgressData({progress}){

	return(
		<div className="border-b border-solid border-white/20 pb-16">
			<div className="grid grid-cols-4 gap-y-16 justify-evenly">
				{progress.map(bar => (
					<div key={bar.key} className="xs:h-20 xs:w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:w-32 lg:h-32 mx-auto">
						<CircularBar limit={bar.value} mode={bar.mode} text={bar.mode == 'on' ? `${bar.value}%` : 'Coming soon'} pathColor={bar.color} id={bar.id} name={bar.name}/>
					</div>
				))}
			</div>
		</div>
	)
}

ProgressData.propTypes = {
	progress: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			value: PropTypes.number.isRequired,
			mode: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			color: PropTypes.string.isRequired
		})
	)
};
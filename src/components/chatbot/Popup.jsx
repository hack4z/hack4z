import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

export default function Popup({setCustomizeMode, setPopupMode}){
	function toggleCustomizeMode(){
		setCustomizeMode('on');
		setPopupMode('off');
	}

	return(
		<div className="fixed z-20 top-32 right-6 pb-6 bg-gray-800 h-72 w-96 rounded-md">
			<div onClick={toggleCustomizeMode} className="cursor-pointer flex gap-2 py-4 pl-4 text-lg border-y border-solid border-white/20">
				<span className="">Customize GPT</span>
				<FontAwesomeIcon icon={faRobot} className="relative top-1"/>
			</div>
		</div>
	)
}

Popup.propTypes = {
	setCustomizeMode: PropTypes.func.isRequired, 
	setPopupMode: PropTypes.func.isRequired
};
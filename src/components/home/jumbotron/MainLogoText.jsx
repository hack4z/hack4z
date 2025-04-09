import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function MainLogoText({text, time}) {
	const [toggleMode, setToggleMode] = useState('off');
	// Start the animation when the component mounts and ensure it repeats.
	useEffect(() => {
		const interval = setInterval(() => {
			setToggleMode((prevMode) => (prevMode === 'off' ? 'on' : 'off'));
		}, time); // Change between 'on' and 'off' every 5 seconds to repeat the animation
		// Clear interval on component unmount
		return () => clearInterval(interval);
	}, []);

	return (
    	<span className={`text-[#ff022c] transition-opacity duration-1000 ${toggleMode === 'off' ? 'opacity-0' : 'opacity-100'}`}>{text}</span>
	)
}

MainLogoText.propTypes = {
	text: PropTypes.string.isRequired,
	time: PropTypes.number.isRequired
};
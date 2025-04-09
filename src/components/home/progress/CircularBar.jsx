import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularBar({limit, mode, text, pathColor, id, name}){
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
    	const interval = setInterval(() => {
    		setPercentage((prev) => {
    			if (prev === limit) {
    				clearInterval(interval);
    				return prev;
    			}
    			return prev + 1;
    		});
    	}, 25); // Adjust the speed of the animation by changing this value
    	return () => clearInterval(interval);
    }, [limit]);

    return(
    	<div className="cursor-pointer relative w-full h-full">
        	<CircularProgressbar value={percentage} maxValue={100} text={`${percentage == 0 ? text : `${percentage}%`}`} styles={buildStyles({
				pathColor: `${pathColor}`, // Change the color of the path
				textColor: "#333", // Color of the percentage text
				textSize: `${mode === 'off' ? '12px': '16px'}`,
				trailColor: "#2e2e2f", // Background color of the circle
				strokeLinecap: "butt", // Smooth curve at the edges of the path
				rotation: 1 / 2 + 1 / 8, // Adjust rotation for a different starting point
			})}/>
			{id === 'p3' ?  <div className="text-xs text-center mt-4">Cybersecurity <p>&</p> Pentesting</div> : <div className="text-xs text-center mt-4">{name}</div> }
		</div>
    )
}

CircularBar.propTypes = {
	limit: PropTypes.number.isRequired, 
	mode: PropTypes.string.isRequired, 
	text: PropTypes.string.isRequired, 
	pathColor: PropTypes.string.isRequired, 
	id: PropTypes.string.isRequired, 
	name: PropTypes.string.isRequired
};
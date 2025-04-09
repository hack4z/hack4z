import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default  function CustomizePopup({windowWidth, setSysInstruction, setCustomizeMode}){
	const [infoMode, setInfoMode] = useState('off');

	return(
		<div style={{ marginLeft: `${(windowWidth - 340) / 2}px` }} className="w-[340px] sm:w-[450px] min-h-36 pb-6 pt-12 px-2 bg-[#1e2227] z-40 fixed top-24 mx-auto rounded-md">
			{ infoMode === 'on' && <div className="absolute right-4 min-h-44 w-60 bg-gray-800 z-50 px-4 py-6 text-sm font-serif">
				<p className="">- Write your personal details such as:</p>
				<ul className="relative left-8">
					<li className="list-disc">What are your hobbies</li>
					<li className="list-disc">Where do you live</li>
					<li className="list-disc">How old are you</li>
					<li className="list-disc">and more...</li>
				</ul>
				<br/>
				<p className="">- This will help the AI model understand and help you better</p>
			</div>}
			<div>
				<div onClick={() => setInfoMode(prevMode => prevMode === 'off' ? 'on' : 'off')}>
					<FontAwesomeIcon icon={faCircleInfo} className="absolute right-4 top-3 text-xl hover:text-white/20"/>
				</div>
				<div className="relative">
					<textarea onChange={(e) => setSysInstruction(e.target.value)} rows={8} type="text" name="custom" id='custom' className="w-[320px] sm:w-[435px] outline-none bg-transparent rounded-md px-4 py-2 border border-solid border-white/40"/>
				</div>
				<div className="flex justify-between w-[320px] sm:w-[435px]">
					<button className="mt-4 px-6 py-2 bg-gray-400/40 rounded-md" onClick={() => setCustomizeMode('off')}>Cancel</button>
					<button className="mt-4 px-6 py-2 bg-green-700 rounded-md" onClick={() => setCustomizeMode('off')}>Create</button>
				</div>			
			</div>
		</div>
	)
}

CustomizePopup.propTypes = {
	windowWidth: PropTypes.string.isRequired,
	setSysInstruction: PropTypes.func.isRequired,
	setCustomizeMode: PropTypes.func.isRequired
};
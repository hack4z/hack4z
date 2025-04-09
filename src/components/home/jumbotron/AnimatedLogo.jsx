import { useState, useEffect } from 'react';
import MainLogoText from './MainLogoText';
import LogoText from './LogoText';

export default function AnimatedLogo() {
	const [toggleMode, setToggleMode] = useState('off');

	// Start the animation when the component mounts and ensure it repeats.
	useEffect(() => {
		const interval = setInterval(() => {
			setToggleMode((prevMode) => (prevMode === 'off' ? 'on' : 'off'));
		}, 5000); // Change between 'on' and 'off' every 5 seconds to repeat the animation

		// Clear interval on component unmount
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="cursor-pointer mb-4 py-12 border-b border-white/20 border-solid">
			{/* HACK4Z animation */}
			<h1 className="text-center text-5xl sm:text-7xl">
				<MainLogoText text={'H'} time={6000}/>
				<span className={`transition-opacity duration-1000 ${toggleMode === 'off' ? 'opacity-0' : 'opacity-100'}`}>ACK</span>
				<MainLogoText text={'4Z'} time={6000}/>
			</h1>

			{/* "Affordable" to "Fun" animation */}
			<div className="flex justify-center gap-2 mt-4 text-[#ff022c] relative">
				{['Affordable', 'Accessible', 'Interactive', 'Gamified', 'Fun'].map((word, index) => (
					<p key={index}>
						<span className={`text-[#ff022c] text-xs ${toggleMode === 'off' ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>{word.charAt(0)}</span>
						<LogoText word={word} time={6000}/>
					</p>						
				))}
			</div>
		</div>
	);
}

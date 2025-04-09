import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCity } from '@fortawesome/free-solid-svg-icons';
import CountryList from 'country-list';

export default function Select(){
	const countryList = CountryList.getData();
	const [selectedCountry, setSelectedCountry] = useState(countryList[0].name);
	const [mode, setMode] = useState('closed');

	return(
		<>
			{mode == 'closed' ? (
				<input type="text" name="residence" id="residence" value={selectedCountry} className="cursor-pointer min-w-[340px] text-left py-3 px-2 pl-12 bg-transparent outline-none"/>
				):(
				<div type="text" name="residence" id="residence" className="cursor-pointer min-w-[340px] text-left py-3 px-2 pl-12 bg-transparent outline-none">{selectedCountry}</div>
			)}
			<FontAwesomeIcon icon={faCity} className="absolute top-[16px] left-4 text-white/20"/>
			<FontAwesomeIcon icon={faCaretDown} className={`absolute top-[16px] right-8 transform-transition duration-500 delay-400 ${mode === 'open' ? 'rotate-180' : 'rotate-0'}`} onClick={() => setMode(prevMode => prevMode === 'closed' ? 'open' : 'closed')}/>
			<div className={`cursor-pointer relative overflow-y-scroll transform-transition duration-700 delay-400 ${mode === 'open' ? 'h-64 border-t border-solid border-white/20' : 'h-0'}`}>
				{countryList.map(country => (
					<div key={country.code}>
						<div name="residence" id="residence" className={`text-left py-3 px-2 pl-12 ${selectedCountry === country.name && 'bg-blue-700'}`} onClick={() => setSelectedCountry(country.name)}>{country.name}</div>
					</div>
				))}
			</div>
		</>
	);
}
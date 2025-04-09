import { useState, useEffect } from 'react';
import Text from './Text';
import Final from './Final';

export default function Jumbotron(){
	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentPage(prevPage => prevPage >= 2 ? 0 : prevPage + 1);
		}, 7500);
		return () => clearInterval(interval);
	}, [])

	function checkCurrent(id){
		if(currentPage == id){
			return 'yes';
		}
		if(currentPage < id){
			return 'no';
		}
	}

	return(
		<div className="w-screen overflow-x-scroll h-72 ">
			<div className={`transform-transition duration-1000 relative ${currentPage == 1 ? '-left-[100%]' : currentPage == 2 ? '-left-[200%]' : 'left-0'} flex gap-0 h-full`}>
				<Text title={'Vision'} text={''}/>
				<Text title={'Motto'} text={''}/>
				<Final/>
			</div>
		</div>
	)
} 
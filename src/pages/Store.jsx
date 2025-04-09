import StoreCard from '../components/store/StoreCard';

export default function Store(){
	const card1  = { img: 'css.jpeg', price: 'KSH 5' };
	const card2  = { img: 'react-router.png', price: 'KSH 5' };

	return(
		<div className="w-screen min-h-screen">
			<div className="overflow-x-scroll py-4 px-4 flex sm:gap-12 gap-2">
				<StoreCard card={card1}/>
				<StoreCard card={card1}/>
				<StoreCard card={card1}/>
				<StoreCard card={card1}/>
				<StoreCard card={card1}/>
			</div>
			<div className="my-8 overflow-x-scroll py-4 px-4 flex sm:gap-12 gap-2">
				<StoreCard card={card2}/>
				<StoreCard card={card2}/>
				<StoreCard card={card2}/>
				<StoreCard card={card2}/>
				<StoreCard card={card2}/>
			</div>		
		</div>
	)
}
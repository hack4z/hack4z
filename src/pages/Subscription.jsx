import { useLoaderData } from 'react-router-dom';

export default function Subscription(){
	const subscriptions = useLoaderData();

	return(
		<div className="w-screen py-6 grid grid-col-1">
			<div className="grid grid-cols-3 mx-auto min-w-[350px] text-xs">
				<div className="relative">	
					<div className="absolute top-[5px] bg-green-700 rounded-full w-2 h-2"></div>
					<span className="absolute left-4">Unlimited Access</span>
				</div>
				<div className="relative left-3">	
					<div className="absolute top-[5px] bg-red-700 rounded-full w-2 h-2"></div>
					<span className="absolute left-4">No Access</span>
				</div>
				<div className="relative">	
					<div className="absolute top-[5px] bg-amber-700 rounded-full w-2 h-2"></div>
					<span className="absolute left-4">Limited Access</span>
				</div>
			</div>
			<div className="grid grid-col-1 xl:grid-cols-2">
				{subscriptions.map(subscription => (
					<div key={subscription.key} className="min-w-[340px] scale-90 sm:min-w-[480px] mx-auto my-6 border border-solid border-white/20 rounded-md py-4 px-6">
						<h1 className="my-6 text-center text-2xl">{subscription.name} <span className="relative -top-[2px] text-sm italic">KSH{subscription.price}</span></h1>
						{subscription.description.map(description => (
							<div key={description.key} className="relative flex gap-2 text-xs sm:text-md md:text-lg">
								<div className={`absolute top-[8px] ${description.color === 'green' ? 'bg-green-700' : description.color === 'amber' ? 'bg-amber-700' : 'bg-red-700'} rounded-full w-2 h-2`}></div>
								<p className="relative left-4 text-white/20">{description.text}.</p>
								<span className="relative top-[3px] md:top-[6px] text-xs text-white/20 pl-4"><em>{description.ext}</em></span>
							</div>
						))}
						<button className="relative left-6 sm:left-20 md:left-24 my-6 bg-yellow-900 rounded-md min-w-[280px] text-center py-4">Pay Now</button>
					</div>
				))}
			</div>
		</div>
	)
}
import { useLoaderData, useSearchParams } from 'react-router-dom';

export default function Notifications(){
	const [currentFilter, setCurrentFilters] = useSearchParams();
	const { filters, notifications } = useLoaderData();

	function handleFilters(key, value) {
		setCurrentFilters(prevFilters => {
			const newFilters = prevFilters;
				if (value === null) {
				newFilters.delete(key); // Remove filter if value is null
			} else {
			newFilters.set(key, value); // Add or update filter
		}
		return newFilters;
		});
	}
	return(
		<div className="min-h-screen w-screen">
			 <nav className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-evenly mt-4 pb-4 border-b border-solid dark:border-white/20 border-black/40">
				{filters.map(filter => (
					<div key={filter.id} className={`text-[10px] sm:text-xs py-2 sm:py-3 px-4 ${filter.styles} ${currentFilter.has(filter.type, filter.value) ? `scale-100 sm:scale-105 ${filter.activeStyles}` : 'scale-90'} rounded-md text-center mx-auto min-w-28 my-2`} onClick={() => handleFilters(filter.type, filter.value)}>{filter.name}</div>
				))}
				<div className="text-[10px] sm:text-xs py-2 sm:py-3 px-4 bg-gray-600/40 text-gray-600 rounded-md text-center mx-auto w-[102px] my-2" onClick={() => {filters.forEach(filter => { handleFilters(filter.type, null)})}}>Clear</div>
			</nav>
			<div className="">
				{ notifications.map((ntf, index) => (	
					<div key={index} className="flex gap-6 border-y border-solid border-white/20 py-4">
						<img src={ntf.img} alt="" className="relative min-h-16 min-w-20 ml-4 rounded-md my-auto"/>
						<div className="grid grid-rows-2">
							<h6 className="bold">{ntf.name}</h6>
							<p className="text-xs">{ntf.description}</p>
						</div>
					</div>	
				))}
			</div>
		</div>
	)
}
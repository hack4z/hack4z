import { Form, Link, useSearchParams, Outlet } from 'react-router-dom';


export default function Blog(){
	const [currentFilters, setCurrentFilters] = useSearchParams();
	const filters = [
		{ key: 'f0', name: 'Recommended', type: 'type', value: 'recommended', styles: 'bg-blue-700/40 text-blue-700' },
		{ key: 'f1', name: 'Popular', type: 'type', value: 'completed', styles: 'bg-yellow-700/40 text-yellow-700' },
		{ key: 'f2', name: 'News', type: 'type', value: 'notcompleted', styles: 'bg-orange-700/40 text-orange-700' },
		{ key: 'f3', name: 'Tips', type: 'level', value: 'beginner', styles: 'bg-red-700/40 text-red-700' },
		{ key: 'f4', name: 'Suggestions', type: 'level', value: 'intermediate', styles: 'bg-purple-700/40 text-purple-700' },
		{ key: 'f5', name: 'Projects', type: 'level', value: 'advanced', styles: 'bg-violet-700/40 text-violet-700' }
	];	

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
		<div className="w-screen min-h-screen">
			<nav className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-evenly mt-4 pb-4 border-b border-solid border-white/20">
				{filters.map(filter => (
					<div key={filter.key} className={`text-[10px] sm:text-xs py-2 sm:py-3 px-4 ${filter.styles} ${currentFilters.has(filter.type, filter.value) ? `scale-100 sm:scale-105 ${filter.activeStyles}` : 'scale-90'} rounded-md text-center mx-auto min-w-28 my-2`} onClick={() => handleFilters(filter.type, filter.value)}>{filter.name}</div>
				))}
				<div className="text-[10px] sm:text-xs py-2 sm:py-3 px-4 bg-gray-600/40 text-gray-600 rounded-md text-center mx-auto w-[102px] my-2" onClick={() => {filters.forEach(filter => { handleFilters(filter.type, null)})}}>Clear</div>
			</nav>
			<div className="relative">
				<nav className="flex flex-1 flex-col lg:flex-row items-center justify-between">
					<Link to="/"><img src="logo.webp" alt="site logo" className="w-16 h-16 mr-5 ml-6 p-1 bg-gray-100 rounded-full cursor-pointer hover:scale-110"/></Link>
					<div className="hidden lg:block">
						<ul className="flex flex-col lg:flex-row justify-end mt-2 sm:mt-5 mb-5 pb-2 font-light text-lg gap-5 lg:gap-1 text-center">
							<li><Link aria-current="page" className="active px-5 lg:px-10 py-3 font-light border-b-2 border-red-500 text-gray-100">Home</Link></li>
							<li><Link className="px-5 lg:px-10 py-3 font-light hover:border-b-2 hover:border-red-500" to="categories/">Categories</Link></li>
							<li><Link className="px-5 lg:px-10 py-3 font-light hover:border-b-2 hover:border-red-500" to="tags/">Tags</Link></li>
						</ul>
					</div>
				</nav>
				<div className="absolute top-8 right-5 flex items-center lg:hidden">	
					<button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="openMenu">	
						<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
						</svg>
						<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>
			</div>
			<header className="flex flex-col w-full items-center justify-center text-white pt-8 pb-8">
					<div className="flex flex-1 flex-row justify-between">
						<h2 className="w-full text-center text-6xl font-roboto text-white/75">
							<Link to='/'><span className="text-[#ff022c]">H</span>ACK<span className="text-[#ff022c]">4Z</span></Link>
						</h2>
					</div>
				<div className="w-full">
					<p className="w-full text-center pl-1 pb-4 sm:pt-3 sm:pb-0 font-crimson font-normal leading-8 text-gray-500 text-sm">May the 4z be with you</p>
				</div>
				<Form method="post" className="relative w-9/12 lg:w-1/2 h-12 my-5">
					<input className="bg-gray-800 placeholder:italic placeholder:text-gray-600 w-full h-12 rounded-full mt-1 pl-5 pr-5 border border-gray-800 text-gray-100 outline-none" placeholder="Input Keywords..." type="text" name="searchbar" id="searchbar"/>
					<button className="absolute inset-y-2 right-1 w-28 h-10 font-light bg-gray-900 hover:bg-red-500 text-gray-500 hover:text-gray-100 rounded-full cursor-pointer">Search</button>
				</Form>
			</header>
			<Outlet context={{ currentFilters: currentFilters }}/>
		</div>
	)
}
import { Link } from 'react-router-dom';

export default function NotFound(){
	return(
		<div className="grid grid-col-1 justify-evenly min-h-screen pt-48">
			<p className="text-7xl">404 NOT FOUND</p>
			<Link to="/" className="mx-auto bg-yellow-900 rounded-md w-64 h-12 pt-3 text-center">Home Page</Link>
		</div>
	);
}
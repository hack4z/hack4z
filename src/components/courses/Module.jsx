import { useLoaderData, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from './library/CodeBlock';

export default function Module(){
  	const code = "// Write your JavaScript code here";
	const card = useLoaderData();
	
	return(
		<div className="min-h-screen w-screen relative">
			<Link to=".." relative><div className="absolute -top-2 left-4 hover:text-blue-700 text-center border border-solid border-white/40 rounded-full p-1 w-8"><FontAwesomeIcon icon={faArrowLeft}/></div></Link>
			<img src={`../../${card.img[0]}`} className="relative -top-3 mx-auto sm:h-48 md:h-56"/>
			<div className="w-screen border-b border-solid border-white/40 relative -top-3"></div>
			<CodeBlock initialCode={code}/>
		</div>
	)
}
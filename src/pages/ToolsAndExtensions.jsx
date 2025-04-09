import { useLoaderData } from 'react-router-dom';
import CardJumbotron from '../components/courses/CardJumbotron';
import CardSelection from '../components/courses/CardSelection';

export default function Extensions(){
	const { tools, extensions } = useLoaderData();
	const data = tools.concat(extensions);

	return(
		<div className="mb-6">
			<CardJumbotron cards={data}/>
			<CardSelection cards={data}/>
		</div>
	)
}
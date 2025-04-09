import { useLoaderData } from 'react-router-dom';
import CardJumbotron from '../components/courses/CardJumbotron';
import CardSelection from '../components/courses/CardSelection';

export default function Course(){
	const { sfcs } = useLoaderData();

	return(
		<div className="mb-6">
			<CardJumbotron cards={sfcs}/>
			<CardSelection cards={sfcs}/>
		</div>
	)
}
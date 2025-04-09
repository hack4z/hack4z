import { useLoaderData } from 'react-router-dom';
import CardJumbotron from '../components/courses/CardJumbotron';
import CardSelection from '../components/courses/CardSelection';

export default function Course(){
	const courses = useLoaderData();

	return(
		<div className="mb-6 bg-black min-h-screen">
			<CardJumbotron cards={courses}/>
			<CardSelection cards={courses}/>
		</div>
	)
}
import { useLoaderData } from 'react-router-dom';
import AnimatedLogo from '../components/home/jumbotron/AnimatedLogo';
import Jumbotron from '../components/home/jumbotron2/Main';
import ProgressData from '../components/home/progress/ProgressData';
import CardLayout from '../components/home/courses/CardLayout';
import Quote from '../components/home/quotes/Quote';

export default function Home(){
	const { courses, progress } = useLoaderData();
	return(
		<div className="min-h-screen">
			<AnimatedLogo/>
			<ProgressData progress={progress}/>
			<Jumbotron/>
			<CardLayout cards={courses} isDataSlotActive={'off'} name={'History'} link={'courses'}/>
			<Quote/>
			<CardLayout cards={courses} isDataSlotActive={'off'} name={'Courses'} link={'courses'}/>
		</div>
	)
}
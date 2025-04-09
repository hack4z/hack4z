import { useOutletContext, useLoaderData } from 'react-router-dom';
import Card from '../../components/blog/Card';

export default function Home(){
	const { currentFilters } = useOutletContext();
	const blogs = useLoaderData();

	// Build dynamic filter query based on current filters
	const filterParams = Array.from(currentFilters.entries()).reduce((acc, [key, value]) => {
		acc[key] = value;
		return acc;
	}, {});

	// Dynamically filter the courses based on current filters
	const displayedBlogs = blogs.filter(blog => {
		return Object.keys(filterParams).every(key => {
		// Assuming `course.level` or `course[type]` exists for other filters
			return blog[key] && blog[key] === filterParams[key];
		});
	});

	return(
		<div className="">
			{ displayedBlogs.map(blog => <Card key={blog.key} card={blog}/>)}
		</div>
	)
}
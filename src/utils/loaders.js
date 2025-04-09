import { getCourses, getGeneralProgress, getSfcs, getBlogs, getCourse } from './utils';

export async function courseLoader(){
	const { courses } = await getCourses();
	return courses;
}

export async function homeLoader(){
	try{
		const pre_data = sessionStorage.getItem('4Zhome');
		if(pre_data){
			const {courses, progress} = JSON.parse(pre_data);
    		return { courses: courses, progress: progress };
		}
	}catch(e){
		console.log(e)
	}
    const {courses} = await getCourses();
    const progress = await getGeneralProgress();
    sessionStorage.setItem('4Zhome', JSON.stringify({ courses: courses, progress: progress }));
	return { courses: courses, progress: progress };
}

export async function notificationLoader(){
	const { notifications } = await getNotifications();
	return notifications;
}

export async function sfcLoader(){
	const { sfcs } = await getSfcs()
	return sfcs;
}

export async function blogLoader(){
	const { blogs } = await getBlogs();
	return blogs;
}

export async function mainLoader({request}){
	const path = await request.url;
	const name = path.split('/').slice(-1).toString();
	const { courses } = await getCourse(name);
	return courses[0];
}
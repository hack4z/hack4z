import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Main from './components/courses/Main';
//import Module from './components/courses/Module';
import Blog from './components/blog/Blog';

/* PAGES */

//Main Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import AI from './pages/AI';
import Store from './pages/Store';
import BlogHome from './pages/blog/Home';
import BlogCategory from './pages/blog/Category';
import BlogSaved from './pages/blog/Saved';
import Help from './pages/Help';
import NotFound from './pages/NotFound';

//Editor
import CodeEditor from './pages/CodeEditor';

//Authentication
import LoginForm from './pages/SignIn';
import RegistrationForm from './pages/SignUp';
import { requireAuth } from './utils/utils';

//loaders
import { 
courseLoader,
homeLoader,
blogLoader,
//moduleLoader,
mainLoader
} from './utils/loaders'

import {  
aiAction,
editorAction,
helpAction,
loginAction,
registrationAction
} from './utils/actions'


export default function App(){
	const router = createBrowserRouter(createRoutesFromElements(
		<Route path='/' element={<Layout/>}>
			<Route path="auth" element={<LoginForm/>} action={loginAction} />
			<Route path="new" element={<RegistrationForm/>} action={registrationAction}/>
			<Route loader={requireAuth}>
				<Route index element={<Home/>} loader={homeLoader}/>
				<Route path="courses">
					<Route index element={<Courses/>} loader={courseLoader}/>
					{['python', 'html', 'tailwindcss'].map((course, index) => (
						<Route key={index} path={course}>
							<Route index  element={<Main/>} loader={mainLoader}/>
							{/*['colors', 'responsive_design', 'fonts'].map((module_, index) => (
								<Route key={index} path={module_} element={<Module/>} loader={moduleLoader}/>
							))*/}
						</Route>
					))}
				</Route>
				<Route path="store" element={<Store/>}/>
				<Route path="blog" element={<Blog/>}>
					<Route index element={<BlogHome/>} loader={blogLoader}/>
					<Route path="categories" element={<BlogCategory/>}/>
					<Route path="saved" element={<BlogSaved/>}/>
				</Route>
				<Route path="tools">
					<Route path="editor" element={<CodeEditor/>} action={editorAction}/>
					<Route path="chatbot" element={<AI/>} action={aiAction}/>
				</Route>
			</Route>
			<Route path="help" element={<Help/>} action={helpAction}/>
			<Route path="*" element={<NotFound/>}/>
		</Route>
	));

	return(
		<RouterProvider router={router}/>
	)
}
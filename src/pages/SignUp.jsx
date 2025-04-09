import { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEnvelope, faEyeSlash, faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faKey, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faApple, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import Select from '../components/auth/Select';

export default function RegistrationForm(){
	const [visibility, setVisibility] = useState('hidden');

	return(
		<Form method='post' className="relative z-0 text-center py-6">
			<h1 className="text-7xl mb-2">SIGN UP</h1>
			<small className="text-xs"><em>Have an account?<Link to="/auth" className="text-blue-700"> Sign in</Link></em></small>
			<div className="grid grid-col-1 justify-evenly mt-6 mx-auto max-w-[340px]">
				<div className="grid grid-cols-2 justify-between gap-8 mb-8">
					<div className="relative">
						<input type="text" name="firstName" id="firstName" placeholder="First Name" className="max-w-[160px] mt-6 rounded-md py-3 px-2 pl-12 bg-transparent border border-solid border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-700"/>
						<FontAwesomeIcon icon={faUser} className="absolute left-6 top-[40px] dark:text-white/20 transform-transition duration-500 delay-500"/>
					</div>
					<div className="relative">
						<input type="text" name="lastName" id="lastName" placeholder="Last Name" className="max-w-[160px] mt-6 rounded-md py-3 px-2 pl-12 bg-transparent border border-solid border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-700"/>
						<FontAwesomeIcon icon={faUser} className="absolute left-6 top-[40px] dark:text-white/20 transform-transition duration-500 delay-500"/>
					</div>
				</div>
				<div className="relative">
					<input type="email" name="email" id="email" placeholder="Email" className="min-w-[340px] mt-4 rounded-md py-3 px-2 pl-12 bg-transparent border border-solid border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-700"/>
					<FontAwesomeIcon icon={faEnvelope} className="absolute left-6 top-[32px] text-white/20 transform-transition duration-500 delay-500"/>
					<p className="text-xs invisible peer-invalid:visible text-red-700 italic mt-2">Please provide a valid email address</p>
				</div>
				<div className="relative">
					<input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" className="min-w-[340px] mt-4 rounded-md py-3 px-2 pl-12 bg-transparent border border-solid border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-700"/>
					<FontAwesomeIcon icon={faPhone} className="absolute left-6 top-[32px] text-white/20 transform-transition duration-500 delay-500"/>
				</div>
				<div className="relative mt-6">
					<input type="date" name="birthday" id="birthday" className="min-w-[340px] mt-4 rounded-md py-3 px-2 pl-12 bg-transparent border border-solid border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-700"/>
					<FontAwesomeIcon icon={faCalendar} className="absolute left-6 top-[32px] text-white/20 transform-transition duration-500 delay-500"/>
				</div>
				<div className="relative mt-6 mx-auto">
					<div className="relative mt-6 rounded-md border border-solid border-white/20">
						<Select/>
					</div>
				</div>
				<div className="relative">
					<input type={visibility === "visible" ? "text" : "password"} placeholder="New Password" name="password" id="password" min="8" max="12" className="min-w-[340px] mt-12 rounded-md py-3 px-2 pl-12 bg-transparent border border-solid border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-700"/>
					<FontAwesomeIcon icon={faKey} className="absolute left-6 top-[64px] text-white/20 transform-transition duration-500 delay-500"/>
					<FontAwesomeIcon icon={visibility === "visible" ? faEyeSlash : faEye} className="absolute top-[64px] right-8" onClick={() => setVisibility(prevVisibility => prevVisibility === 'visible' ? 'hidden' : 'visible')}/>
				</div>
				<div className="relative">
					<input type={visibility === "visible" ? "text" : "password"} name="confirmationPassword" id="confirmationPassword" placeholder="Confirmation Password" min="8" max="12" className="min-w-[340px] mt-12 rounded-md py-3 px-2 pl-12 bg-transparent border border-solid border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-700"/>
					<FontAwesomeIcon icon={faKey} className="absolute left-6 top-[64px] dark:text-white/20 transform-transition duration-500 delay-500"/>
					<FontAwesomeIcon icon={visibility === "visible" ? faEyeSlash : faEye} className="absolute top-[64px] right-8" onClick={() => setVisibility(prevVisibility => prevVisibility === 'visible' ? 'hidden' : 'visible')}/>
				</div>
				<button className="relative mb-8">
					<div className="max-w-[320px] py-4 mx-auto rounded-md bg-yellow-900 bg-transparent mt-12">Create User</div>
				</button>
				<hr/>
				<p className="text-xs text-center my-6">or</p>
				<div className="relative">
					<div className="max-w-[320px] py-4 mx-auto pl-6 rounded-md mt-6 border border-solid border-white/20 text-center">oogle</div>
					<FontAwesomeIcon icon={faGoogle} className="absolute top-[44px] left-[140px] scale-125"/>
				</div>
				<div className="relative">
					<div className="max-w-[320px] py-4 mx-auto rounded-md mt-12 border border-solid border-white/20 text-center"><p className="ml-6">Mac / IOS</p></div>
					<FontAwesomeIcon icon={faApple} className="absolute top-[68px] left-[130px] scale-150"/>
				</div>
				<div className="relative">
					<div className="max-w-[320px] py-4 mx-auto rounded-md mt-12 border border-solid border-white/20 text-center"><p className="ml-6">Microsoft</p></div>
					<FontAwesomeIcon icon={faMicrosoft} className="absolute top-[68px] left-[128px] scale-150"/>
				</div>
			</div>
		</Form>
	)
}
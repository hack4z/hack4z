import { useState } from 'react';
import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEnvelope, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane, faKey } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faApple, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

export default function LoginForm(){
	const [visiblility, setVisibility] = useState('hidden');
	const [searchParams, setSearchParams] = useSearchParams();
	const errorMessage = useActionData();
	const paramErrorMessage = searchParams.get('message');
	const navigation = useNavigation();

/*	const passwordValidation = [
		{req: "Must be at least 8 characters long", achv: false},
		{req: "Must contain at least one special character", achv: false},
		{req: "Must contain at least one capital character", achv: false},
		{req: "Must contain at least three numbers", achv: false},
		{req: "No underscores or hyphens", achv: false}
	];
*/
	return(
		<div className="relative z-0 text-center py-6">
			<h1 className="text-7xl mb-2">SIGN IN</h1>
			{errorMessage && <h1 className="text-xs italic text-center text-red-700">{errorMessage}</h1>}
			{paramErrorMessage && <h1 className="text-xs italic text-center text-red-700">{paramErrorMessage}</h1>}
			<small className="text-xs"><em>Don&apos;t have an account?<Link to="/new" className="text-blue-700"> Sign Up</Link></em></small>
			<Form method="post">		
				<div className="grid grid-col-1 justify-evenly mt-6">
					<div className="relative">
						<input type="email" name="email" id="email" placeholder="Email" className="min-w-[320px] mt-6 rounded-md py-3 pr-2 pl-8 bg-transparent border border-solid border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-700"/>
						<FontAwesomeIcon icon={faEnvelope} className="absolute left-2 top-[41px] text-white/20"/>
						<p className="text-xs invisible peer-invalid:visible text-red-700 italic mt-2">Please provide a valid email address</p>
					</div>
					<div className="relative">
						<input type={visiblility === "visible" ? "text" : "password"} name="password" id="password" placeholder="Password" min="8" max="12" className="min-w-[320px] mt-6 rounded-md py-3 pr-2 pl-8 bg-transparent border border-solid border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-700"/>
						<FontAwesomeIcon icon={faKey} className="absolute left-2 top-[41px] text-white/20"/>
						<FontAwesomeIcon icon={visiblility === "visible" ? faEyeSlash : faEye} className="absolute top-[40px] right-4" onClick={() => setVisibility(prevVisibility => prevVisibility === 'visible' ? 'hidden' : 'visible')}/>
					</div>
					<Link className="text-right text-xs italic text-blue-700 mt-2">Forgot Password?</Link>
					<button className="relative mb-8" disabled={navigation.state === 'submitting'}>
						<div className="min-w-[280px] py-4 rounded-md bg-yellow-900 bg-transparent mt-12">{navigation.state === 'submitting' ? 'Logging in...' : 'Login'}</div>
						<FontAwesomeIcon icon={faPaperPlane} className={`absolute top-[68px] ${navigation.state === 'idle' ? 'left-28' : 'left-20'}`}/>
					</button>
					<hr/>
					<p className="text-xs text-center my-6">or</p>
					<div className="relative">
						<div className="min-w-[280px] py-4 pl-6 rounded-md mt-6 border border-solid border-white/20 text-center">oogle</div>
						<FontAwesomeIcon icon={faGoogle} className="absolute top-[44px] left-[132px] scale-125"/>
					</div>
					<div className="relative">
						<div className="min-w-[280px] py-4 rounded-md mt-12 border border-solid border-white/20 text-center"><p className="ml-6">Mac / IOS</p></div>
						<FontAwesomeIcon icon={faApple} className="absolute top-[68px] left-[118px] scale-150"/>
					</div>
					<div className="relative">
						<div className="min-w-[280px] py-4 rounded-md mt-12 border border-solid border-white/20 text-center"><p className="ml-6">Microsoft</p></div>
						<FontAwesomeIcon icon={faMicrosoft} className="absolute top-[68px] left-[116px] scale-150"/>
					</div>
				</div>
			</Form>
		</div>
	)
}
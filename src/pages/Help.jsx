import { Form } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faBug, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Help(){
	return(
		<Form method='post' className="min-h-screen grid grid-rows-4 justify-evenly mt-6">
			<div className="relative">
				<input type="text" name="name" id="name" placeholder="Full Name" className="min-w-[320px] sm:min-w-[480px] mt-6 rounded-md py-3 pr-2 pl-8 bg-transparent border border-solid border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-700"/>
				<FontAwesomeIcon icon={faCircleUser} className="absolute left-2 top-[41px] text-white/20"/>
			</div>
			<div className="relative -top-28">
				<input type="email" name="email" id="email" placeholder="Email" className="min-w-[320px] sm:min-w-[480px] mt-6 rounded-md py-3 pr-2 pl-8 bg-transparent border border-solid border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-700"/>
				<FontAwesomeIcon icon={faEnvelope} className="absolute left-2 top-[41px] text-white/20"/>
			</div>
			<div className="relative -top-56">
				<textarea name="msg" id="msg" placeholder="Write the error, bug or the description of the issue / problem." className="h-44 min-w-[320px] sm:min-w-[480px] mt-6 rounded-md py-3 pr-2 pl-8 bg-transparent border border-solid border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-700"></textarea>
				<FontAwesomeIcon icon={faBug} className="absolute left-2 top-[41px] text-white/20"/>
			</div>
			<button className="relative mb-8 -top-64">
				<div className="min-w-[280px] py-4 rounded-md bg-yellow-900 mt-12">Submit</div>
				<FontAwesomeIcon icon={faPaperPlane} className="absolute top-[102px] left-44"/>
			</button>
		</Form>
	)
}
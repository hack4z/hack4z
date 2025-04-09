import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLg, faBookOpen, faCoins, faMicrochip, faCreditCard, faBlog, faToolbox, faFolder, faSignOut, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

export default function OffCanvas({isOpen}){
	const navigation = useNavigate();

	function handleLogOut(){
		Cookies.remove('userData');
		navigation('/auth');
	}

	return(
		<div id="offcanvas" className={`h-screen overflow-y-scroll fixed top-20 z-40 bg-black border border-solid border-white/20 sm:w-1/3 w-1/2 px-2 py-4 ${isOpen === 'closed' ? 'left-0' : 'sm:-left-1/3 -left-1/2'} transform-transition delay-200 duration-500`}>
			{
				[
					{id: "n1", name: "Home", path: "/", icon: faHomeLg}, 
					{id: "n2", name: "Courses", path: "/courses", icon: faBookOpen }, 
					{id: "n3", name: "Store", path: "/store", icon: faCoins }, 
					{id: "n4", name: "AI Chatbot", path: "/tools/chatbot", icon: faMicrochip},
					//{id: "n5", name: "Subscription", path: "/subscription", icon: faCreditCard }, 
					{id: "n6", name: "Blog", path: "/blog", icon: faBlog }, 
					//{id: "n7", name: "Tools & Assets", path: "/tools", icon: faToolbox }, 
					//{id: "n8", name: "SFC", path: "/sfc", icon: faFolder  }, 
					{id: "n9", name: "Help", path: "/help", icon: faCircleQuestion  }, 
					{id: "n10", name: "Log Out", path: "/auth", icon: faSignOut }
				].map((link, index) => (
					<div key={index} className="my-2">
						{link.name === 'Log Out' ? (
							<div className="flex gap-2">
								<FontAwesomeIcon icon={link.icon} className=""/>
								<p className="hover:text-blue-700 mb-4 relative -top-1" onClick={handleLogOut}>{link.name}</p> 
							</div>
						) : (
							<>
								<FontAwesomeIcon icon={link.icon} className="mr-2"/>
								<Link to={link.path} className="hover:text-blue-700 mt-1">{link.name}</Link>
							</>
						)}
						<br/>
						<br/>
					</div>
				))
			}
		</div>
	)
}

OffCanvas.propTypes = {
	isOpen: PropTypes.string.isRequired
}
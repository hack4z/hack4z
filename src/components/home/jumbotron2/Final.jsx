import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faFacebook, faXTwitter, faFigma, faGithub, faDiscord, faReddit, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Final(){
	return(
		<div className="w-screen pt-4 shrink-0">
			<h1 className="uppercase text-center text-4xl font-serif">JOIN THE COMMUNITY</h1>
			<div className="mt-6 ml-20 grid grid-rows-3 grid-cols-4">
				<Link to={'blog'} className="my-3 w-28 bg-yellow-800 py-2 pl-2 rounded-md flex gap-2">
					<FontAwesomeIcon icon={faUserFriends} className="relative top-1"/>
					<span>Blog</span>
				</Link>
				<Link to={'youtube'} className="my-3 w-28 bg-red-800 py-2 pl-2 rounded-md flex gap-2">
					<FontAwesomeIcon icon={faYoutube} className="relative top-1"/>
					<span>Youtube</span>
				</Link>
				<Link to={'youtube'} className="my-3 w-28 bg-red-800 py-2 pl-2 rounded-md flex gap-2">
					<FontAwesomeIcon icon={faInstagram} className="relative top-1"/>
					<span>Instagram</span>
				</Link>
				<Link to={'youtube'} className="my-3 w-28 bg-red-800 py-2 pl-2 rounded-md flex gap-2">
				<FontAwesomeIcon icon={faFacebook} className="relative top-1"/>
					<span>Facebook</span>
				</Link>
				<Link to={'youtube'} className="my-3 w-28 bg-red-800 py-2 pl-2 rounded-md flex gap-2">
					<FontAwesomeIcon icon={faGithub} className="relative top-1"/>
					<span>Github</span>
				</Link>
				<Link to={'youtube'} className="my-3 w-28 bg-red-800 py-2 pl-2 rounded-md flex gap-2">
					<FontAwesomeIcon icon={faDiscord} className="relative top-1"/>
					<span>Discord</span>
				</Link>
				<Link to={'youtube'} className="my-3 w-28 bg-red-800 py-2 pl-2 rounded-md flex gap-2">
					<FontAwesomeIcon icon={faXTwitter} className="relative top-1"/>
					<span>Twitter</span>
				</Link>
				<Link to={'youtube'} className="my-3 w-28 bg-red-800 py-2 pl-2 rounded-md flex gap-2">
					<FontAwesomeIcon icon={faFigma} className="relative top-1"/>
					<span>Figma</span>
				</Link>
				<Link to={'youtube'} className="my-3 w-28 bg-red-800 py-2 pl-2 rounded-md flex gap-2">
					<FontAwesomeIcon icon={faWhatsapp} className="relative top-1"/>
					<span>Whatsapp</span>
				</Link><Link to={'youtube'} className="my-3 w-28 bg-red-800 py-2 pl-2 rounded-md flex gap-2">
					<FontAwesomeIcon icon={faReddit} className="relative top-1"/>
					<span>Reddit</span>
				</Link>
			</div>
		</div>
	)
}
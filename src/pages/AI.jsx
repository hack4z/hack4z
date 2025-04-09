import { useState, useEffect } from 'react';
import { Form, useActionData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import InputArea from '../components/chatbot/InputArea';
import Jumbotron from '../components/chatbot/Jumbotron';
import Display from '../components/chatbot/Display';
import Popup from '../components/chatbot/Popup';
import CustomizePopup from '../components/chatbot/CustomizePopup';
import OffCanvas from '../components/chatbot/OffCanvas';
import SearchBox from '../components/chatbot/SearchBox';

export default function AI(){
	const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});
	const [promptWidth, setPromptWidth] = useState('');
	const [messages, setMessages] = useState([{role: 'user', content: "Explain how LLM's work"}, {role: 'assistant', content: "Explain how LLM's work"}]);
	const [popupMode, setPopupMode] = useState('off');
	const [navMode, setNavMode] = useState('open');
	const [errorMessage, setErrorMessage] = useState('');
	const [searchMode, setSearchMode] = useState('off');
	const [sysInstruction, setSysInstruction] = useState(`User Details: ${'programmer'}`);
	const [customizeMode, setCustomizeMode] = useState('off');
	const response = useActionData();

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
			const prompt = document.getElementById('display');
			if (prompt) setPromptWidth(prompt.clientWidth);
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // Initial call to set dimensions

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if(response) setMessages(prevMessages => [...prevMessages, response]);
	}, [response]);
	
	function search(e){
		console.log(e.target.value);
	}

	return(
		<Form method="post" className="min-h-screen w-screen pb-16 bg-gray-800/20">
			<nav className="relative">
				<div className="cursor-pointer fixed top-20 left-8 scale-90 z-30" onClick={() => setNavMode(prevMode => prevMode === 'closed' ? 'open' : 'closed')}>
					<div className="relative border-b-4 border-solid border-white/60 h-6 w-6"></div>
					<div className="relative -top-4 left-2 border-b-4 border-solid border-white/60 h-6 w-6"></div>
					<div className="relative -top-8 left-4 border-b-4 border-solid border-white/60 h-6 w-6"></div>
				</div>
				<div><FontAwesomeIcon icon={faPenToSquare} className="fixed top-24 text-2xl left-24 z-30"/></div>
				<div onClick={() => setPopupMode(prevMode => prevMode === 'off' ? 'on' : 'off')}><FontAwesomeIcon icon={faGear} className="fixed right-4 top-24 text-2xl"/></div>
			</nav>
			<OffCanvas isOpen={navMode} setSearchMode={setSearchMode}/>
			{ searchMode === 'on' && <SearchBox errorMessage={errorMessage} search={search} setSearchMode={setSearchMode} windowWidth={windowSize.width}/>}
			{ popupMode === 'on' && <Popup setCustomizeMode={setCustomizeMode} setPopupMode={setPopupMode}/> }
			{ customizeMode === 'on' && <CustomizePopup windowWidth={windowSize.width} setSysInstruction={setSysInstruction} setCustomizeMode={setCustomizeMode}/> }
			<div className="pt-6 px-4">
				{messages[0] ? messages.map((msg, index) => (
					<Display key={index} role={msg.role} content={msg.content} promptWidth={promptWidth} windowWidth={windowSize.width}/>
				)) : (
					<Jumbotron/>
				)}
			</div>
			<InputArea setSysInstruction={setSysInstruction}/>
		</Form>
	)
}
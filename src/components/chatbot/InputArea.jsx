import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

export default function InputArea(){
	const [userInput, setUserInput] = useState('');
	const textareaRef = useRef(null);

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto';
			textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
		}
	}, [userInput]);

	return (
		<div className="fixed z-10 bottom-1 left-0 right-0 h-auto flex justify-center"> {/* Added outer container */}
			<div className="relative bg-gray-800/20 w-[320px] sm:w-[480px] md:w-[560px] lg:w-[720px]"> {/* Moved form inside container */}
				<textarea id="prompt" name="prompt" ref={textareaRef} value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="What do you need help with ?" className="w-full mx-auto bg-[#06080b] border border-gray-700 rounded-lg p-3 pl-8 resize-none outline-none text-gray-100 pr-12" rows={1} style={{ overflow: 'hidden' }}/>
				<FontAwesomeIcon icon={faFileUpload} className="absolute text-xl hover:text-blue-700 left-3 top-4 "/>
				<button className="absolute inset-y-0 right-3 flex items-center px-4 text-blue-500 hover:text-blue-400 focus:outline-none">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.769 59.769 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
					</svg>
				</button>
			</div>
		</div>
	);
};
import { useState, useEffect } from 'react';
import { useActionData, Form } from 'react-router-dom';
import Editor from '../components/editor/editor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPlus, faFile, faTimes } from '@fortawesome/free-solid-svg-icons';
import { saveCode, loadCode, deleteCode, loadAllCode } from '../utils/codesaver';

export default function CodeEditor(){
	const [session, setSession] = useState([{name: 'hello.py', code: null, lang: 'python'}]);
	const [currentFile, setCurrentFile] = useState(0);
	const [fileCreationMode, setFileCreationMode] = useState('off');
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [errorMessage, setErrorMessage] = useState('');
	let newFile = useActionData();

	useEffect(() => {
		window.addEventListener('resize', function() {
			setWindowWidth(window.innerWidth);
		});
	}, []);

	function changeCurrentFile(e){
		setCurrentFile(e.target.id);
	}

	function updateSession(id, value){
		setSession(prevSession => {
			prevSession.map((file, index) => {
				if(index === id) return { name: file._name, code:value, lang: file.lang };
				return file;
			});
			return prevSession;
		});
	}

	function createFile(){
		setSession(prevSession => {
			if(newFile === undefined){
				return prevSession
			}else {
				prevSession.map(file => {
					if(file.name === newFile.name){
						setErrorMessage('File already exists');
						newFile = '';
					}else{
						setErrorMessage('');
					}
					return file;
				})
				if(newFile) {
					setFileCreationMode('off');
					return [...prevSession, newFile]
				};
				return prevSession;
		 	}
		});
	}

	function deleteFile(){
		setSession(prevSession => {
			prevSession.map(file => {
				if(file.name === prevSession[currentFile].name){
					return file;
				}
				console.log(file.name, file.name !== prevSession[currentFile].name)
			})
			return prevSession;
		});
	}

	return(
		<div className="w-screen">
		{ fileCreationMode === 'on' && (
			<Form method='post' style={{ marginLeft: `${(windowWidth - 340) / 2}px` }} className="w-[340px] min-h-36 py-6 px-2 bg-[#1e2227] z-40 fixed top-44 mx-auto">
				<div className="relative">
					<input type="text" name="file" id='file' className="w-[320px] outline-none bg-transparent rounded-md pl-8 pr-4 py-2 border border-solid border-white/40"/>
					<FontAwesomeIcon icon={faFile} className="absolute left-2 top-[13px] text-white/40"/>
					{errorMessage && <small className="text-sm text-center text-red-700">{errorMessage}</small>}
				</div>
				<div className="flex justify-between w-[320px]">
					<button className="mt-4 px-6 py-2 bg-gray-400/40 rounded-md" onClick={() => setFileCreationMode('off')}>Cancel</button>
					<button className="mt-4 px-6 py-2 bg-green-700 rounded-md" onClick={createFile}>Create</button>
				</div>			
			</Form>
		)} 
			<nav className="flex -gap-6 pr-8 overflow-x-scroll w-full bg-gray-600/40 border-b border-solid border-white/20">
				<div className="shrink-0 mt-1 py-2 px-8 scale-75 rounded-b-md">
					<FontAwesomeIcon icon={faCode} className=""/>
				</div>
				{ session.map((file, index) => (
					<div key={`${index}*`} id={index} onClick={changeCurrentFile} className={`relative shrink-0 cursor-pointer mt-1 py-2 px-8 scale-75 xl:scale-90 ${currentFile == index && 'bg-black rounded-t-md'}`}>
						{file.name}
						{currentFile == index && <div onClick={deleteFile}><FontAwesomeIcon icon={faTimes} className="absolute right-[8px] top-1"/></div>}
					</div>
				))}
				<div onClick={() => setFileCreationMode('on')} className="shrink-0 py-2 px-8 h-full rounded-b-md text-white/40 text-xl mt-[2px] bg-[#1e2227]">
					<FontAwesomeIcon icon={faPlus} className="scale-75"/>
				</div>
			</nav>
			{ session.map((file, index) => {
				if(currentFile == index) return <Editor key={`${index}*`} id={index} code={file.code} language={file.lang} updateSession={updateSession}/>
			})}
		</div>
	)
}
import { useState, useEffect } from 'react';
import { faToolbox, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ToolBar from './ToolBar';

export default function ToolBox(){
	const [currentToolMap, setCurrentToolMap] = useState(null);
	const [toolMap, setToolMap] = useState([
		{key: 1, x: 6, y: 0, icon: faToolbox, func: () => changeMap([
			{key: 'a1', x: 6, y: 0, icon: faTimes, func: () => console.log('Yo, whatup my homies')},
			{key: 'a2', x: 6, y: 4, icon: faTimes, func: () => console.log('Yo, whatup my homies')},
			{key: 'a3', x: 7, y: 5.5, icon: faTimes, func: () => console.log('Yo, whatup my homies')},
			{key: 'a4', x: 8, y: 6.75, icon: faTimes, func: () => console.log('Yo, whatup my homies')}
		])},
		{key: 2, x: 6, y: 4, icon: faToolbox, func: () => changeMap()},
		{key: 3, x: 7, y: 5.5, icon: faToolbox, func: () => changeMap()},
		{key: 4, x: 8, y: 6.75, icon: faToolbox, func: () => changeMap()}
	]);


	const [isOpen, setIsOpen] = useState(() => sessionStorage.getItem('toolbox') || 'closed');
	
	useEffect(() => {
		sessionStorage.setItem('toolbox', isOpen);
		const main = document.getElementById('mainBox');
		if(isOpen == 'open'){
			if(currentToolMap == null){
				toolMap.map((tool, index) => {
					const node = document.getElementById(`bar${index}`);
					main.style.right = `-3.25rem`
					console.log(node)
					node.style.top = `-${tool.y}rem`
					node.style.right = `-${tool.x}rem`
				})
			}else{
				currentToolMap.map((tool, index) => {
					const node = document.getElementById(`bar${index}`);
					main.style.right = `-3.25rem`
					console.log(node)
					node.style.top = `-${tool.y}rem`;
					node.style.right = `-${tool.x}rem`;
				});
			}
		}else{
			main.style.right = `-0.25rem`
		}
	}, [toolMap, isOpen, currentToolMap]);

	function changeMap(newMap){
		setCurrentToolMap(newMap);
	}

	function showTools(){
		if(currentToolMap){
			setCurrentToolMap(null);
		}else{
			setIsOpen(prevMode => prevMode == 'closed' ? 'open' : 'closed');
		}
	}

	return(
		<div className="fixed -right-12 bottom-2 grid grid-cols-2 gap-8 z-90">
			{ isOpen == 'open' && (
				<div className="grid grid-cols-4">
					{currentToolMap == null ? toolMap.map((tool, index) => (
						<ToolBar key={tool.key} index={index} icon={tool.icon} func={tool.func}/>
					)) : currentToolMap.map((tool, index) => (
						<ToolBar key={tool.key} index={index} icon={tool.icon} func={tool.func}/>
					))}
				</div>
			)}
			<div id="mainBox" className="relative right-6">
				<ToolBar icon={isOpen == 'closed' ? faToolbox : currentToolMap == null ? faTimes : faArrowRight} isOpen={isOpen} isNull={currentToolMap == null && 'yes'} func={showTools}/>
			</div>
		</div>
	)
}
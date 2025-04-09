import { useState } from "react";
import PropTypes from 'prop-types';
import Editor from '../../editor/editor';

export default function CodeBlock({initialCode = "", lang='javascript'}) {
	const [code, setCode] = useState(initialCode);

	return (
		<div className="max-w-[340px] my-6">
			<div className="">
				<div className="bg-white/20 h-6 w-full rounded-t-md flex gap-1 pl-2 pt-1">
					<div className="bg-green-700 rounded-full w-3 h-3"></div>
					<div className="bg-red-700 rounded-full w-3 h-3"></div>
					<div className="bg-amber-700 rounded-full w-3 h-3"></div>
				</div>
				<Editor code={code} language={lang} updateSession={(id, value) => console.log(id, value)} height={'150px'} width={'380px'} color={'#1e1e1e'}/>
			</div>
		</div>
	);
}

CodeBlock.propTypes = {
	initialCode: PropTypes.string,
	lang: PropTypes.string
};
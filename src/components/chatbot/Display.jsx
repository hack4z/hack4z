import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Prism from 'prismjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
//import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Display({ role, content, promptWidth, windowWidth }){
	const codeRef = useRef(null);
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (codeRef.current) {
			Prism.highlightAllUnder(codeRef.current);
		}
	}, [content]);

	const handleCopy = () => {
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};
	if(role === 'assistant'){
		return (
			<div className="mb-4 mt-6 p-4 rounded-md shadow-md self-start w-[400px] scale-[80%] sm:w-[450px] sm:scale-90 md:scale-100 lg:w-[580px] xl:w-[720px]">
				<div ref={codeRef} className="prose prose-invert prose-sm">
					<ReactMarkdown
						className="break-words"
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeRaw]}
						components={{
							code({ node, inline, className, children, ...props }) {
								const match = /language-(\w+)/.exec(className || '');
								const language = match ? match[1] : null;
								const codeString = String(children).replace(/\n$/, '');

								return !inline && language ? (
									<div className="relative">
										<div className="absolute -top-8 bg-white/20 h-8 w-full rounded-t-md flex gap-1 pl-2 pt-2">
											<div className="bg-green-700 rounded-full w-3 h-3"></div>
											<div className="bg-red-700 rounded-full w-3 h-3"></div>
											<div className="bg-amber-700 rounded-full w-3 h-3"></div>
											<div className="absolute top-1 left-16">{language}</div>
											<div className="absolute top-1 right-2 flex space-x-2">
												{/*<CopyToClipboard text={codeString} onCopy={handleCopy}>*/}
													<button className="text-gray-400 hover:text-white focus:outline-none text-xs px-2 py-1 rounded bg-gray-800">
														{copied ? "copied" : <FontAwesomeIcon icon={faClipboard}/> }
													</button>
												{/*</CopyToClipboard>*/}
											</div>
										</div>
										<pre className={`language-${language} p-4 pt-0 overflow-x-auto m-0`}>
											<code className={className} {...props}>
												{children}
											</code>
										</pre>
									</div>
								) : (
									<code className={className} {...props}>
										{children}
									</code>
								);
							},
							// Improved link handling:
							a: ({ node, ...props }) => (
								<a {...props} className="text-blue-500 underline hover:text-blue-400" target="_blank" rel="noopener noreferrer">
									{props.children} {/* Explicitly render children */}
								</a>
							),
							//Style for list
							ul: ({ node, ...props }) => (<ul {...props} className="list-disc ml-6 my-2" />),
							ol: ({ node, ...props }) => (<ol {...props} className="list-decimal ml-6 my-2" />),
							li: ({ node, ...props }) => (<li {...props} className="my-1" />),
							//Style for blockquote
							blockquote: ({ node, ...props }) => (<blockquote {...props} className="border-l-4 border-gray-600 pl-4 my-4 italic" />),
							//Style for horizontal rule
							hr: ({ node, ...props }) => (<hr {...props} className="my-4 border-t border-gray-600" />),
							//Style for strong and em
							strong: ({ node, ...props }) => (<strong {...props} className="font-bold" />),
							em: ({ node, ...props }) => (<em {...props} className="italic" />),
							//Style for headings
							h1: ({ node, ...props }) => (<h1 {...props} className="text-2xl font-bold mt-6 mb-2" />),
							h2: ({ node, ...props }) => (<h2 {...props} className="text-xl font-bold mt-5 mb-2" />),
							h3: ({ node, ...props }) => (<h3 {...props} className="text-lg font-bold mt-4 mb-2" />),
							h4: ({ node, ...props }) => (<h4 {...props} className="text-base font-bold mt-3 mb-2" />),
							h5: ({ node, ...props }) => (<h5 {...props} className="text-sm font-bold mt-2 mb-2" />),
							h6: ({ node, ...props }) => (<h6 {...props} className="text-xs font-bold mt-1 mb-2" />),
						}}
					>
						{content}
					</ReactMarkdown>
				</div>
			</div>
		);
	}else{
		return(
			<div className="py-16">
				<div style={{ marginLeft: `${(windowWidth - promptWidth)}px` }}  id="display" className="mx-auto px-8 py-2 bg-gray-900/40 rounded-md min-w-96">
					{content}
				</div>
			</div>
		)
	}
};

Display.propTypes = {
	role: PropTypes.string.isRequired, 
	content: PropTypes.string.isRequired, 
	promptWidth: PropTypes.string.isRequired, 
	windowWidth: PropTypes.string.isRequired
};
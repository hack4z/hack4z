import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { oneDark } from "@codemirror/theme-one-dark";
import { python } from "@codemirror/lang-python";
import { foldGutter, indentOnInput, bracketMatching, foldKeymap } from '@codemirror/language';
import { keymap, lineNumbers, highlightSpecialChars, drawSelection, rectangularSelection, highlightActiveLine } from "@codemirror/view";
import { history, defaultKeymap, historyKeymap } from "@codemirror/commands";
import { closeBrackets, autocompletion, closeBracketsKeymap, completionKeymap } from '@codemirror/autocomplete';
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search';
import { lintKeymap } from '@codemirror/lint';

export default function CodeEditor({id, code, language, updateSession, height='100vh', width='100vw', color='black'}){
	const editorRef = useRef(null);

	useEffect(() => {
		if (!editorRef.current) return;
		const updateListener = EditorView.updateListener.of(ViewUpdate => {
    		if (ViewUpdate.docChanged) {
        		updateSession(id, ViewUpdate.state.doc.toString());
    		}
    	});

		// Set up the editor state
		const state = EditorState.create({
			doc: code === null ? `# Write your ${language} code here` : code,
			extensions: [
				oneDark,          // Theme
				python(),       // Language support for JavaScript
				updateListener,
				lineNumbers(),
				highlightSpecialChars(),
				drawSelection(),
				rectangularSelection(),
				highlightActiveLine(),
				foldGutter(),
				indentOnInput(),
				bracketMatching(),
				closeBrackets(),
				autocompletion(),
				highlightSelectionMatches(),
				history(),
				keymap.of([
					...closeBracketsKeymap,
					...defaultKeymap,
					...searchKeymap,
					...historyKeymap,
					...foldKeymap,
					...completionKeymap,
					...lintKeymap
				]),
			],
		});
		EditorState.allowMultipleSelections.of(true);
		// Attach the editor view
		const view = new EditorView({
			state,
			parent: editorRef.current,
		});

		// Cleanup on component unmount
		return () => {
			view.destroy();
		};
	}, [id, code, language, updateSession]);

	useEffect(() => {
		const editor = document.getElementsByClassName('cm-editor');
		editor[0].style = `min-height: ${height}; max-width: ${width}; background-color: ${color}`;
		const gutter = document.getElementsByClassName('cm-gutters');
		gutter[0].style = `background-color: ${color}`;
	}, [color, height, width]);

	return(
		<div ref={editorRef} className="text-[13.2px] sm:text-[15px]" />
	)
};

CodeEditor.propTypes = {
	id: PropTypes.string.isRequired,
	code: PropTypes.string.isRequired, 
	language: PropTypes.string.isRequired, 
	updateSession: PropTypes.func.isRequired, 
	height: PropTypes.string, 
	width: PropTypes.string, 
	color: PropTypes.string
}
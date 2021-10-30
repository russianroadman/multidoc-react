import '../css/editor.css'
import '../css/menu.css'

import {create, createExample} from "../Api/api-service";
import {useState} from "react";

export default function Home(){

	const [documentTitle, setDocumentTitle] = useState('')
	const [blockTitle, setBlockTitle] = useState('')
	const [versionTitle, setVersionTitle] = useState('')

	const updateDocumentTitle = (value) => {
		setDocumentTitle(value)
	}

	const updateBlockTitle = (value) => {
		setBlockTitle(value)
	}

	const updateVersionTitle = (value) => {
		setVersionTitle(value)
	}

	const createDocument = () => {
		create(documentTitle, blockTitle, versionTitle)
			.then(res => {
				window.location = window.location.origin + '/editor/' + res
			})
			.catch(e => {
				console.log(e)
			})
	}

	const createExampleDocument = () => {
		createExample()
			.then(res => {
				window.location = window.location.origin + '/editor/' + res
			})
			.catch(e => {
				console.log(e)
			})
	}

	return(
		<div className="App">
			<div className="menu-wrapper">
				<div className="menu-item menu-item-icon">
					<svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="mediumpurple"><path d="M7 2c1.695 1.942 2.371 3 4 3h13v17h-24v-20h7zm6 11v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z"/></svg>
				</div>
				<div className="menu-item menu-item-main">
					CREATE DOCUMENT
				</div>
				<div className="menu-item no-padding">
					<input placeholder="Document title" className="menu-item-input"
						   value={documentTitle}
						   onChange={e => updateDocumentTitle(e.target.value)}
					/>
				</div>
				<div className="menu-item no-padding">
					<input placeholder="First paragraph title" className="menu-item-input"
						   value={blockTitle}
						   onChange={e => updateBlockTitle(e.target.value)}
					/>
				</div>
				<div className="menu-item no-padding">
					<input placeholder="Author name" className="menu-item-input"
						   value={versionTitle}
						   onChange={e => updateVersionTitle(e.target.value)}
					/>
				</div>
				<button className="menu-item green bold redactor-shadow-element" onClick={createDocument}>
					create
				</button>
				<button className="menu-item purple" onClick={createExampleDocument}>
					use example
				</button>
			</div>
		</div>
	)

}

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

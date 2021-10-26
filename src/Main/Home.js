import '../css/editor.css'
import '../css/home.css'
import {create} from "../Api/api-service";

export default function Home(){

	const createDocument = () => {
		create('Example', 'Introduction', 'Superman')
	}

	return(
		<div className="App">
			<div className="home-option-list">
				<div className="home-option-list-item">
					<svg width="50%" height="50%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="mediumpurple"><path d="M7 2c1.695 1.942 2.371 3 4 3h13v17h-24v-20h7zm6 11v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z"/></svg>
				</div>
				<button className="
					redactor-shadow-element
					home-option-list-item
					home-option-list-button
					home-use-example
				" onClick={createDocument}>
					use example
				</button>
			</div>
		</div>
	)

}

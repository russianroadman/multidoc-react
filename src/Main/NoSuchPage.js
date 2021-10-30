import '../css/editor.css'
import '../css/menu.css'

export default function NoSuchPage(){

	const home = () => {
		window.location = window.location.origin + '/home'
	}

	return(
		<div className="App">
			<div className="menu-wrapper">
				<div className="menu-item-main">
					PAGE NOT FOUND
				</div>
				<button onClick={home} className="menu-item purple redactor-shadow-element">
					go to main page
				</button>
			</div>
		</div>
	)

}

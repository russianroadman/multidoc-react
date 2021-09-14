import ContentArea from "./content-area";
import Top from "./top";
import './editor.css'

function App() {
  return (
    <div className="App">
        {Top("My first App")}
        <ContentArea/>
    </div>
  );
}

export default App;

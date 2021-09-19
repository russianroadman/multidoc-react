import './editor.css'
import ContentArea from "./content-area";
import Top from "./top";
import AddBlockButton from "./add-block";

function App() {
  return (
    <div className="App">
        {Top("My first App")}
        <ContentArea/>
        <AddBlockButton/>
    </div>
  );
}

export default App;

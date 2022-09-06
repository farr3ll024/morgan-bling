import {ReactComponent as Logo} from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";

const App = () =>
    (
        <div className="App">
            <div style={{ m: '200px', paddingBottom: 80 }}>
                <Navbar />
            </div>
            <header className="App-header">
                <Logo style={{height: 200}}/>
                <h1>Contact Morgan!</h1>
            </header>
            <Posts/>
        </div>
    )

export default App;
